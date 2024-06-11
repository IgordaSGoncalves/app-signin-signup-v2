import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";
const Auth = createNativeStackNavigator();

export const AuthRoutes: React.FunctionComponent = () => {
    return (
        <Auth.Navigator>
            <Auth.Screen name="SignIn" component={SignIn}></Auth.Screen>
            <Auth.Screen name="SignUp" component={SignUp}></Auth.Screen>
        </Auth.Navigator>
    );
}
