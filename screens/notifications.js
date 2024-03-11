import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { color } from "../colorPallete/colors";
import CustomHeader from "../components/header";

export default function Notifications({ navigation }) {
  return (
    <>
      <CustomHeader
        text="Notifications"
        onPress={() => navigation.toggleDrawer()}
        cartPress={() => navigation.navigate("NoCartItems")}
      />
      <View style={styles.container}>
        <Text style={styles.text}>No Result Found!</Text>
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
