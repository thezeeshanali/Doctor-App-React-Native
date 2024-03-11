import {
  Dimensions,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { color } from "../colorPallete/colors";
import CustomHeader from "../components/header";
import CustomHeading from "../components/heading";
import { CustomDatePicker } from "../components/datePicker";
import BackHeader from "../components/header1";

export default function Appointments({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  return (
    <View style={{ flex: 1 }}>
      <BackHeader text="Appointments" backIcon={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <CustomHeading text="Pick Start Date" />
        <CustomDatePicker />
        <CustomHeading text="Pick Last Date" />
        <CustomDatePicker />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <View style={styles.body}>
          <Text style={styles.text}>No Results Found</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.body,
    flex: 1,
  },
  body: {
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 10,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
  },
  searchButton: {
    borderWidth: 1,
    backgroundColor: color.headerColor,
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  text: {
    color: color.headerColor,
    fontSize: 20,
    fontWeight: "bold",
  },
});
