import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import React, { useRef } from "react";
import Header from "../../components/Header";
import Slider from "@react-native-community/slider";
import axios from "axios";

import { sendPong } from "../../functions/calls";

const Pong = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}>Pong</Header>
      <View style={styles.sliderContainer}>
        <Text>You're Player x</Text>
        <Slider
          style={{
            width: "100%",
            height: "100%",
            transform: [{ rotate: "-90deg" }],
          }}
          minimumValue={0}
          maximumValue={255}
          step={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbImage={require("../../assets/wall.png")}
          onValueChange={async (value) => {
            sendPong({ value: value, player: 1 });
          }}
        />
      </View>
    </View>
  );
};

export default Pong;

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
