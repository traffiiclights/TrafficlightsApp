import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import React, { useRef } from "react";
import Header from "../../components/Header";

const Pong = ({ navigation }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Header navigation={navigation}>Pong</Header>
      <View style={styles.sliderContainer}>
        <Text>Test</Text>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box} />
        </Animated.View>
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
    backgroundColor: "green",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
