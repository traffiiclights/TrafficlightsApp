import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../css/colors";

const Header = ({ children, navigation }) => {
  return (
    <View style={styles.headerNav}>
      <Pressable onPress={() => {}}>
        <Icon name="arrow-back-circle-outline" size={50} color={colors.main2} />
      </Pressable>
      <Text style={styles.headerText}>{children}</Text>
      <Pressable onPress={() => {}}>
        <Icon
          name="arrow-forward-circle-outline"
          size={50}
          color={colors.main2}
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  // Header
  headerNav: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
