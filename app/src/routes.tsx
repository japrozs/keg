import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./modules/main-stack";
import { useMeQuery } from "./generated/graphql";
import { AuthStack } from "./modules/auth-stack";

export default function Routes() {
    const { data, loading } = useMeQuery();

    console.log(data?.me);

    let body: any = null;
    if (!loading && data?.me != null) {
        body = <MainStack />;
    } else {
        body = <AuthStack />;
    }
    return <NavigationContainer>{body}</NavigationContainer>;
}
