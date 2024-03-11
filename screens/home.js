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

export default function Home({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  const boxData = [
    {
      id: 1,
      destination: "Home",
      service: "Hospital Services",
      image:
        "https://i.pinimg.com/originals/de/4b/b8/de4bb861add81eb23c19d2391789a5c7.png",
      targetScreen: "Location",
      targetScreen1: "",
    },
    {
      id: 2,
      destination: "Doctor",
      service: "On Call",
      image:
        "https://www.nicepng.com/png/detail/212-2125191_web-design-png-transparent-website-development-images-png.png",
      targetScreen: "",
      targetScreen1: "",
    },
    {
      id: 3,
      destination: "Online",
      service: "Lab Test",
      image:
        "https://www.nicepng.com/png/detail/212-2125191_web-design-png-transparent-website-development-images-png.png",
      targetScreen: "Location",
      targetScreen1: "LabTest",
    },
    {
      id: 4,
      destination: "Online",
      service: "Pharmacy",
      image:
        "https://www.nicepng.com/png/detail/212-2125191_web-design-png-transparent-website-development-images-png.png",
      targetScreen: "Location",
      targetScreen1: "",
    },
  ];
  const service = [
    {
      id: 1,
      destination: "Upload",
      services: "Prescription",
      image:
        "https://www.nicepng.com/png/detail/212-2125191_web-design-png-transparent-website-development-images-png.png",
      targetScreen: "",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        text="Home"
        onPress={() => navigation.toggleDrawer()}
        cartPress={() => navigation.navigate("NoCartItems")}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <Banner></Banner>
        <View style={styles.body}>
          <FlatList
            data={boxData}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Card
                  img={item.image}
                  text={item.destination}
                  boldText={item.service}
                  onPress={() =>
                    navigation.navigate(item.targetScreen, {
                      screenName: item.targetScreen1,
                    })
                  }
                ></Card>
              );
            }}
          />
        </View>
        <View>
          <FlatList
            data={service}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => {
              return (
                <Card1
                  img={item.image}
                  text={item.destination}
                  boldText={item.services}
                ></Card1>
              );
            }}
          />
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
