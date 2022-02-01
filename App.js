import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "./pages/Navbar";

//Redux
import { Provider as StateProvider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <StateProvider store={store}>
      <NavigationContainer>
        <Navbar />
      </NavigationContainer>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
