import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Main } from "./main/main";
import { MainStackParamList } from "./main/main-nav";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Image, StyleSheet, Text } from "react-native";
// import {
//     useLoginMutation,
//     useLogoutMutation,
//     useMeQuery,
// } from "../generated/graphql";
import { constants, emptyIcon } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../ui/theme";

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
                headerStyle: {
                    backgroundColor: "#000",
                    borderBottomColor: "#ff0000",
                    borderBottomWidth: 0.0001,
                },
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen
                options={{
                    headerTitle: "",
                    headerLeftContainerStyle: {
                        marginTop: 5,
                        paddingBottom: 10,
                        paddingLeft: 20,
                    },
                    headerLeft: () => (
                        <>
                            <Image
                                style={{
                                    height: 33.5,
                                    width: 55.25,
                                }}
                                source={require("../../assets/icons/keg.png")}
                            />
                        </>
                    ),
                }}
                name="Home"
                component={Main}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});
