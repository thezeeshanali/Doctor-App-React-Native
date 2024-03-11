import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { color } from "../colorPallete/colors";

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={styles.editButton} onPress={props.screen}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  editButton: {
    alignSelf: "center",
    width: "45%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderRadius: 25,
    marginTop: 30,
    backgroundColor: color.headerColor,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
