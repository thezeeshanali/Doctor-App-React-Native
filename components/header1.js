import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { color } from "../colorPallete/colors";

export default function BackHeader(props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={25}
        color={"white"}
        onPress={props.backIcon}
      />
      <Text style={styles.text}>{props.text}</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    backgroundColor: color.headerColor,
    paddingHorizontal: 10,
    paddingTop: 40,
    justifyContent: "space-between",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: 2,
  },
});
