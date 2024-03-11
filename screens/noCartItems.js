import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { color } from "../colorPallete/colors";
import CustomHeader from "../components/header";
import BackHeader from "../components/header1";

export default function NoCartItems({ navigation }) {
  return (
    <>
      <BackHeader text="Cart Items" backIcon={() => navigation.goBack()} />

      <View style={styles.container}>
        <Text style={styles.text}>There is no Items in Cart</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Madicines")}
        >
          <Text style={styles.text1}>Click To Shop</Text>
          <Text style={styles.text1}>The Best Items</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.body,
  },
  text: {
    color: color.headerColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  text1: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: color.headerColor,
    justifyContent: "center",
    alignItems: "center",
  },
});
