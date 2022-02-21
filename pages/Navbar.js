import React, { createContext, useReducer } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import GameRoute from "./games/GamesRoute";
import ViewRoute from "./view/ViewRoute";
import DeviceRoute from "./devices/DeviceRoute"

import colors from "../css/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme, StyleSheet, View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
        headerShown: false,
      }}
    >
      {/*<Tab.Screen
        name="View"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabS}>
              <Icon name="home-outline" size={25} color={colors.main2} />
              <Text style={{ fontSize: 12 }}>Home</Text>
            </View>
          ),
        }}
      />*/}
      <Tab.Screen
        name="View"
        component={ViewRoute}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Icon2 name="led-strip-variant" size={30} color={colors.main2} />
              <Text style={{ fontSize: 12 }}>View</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={GameRoute}
        options={{
          tabBarIcon: () => {
            return (
              <View style={styles.tabC}>
                <Icon name="game-controller-outline" size={30} color="#FFF" />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Devices"
        component={DeviceRoute}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabS}>
              <Icon2
                name="devices"
                size={30}
                color={colors.main2}
              />
              <Text style={{ fontSize: 12 }}>Geräte</Text>
            </View>
          ),
        }}
      />
      {/*
      <Tab.Screen
        name="Information"
        component={LoginProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabS}>
              <Icon
                name="information-circle-outline"
                size={30}
                color={colors.main2}
              />
              <Text style={{ fontSize: 12 }}>Disclaimer</Text>
            </View>
          ),
        }}
      />*/}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabS: {
    alignItems: "center",
    justifyContent: "center",
  },

  tabC: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#CD5555",
    bottom: 20,
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Navbar;
