import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { color } from "../colorPallete/colors";
import Icon from "@expo/vector-icons/AntDesign";

export default function CustomTextInput(props) {
  return (
    <View style={styles.fieldView}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.text}
        secureTextEntry={props.security}
      />
      <Icon name={props.icon} size={24} color={color.tabColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldView: {
    margin: 15,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    borderColor: color.headerColor,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    width: Dimensions.get("screen").width - 130,
  },
});
