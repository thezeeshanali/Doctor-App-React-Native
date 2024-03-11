import {
  Dimensions,
  FlatList,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Card from "../components/card";
import Banner from "../components/banner";
import { color } from "../colorPallete/colors";
import CustomHeader from "../components/header";
import Card1 from "../components/card1";
import CustomHeading from "../components/heading";
import BackHeader from "../components/header1";

export default function HealthRecords({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  let Mydata = [
    {
      id: 1,
      image:
        "https://thumbs.dreamstime.com/b/medicines-pills-icon-stock-121853305.jpg",
      service: "Madications",
    },
    {
      id: 2,
      image:
        "https://cdn2.vectorstock.com/i/thumb-large/05/86/blood-test-results-report-icon-vector-27910586.jpg",
      service: "Lab Reports",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/898/898671.png",
      service: "Prescriptions",
    },
    {
      id: 4,
      image:
        "https://cdn0.iconfinder.com/data/icons/thin-medicine-health/24/thin-0813_heart_vitals_pulse_rate_health-512.png",
      service: "Vitals",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <BackHeader
        text="My Health Records"
        backIcon={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <CustomHeading text="My Health Records" />
        <View style={styles.body}>
          <FlatList
            data={Mydata}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Card
                  img={item.image}
                  text={"My"}
                  boldText={item.service}
                ></Card>
              );
            }}
          />
        </View>
        <View>
          <Card1
            img={
              "https://cdn1.iconfinder.com/data/icons/rounded-set-1/512/Appointment-512.png"
            }
            text="My"
            boldText="Appointments"
          ></Card1>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.body,
    justifyContent: "space-between",
    paddingBottom: 60,
  },
  body: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: color.body,
  },
});
