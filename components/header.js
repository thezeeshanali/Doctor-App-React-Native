import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/AntDesign";
import { color } from "../colorPallete/colors";

export default function CustomHeader(props) {
  return (
    <View style={styles.container}>
      <Icon name="menufold" size={25} color={"white"} onPress={props.onPress} />
      <Text style={styles.text}>{props.text}</Text>
      <Icon
        name="shoppingcart"
        size={25}
        color={"white"}
        onPress={props.cartPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    height: 80,
    flexDirection: "row",
    backgroundColor: color.headerColor,
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: 2,
  },
});
