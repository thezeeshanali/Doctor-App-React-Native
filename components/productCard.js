import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { color } from "../colorPallete/colors";

export default function ProductCard(props) {
  return (
    <View style={styles.box}>
      <View style={styles.innerBox}>
        <View style={styles.imageBox}>
          <Image
            style={styles.img}
            source={{
              uri: props.image,
            }}
          />
        </View>
        <Entypo name="shopping-cart" size={24} color={color.headerColor} />
      </View>
      <Text style={styles.text}>{props.description}</Text>
      <View style={styles.priceBox}>
        <Text style={styles.text1}>Rs.</Text>
        <Text style={styles.priceText}>{props.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    margin: 20,
    height: 160,
    width: 140,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 10,
    backgroundColor: "white",
  },
  innerBox: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageBox: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E0E0E0",
  },
  img: {
    width: 50,
    height: 50,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text1: {
    color: "grey",
    fontSize: 16,
  },
  priceText: {
    color: color.tabColor,
    fontSize: 16,
    fontWeight: "bold",
  },
  priceBox: {
    flexDirection: "row",
    marginTop: 5,
  },
});
