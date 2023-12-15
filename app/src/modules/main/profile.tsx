import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MainStackNav } from "./main-nav";
import { useMeQuery } from "../../generated/graphql";
import { colors } from "../../ui/theme";

export const Profile: React.FC<MainStackNav<"Profile">> = () => {
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
                welcome to the fucking profile page
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
