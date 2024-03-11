import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "../colorPallete/colors";
export const CustomDatePicker = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={() => setShow(true)}>
          <View
            style={{
              marginTop: 20,
              height: 40,
              flexDirection: "row",
              paddingHorizontal: 10,
              alignItems: "center",
              width: Dimensions.get("screen").width - 30,
              marginHorizontal: 20,
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <FontAwesome name="calendar" size={22} color={color.tabColor} />
            <Text style={{ marginLeft: 20, fontSize: 18 }}>
              {date.toDateString()}
            </Text>
          </View>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </>
  );
};
