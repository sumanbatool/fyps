import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartingScreen from "./components/screens/startingscreen";
import SignUpScreen from "./components/screens/signup";
import SigninScreen from "./components/screens/signin";
import ForgotPassword from "./components/screens/forgotpass";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name=" " component={StartingScreen} />
        <Stack.Screen name="Create Account" component={SignUpScreen} />
        <Stack.Screen name="Log in" component={SigninScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
