import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import React, { useRef } from "react";
import Header from "../../components/Header";
import Slider from "@react-native-community/slider";
import axios from "axios";

const Matrix = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}>Matrix</Header>
      <View style={styles.sliderContainer}>
        <Text>There the Matrix Settings will be displayed</Text>
        
      </View>
    </View>
  );
};

export default Matrix;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 10,
    height: "100%",
    flexDirection: "column",
  },
  sliderContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 120,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  box: {
    height: 150,
    width: 50,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
});
