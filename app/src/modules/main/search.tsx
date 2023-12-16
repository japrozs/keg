import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MainStackNav } from "./main-nav";
import { colors } from "../../ui/theme";

export const Search: React.FC<MainStackNav<"Search">> = () => {
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
                Search page
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
