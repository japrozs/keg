import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MainStackNav } from "./main-nav";

export const Main: React.FC<MainStackNav<"Home">> = () => {
    return (
        <View style={styles.container}>
            <Text>pendejo</Text>

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
