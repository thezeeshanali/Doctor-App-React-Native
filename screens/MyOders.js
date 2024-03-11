import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../colorPallete/colors";
import CustomHeader from "../components/header";

export default function MyOrders({ navigation }) {
  return (
    <>
      <CustomHeader
        text="Orders"
        onPress={() => navigation.toggleDrawer()}
        cartPress={() => navigation.navigate("NoCartItems")}
      />

      <View style={styles.container}>
        <Text style={styles.text}>No Orders Found!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: color.headerColor,
    fontSize: 20,
    fontWeight: "bold",
  },
});
