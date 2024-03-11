import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { color } from "../colorPallete/colors";
import Icon from "@expo/vector-icons/AntDesign";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { appContext } from "../context/appContext";
import ScreenDrawerTab from "../components/screenDrawerTab";
import { NavigationActions, StackActions } from "react-navigation";

export default function CustomDrawerContent({ navigation }) {
  const { image, text } = useContext(appContext);
  //   const resetAction = StackActions.reset({
  //     index: 0,
  //     actions: [NavigationActions.navigate({ routeName: "Main" })],
  //   });

  //   this.props.navigation.dispatch(resetAction);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.body,
      }}
    >
      <DrawerContentScrollView>
        <ImageBackground
          source={require("../assets/medicalIcon.jpg")}
          style={{
            height: 100,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 60, height: 60, borderRadius: 60 }}
            />
          ) : (
            <Image
              source={require("../assets/doctorIcon.png")}
              style={{ width: 60, height: 60, borderRadius: 60 }}
            />
          )}
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontStyle: "italic",
                fontWeight: "bold",
                marginTop: 10,
                letterSpacing: 1,
              }}
            >
              {text}
            </Text>
            <Text
              style={styles.screenTab}
              onPress={() => navigation.navigate("Main")}
            >
              Sign Out
            </Text>
          </View>
        </ImageBackground>
        <ScreenDrawerTab
          icon="home"
          text="Home"
          onPress={() => navigation.navigate("HomeTab")}
        />

        <ScreenDrawerTab
          icon="filetext1"
          text="My Health Records"
          onPress={() => navigation.navigate("HealthRecords")}
        />
        <ScreenDrawerTab
          icon="calendar"
          text="Appointments"
          onPress={() => navigation.navigate("Appointments")}
        />

        <View
          style={{
            backgroundColor: color.headerColor,
            padding: 10,
            borderRadius: 5,
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <Icon name="medicinebox" size={25} color={"white"} />
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontWeight: "bold",
              marginLeft: 20,
              fontStyle: "italic",
              letterSpacing: 1,
            }}
          >
            Shop By Catogries
          </Text>
        </View>

        <ScreenDrawerTab
          icon="frowno"
          text="Fever"
          onPress={() => navigation.navigate("Madicines")}
        />
        <ScreenDrawerTab
          icon="dotchart"
          text="Diarrhia"
          onPress={() => navigation.navigate("Madicines")}
        />
        <ScreenDrawerTab
          icon="dingding-o"
          text="Loose Motion"
          onPress={() => navigation.navigate("Madicines")}
        />
        <ScreenDrawerTab
          icon="QQ"
          text="Headache"
          onPress={() => navigation.navigate("Madicines")}
        />
      </DrawerContentScrollView>
      <View>
        <Text style={styles.footerText}>Developed by Saqib Ansari</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  medicineTab: {
    color: "black",
    fontSize: 15,
    fontStyle: "italic",
    letterSpacing: 1,
  },
  screenTab: {
    color: "white",
    fontSize: 15,
    fontStyle: "italic",
    letterSpacing: 1,
  },
  footerText: {
    fontSize: 16,
    color: color.headerColor,
    letterSpacing: 2,
    marginLeft: 10,
    fontStyle: "italic",
  },
});
