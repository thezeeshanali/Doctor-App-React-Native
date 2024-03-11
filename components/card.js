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

export default function Card(props) {
  const shadowOpt = {
    width: 170,
    height: 180,
    color: "#000",

    radius: 1,
    opacity: 0.01,
    x: 0,
    y: 2,
    style: { marginVertical: 5 },
  };
  return (
    <View style={styles.box}>
      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
          <View>
            <Image style={styles.img} source={{ uri: props.img }}></Image>
            <View style={{ flexDirection: "column" }}>
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
    padding: 15,
    height: 160,
  },
  text: {
    color: "grey",
    marginTop: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  box: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
  },
});
