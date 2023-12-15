import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

export type MainStackParamList = {
    Home: undefined;
    Profile: undefined;
    Notifications: undefined;
};

export type MainStackNav<RouteName extends keyof MainStackParamList> = {
    navigation: BottomTabNavigationProp<MainStackParamList, RouteName>;
    route: RouteProp<MainStackParamList, RouteName>;
};
