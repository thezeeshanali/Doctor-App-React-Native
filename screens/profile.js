import {
  Image,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { color } from "../colorPallete/colors";
import FieldText from "../components/fieldText";
import Icon from "@expo/vector-icons/AntDesign";
import CustomHeader from "../components/header";
import { appContext } from "../context/appContext";
import CustomButton from "../components/customButton";

export default function Profile({ navigation }) {
  const { image, text } = useContext(appContext);
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        text="Profile"
        onPress={() => navigation.toggleDrawer()}
        cartPress={() => navigation.navigate("NoCartItems")}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <View style={styles.imageContainar}>
          <View style={styles.profileImage}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 140, height: 140, borderRadius: 140 }}
              />
            ) : (
              <Icon name="user" size={100} color={color.profileContainar} />
            )}
          </View>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.fieldView}>
          <FieldText text={"Full Name"} name={text} iconName="home" />
          <FieldText
            text={"Email Address"}
            name="saqib.ns111@gmail.com"
            iconName="mail"
          />
          <FieldText text={"Mobile No"} name="+923218875200" iconName="phone" />
          <FieldText text={"Gender"} name="Male" iconName="man" />
        </View>
        <CustomButton
          text="Edit Profile"
          screen={() => navigation.navigate("EditProfile")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingBottom: 10,
  },
  text: {
    color: color.headerColor,
    fontSize: 30,
    fontWeight: "bold",
  },
  imageContainar: {
    width: "100%",
    backgroundColor: color.profileContainar,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  profileImage: {
    width: "40%",
    height: "70%",
    backgroundColor: color.headerColor,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  fieldView: {
    marginTop: 15,
  },
  editButton: {
    alignSelf: "center",
    width: "45%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: color.headerColor,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
