import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { color } from "../colorPallete/colors";

export default function Main({ navigation }) {
  return (
    <View style={styles.containar}>
      <Image
        style={{ width: "100%", height: "50%" }}
        source={require("../assets/1.jpg")}
      />
      <View></View>
      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign name="lock" size={24} color={color.tabColor} />
          <Text>Sign In</Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <AntDesign name="adduser" size={24} color={color.tabColor} />
          <Text>Sign Up</Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: color.tabColor }}>Corporate Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={{ color: color.tabColor }}>Corporate Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containar: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "grey",
  },
  modal: {
    position: "absolute",
    backgroundColor: "white",
    borderWidth: 1,
    height: "50%",
    width: "80%",
    margin: 300,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    width: 140,
    height: 40,
    alignItems: "center",
    margin: 10,
    flexDirection: "row",
    borderRadius: 10,
    padding: 5,
    justifyContent: "space-between",
  },
  button1: {
    borderWidth: 2,
    width: 160,
    height: 40,
    alignItems: "center",
    margin: 10,
    flexDirection: "row",
    borderRadius: 20,
    padding: 5,
    justifyContent: "center",
    borderColor: "grey",
  },
});
