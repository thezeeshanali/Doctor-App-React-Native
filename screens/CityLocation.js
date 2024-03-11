import { Dimensions, LogBox, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { color } from "../colorPallete/colors";
import CustomHeader from "../components/header";
import UploadPresc from "../components/uploadPresc";
import DropDownPicker from "react-native-dropdown-picker";
import CustomButton from "../components/customButton";
import BackHeader from "../components/header1";

export default function CityLocation({ navigation, route }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Islamabad/Rawalpindi", value: "Islamabad/Rawalpindi" },
    { label: "Lahore", value: "Lahore" },
    { label: "Karachi", value: "Karachi" },
    { label: "Multan", value: "Multan" },
    { label: "Faislabad", value: "Faislabad" },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <BackHeader text="City" backIcon={() => navigation.goBack()} />
      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <UploadPresc
          icon="location"
          text="Your location is automatically set to Islamabad. This will impact any search that you perform"
          text2="CHANGE CITY"
        />
        <View style={styles.box}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{ borderColor: "white", width: "90%", margin: 20 }}
            dropDownContainerStyle={{
              borderColor: "white",
              width: "90%",
              margin: 20,
            }}
            placeholder={items[0].label}
          />
          <CustomButton
            text="Get Started"
            screen={() => navigation.navigate(route.params.screenName)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingBottom: 10,
  },
  box: {
    backgroundColor: color.body,
    padding: 8,
    height: Dimensions.get("screen").height,
  },
});
