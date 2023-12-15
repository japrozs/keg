import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthStackNav } from "./auth-nav";
import { useState } from "react";
import { colors } from "../../ui/theme";

export const Login: React.FC<AuthStackNav<"Login">> = () => {
    const [usernameOrEmailFocus, setUsernameOrEmailFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Text style={{ color: "#fff", fontSize: 40, fontWeight: "700" }}>
                Login
            </Text>
            <Text style={styles.label}>Username</Text>
            <TextInput
                value={usernameOrEmail}
                onChangeText={(t) => setUsernameOrEmail(t)}
                placeholder={"Username or Email"}
                onFocus={() => setUsernameOrEmailFocus(true)}
                onBlur={() => setUsernameOrEmailFocus(false)}
                autoCapitalize={"none"}
                style={[
                    styles.input,
                    usernameOrEmailFocus
                        ? {
                              borderColor: colors.primary_blue,
                              borderWidth: 1,
                          }
                        : {},
                    // errors.hasOwnProperty("usernameOrEmail")
                    //     ? {
                    //           borderColor: colors.red,
                    //           borderWidth: 1,
                    //       }
                    //     : {},
                ]}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                value={password}
                onChangeText={(t) => setPassword(t)}
                placeholder={"Password"}
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
                    // errors.hasOwnProperty("usernameOrEmail")
                    //     ? {
                    //           borderColor: colors.red,
                    //           borderWidth: 1,
                    //       }
                    //     : {},
                ]}
            />
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
});
