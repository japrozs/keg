import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Main } from "./main/main";
import { MainStackParamList } from "./main/main-nav";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";
// import {
//     useLoginMutation,
//     useLogoutMutation,
//     useMeQuery,
// } from "../generated/graphql";
import { constants, emptyIcon } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface MainStackProps {}

const Tab = createBottomTabNavigator<MainStackParamList>();

export const MainStack: React.FC<MainStackProps> = ({}) => {
    // const { data, loading } = useMeQuery();
    // const [logout] = useLogoutMutation();
    // const apolloClient = useApolloClient();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#000",
                },
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen
                options={{
                    headerTitle: "",
                    headerTintColor: "#ffffff",
                    headerStyle: {
                        backgroundColor: "#000",
                    },
                    headerLeft: () => (
                        <Image
                            style={styles.header}
                            source={require("../../assets/icons/keg.png")}
                        />
                    ),
                }}
                name="Home"
                component={Main}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 33.5,
        width: 55.25,
        marginLeft: 20,
        marginBottom: 10,
    },
});
