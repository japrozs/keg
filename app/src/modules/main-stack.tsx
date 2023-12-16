import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Main } from "./main/main";
import { MainStackParamList } from "./main/main-nav";
import { Octicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import { Profile } from "./main/profile";
import { useMeQuery } from "../generated/graphql";
import { Notifications } from "./main/notifications";
import { Questions } from "./main/questions";
import { Search } from "./main/search";

interface MainStackProps {}

const Tab = createBottomTabNavigator<MainStackParamList>();

// TODO: move all this Tab.Screen options to another struct
//  and import it into each component

export const MainStack: React.FC<MainStackProps> = ({}) => {
    const { data } = useMeQuery();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#000",
                    borderTopColor: "#151A21",
                    borderTopWidth: 0.2,
                },
                headerStyle: {
                    backgroundColor: "#000",
                },
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen
                options={{
                    headerTitle: "",
                    title: "",
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
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <Octicons
                                name="home"
                                size={25}
                                color={focused ? "#fff" : "#838383"}
                            />
                        </View>
                    ),
                }}
                name="Home"
                component={Main}
            />
            <Tab.Screen
                options={{
                    headerTitle: "",
                    header: () => <></>,
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <Octicons
                                name="search"
                                size={25}
                                color={focused ? "#fff" : "#838383"}
                            />
                        </View>
                    ),
                }}
                name="Search"
                component={Search}
            />
            <Tab.Screen
                options={{
                    headerTitle: "",
                    title: "",
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
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <Octicons
                                name="flame"
                                size={25}
                                color={focused ? "#fff" : "#838383"}
                            />
                        </View>
                    ),
                }}
                name="Questions"
                component={Questions}
            />
            <Tab.Screen
                options={{
                    headerTitle: "Notifications",
                    headerTintColor: "#fff",
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <Octicons
                                name="bell"
                                size={25}
                                color={focused ? "#fff" : "#838383"}
                            />
                        </View>
                    ),
                }}
                name="Notifications"
                component={Notifications}
            />
            <Tab.Screen
                options={{
                    headerTitle: "",
                    title: "",
                    headerLeftContainerStyle: {
                        marginTop: 5,
                        paddingBottom: 10,
                        paddingLeft: 20,
                    },
                    headerLeft: () => (
                        <>
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 22.5,
                                    fontFamily: "Menlo",
                                }}
                            >
                                @{data?.me?.username}
                            </Text>
                        </>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <Octicons
                                name="person"
                                size={25}
                                color={focused ? "#fff" : "#838383"}
                            />
                        </View>
                    ),
                }}
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});
