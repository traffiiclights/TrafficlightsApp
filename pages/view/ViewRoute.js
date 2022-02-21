import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Traffic from "./Traffic";

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Traffic" component={Traffic} />
    </Stack.Navigator>
  );
}

export default Route;
