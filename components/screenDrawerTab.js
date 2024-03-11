import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { color } from "../colorPallete/colors";
import { AntDesign } from "@expo/vector-icons";

export default function ScreenDrawerTab(props) {
  return (
    <TouchableOpacity style={styles.containar} onPress={props.onPress}>
      <AntDesign name={props.icon} size={25} color={color.headerColor} />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  containar: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: color.headerColor,
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: 1,
    marginLeft: 20,
  },
});
