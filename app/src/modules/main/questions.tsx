import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MainStackNav } from "./main-nav";
import { colors } from "../../ui/theme";

export const Questions: React.FC<MainStackNav<"Questions">> = () => {
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
                questions page
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
