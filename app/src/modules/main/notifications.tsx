import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MainStackNav } from "./main-nav";
import { useMeQuery } from "../../generated/graphql";
import { colors } from "../../ui/theme";

export const Notifications: React.FC<MainStackNav<"Notifications">> = () => {
    return (
        <ScrollView
            style={{
                backgroundColor: "#000",
                paddingTop: 10,
            }}
        >
            <Text
                style={{
                    fontFamily: "Menlo",
                    color: colors.primary_blue,
                }}
            >
                welcome to the fucking notifications page
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
