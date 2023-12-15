import { StatusBar } from "expo-status-bar";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { AuthStackNav } from "./auth-nav";
import { useState } from "react";
import { colors } from "../../ui/theme";
import { useLoginMutation } from "../../generated/graphql";
import { errorToMap } from "../../utils";
import { useApolloClient } from "@apollo/client";

interface ErrorProps {
    usernameOrEmail?: string;
    password?: string;
}

export const Login: React.FC<AuthStackNav<"Login">> = () => {
    const [usernameOrEmailFocus, setUsernameOrEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<ErrorProps>({});
    const client = useApolloClient();
    const [login, { loading }] = useLoginMutation();

    const handleSubmit = async () => {
        const response = await login({
            variables: {
                usernameOrEmail,
                password,
            },
        });

        if (response.data?.login.errors) {
            return setErrors(errorToMap(response.data?.login.errors));
        }

        client.resetStore();
    };

    return (
        <View style={styles.container}>
            <Text style={{ color: "#fff", fontSize: 40, fontWeight: "700" }}>
                Login
            </Text>
            <Text style={styles.label}>Username</Text>
            <TextInput
                value={usernameOrEmail}
                onChangeText={(t) => setUsernameOrEmail(t)}
                placeholder={"username or email"}
                placeholderTextColor={"#6e6e6e"}
                onFocus={() => setUsernameOrEmailFocus(true)}
                onBlur={() => setUsernameOrEmailFocus(false)}
                autoCapitalize={"none"}
                autoCorrect={false}
                style={[
                    styles.input,
                    usernameOrEmailFocus
                        ? {
                              borderColor: colors.primary_blue,
                              borderWidth: 1,
                          }
                        : {},
                    errors.hasOwnProperty("usernameOrEmail")
                        ? {
                              borderColor: "#ff0000",
                              borderWidth: 1,
                          }
                        : {},
                ]}
            />
            {errors.hasOwnProperty("usernameOrEmail") && (
                <Text style={{ color: "#ff0000" }}>
                    {errors.usernameOrEmail}
                </Text>
            )}
            <Text style={styles.label}>Password</Text>
            <TextInput
                value={password}
                onChangeText={(t) => setPassword(t)}
                placeholder={"password"}
                placeholderTextColor={"#6e6e6e"}
                autoCorrect={false}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                autoCapitalize={"none"}
                style={[
                    styles.input,
                    passwordFocus
                        ? {
                              borderColor: colors.primary_blue,
                              borderWidth: 1,
                          }
                        : {},
                    errors.hasOwnProperty("password")
                        ? {
                              borderColor: "#ff0000",
                              borderWidth: 1,
                          }
                        : {},
                ]}
            />
            {errors.hasOwnProperty("password") && (
                <Text style={{ color: "#ff0000" }}>{errors.password}</Text>
            )}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>
                    {loading ? "Loading..." : "Log in "}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        height: "100%",
        justifyContent: "center",
        padding: 20,
    },
    input: {
        borderColor: colors.inActive,
        borderRadius: 4,
        borderWidth: 0.7,
        padding: 13,
        fontSize: 18,
        fontWeight: "500",
        color: "#fff",
    },
    label: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 10,
    },
    button: {
        width: "100%",
        marginVertical: 20,
        borderRadius: 4,
        backgroundColor: colors.primary_blue,
        padding: 13,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
    },
});
