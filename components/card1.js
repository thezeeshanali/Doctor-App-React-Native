import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Icon from "@expo/vector-icons/AntDesign";
import { BoxShadow } from "react-native-shadow";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default function Card1(props) {
  const shadowOpt = {
    width: width - 20,
    height: 70,
    color: "#000",

    radius: 4,
    opacity: 0.01,
    x: 0,
    y: 3,
    style: { marginVertical: 5 },
  };
  return (
    <View style={styles.box}>
      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.img} source={{ uri: props.img }}></Image>
            <View style={{ flexDirection: "column", marginLeft: 15 }}>
              <Text style={styles.text}>{props.text}</Text>
              <Text style={styles.boldText}>{props.boldText}</Text>
            </View>
          </View>
          <Icon name="arrowright" size={30} />
        </TouchableOpacity>
      </BoxShadow>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
  card: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "grey",
  },
  boldText: {
    fontWeight: "bold",
  },
  box: {
    marginTop: 10,
    alignItems: "center",
  },
});
