import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { color } from "../colorPallete/colors";

export default function UploadPresc(props) {
  return (
    <View style={styles.containar}>
      <Entypo name={props.icon} size={24} color={color.headerColor} />
      <View style={styles.containar1}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.containar}>
        <Text style={styles.text}>{props.text1}</Text>
        <Text style={styles.text}>{props.text2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: color.tabColor,
    textAlign: "center",
  },
  containar: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  containar1: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width - 80,
    marginTop: 20,
  },
});
