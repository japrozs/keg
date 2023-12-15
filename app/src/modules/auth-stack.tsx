import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Main } from "./main/main";
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
import { AuthStackParamList } from "./auth/auth-nav";
import { Login } from "./auth/login";

interface AuthStackProps {}

const Tab = createBottomTabNavigator<AuthStackParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
    // const { data, loading } = useMeQuery();
    // const [logout] = useLogoutMutation();
    // const apolloClient = useApolloClient();

    return (
        <Tab.Navigator tabBar={() => <></>} initialRouteName={"Login"}>
            <Tab.Screen
                options={{ header: () => <></> }}
                name="Login"
                component={Login}
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
