import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Matrix from "./Matrix";

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Matrix" component={Matrix} />
    </Stack.Navigator>
  );
}

export default Route;
