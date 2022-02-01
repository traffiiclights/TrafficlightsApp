import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pong from "./Pong";

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Pong" component={Pong} />
    </Stack.Navigator>
  );
}

export default Route;
