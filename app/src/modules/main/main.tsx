import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MainStackNav } from "./main-nav";
import { useMeQuery } from "../../generated/graphql";
import { colors } from "../../ui/theme";

export const Main: React.FC<MainStackNav<"Home">> = () => {
    const { data, loading } = useMeQuery();
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
                {JSON.stringify(data?.me)}
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
