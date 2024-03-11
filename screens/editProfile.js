import {
  Dimensions,
  Image,
  LogBox,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { color } from "../colorPallete/colors";
import FieldText from "../components/fieldText";
import Icon from "@expo/vector-icons/AntDesign";
import CustomHeader from "../components/header";
import * as ImagePicker from "expo-image-picker";
import { clockRunning } from "react-native-reanimated";
import { appContext } from "../context/appContext";
import CustomButton from "../components/customButton";
import CustomTextInput from "../components/customTextInput";

export default function EditProfile({ navigation }) {
  const { image, setImage, text, onChangeText } = useContext(appContext);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        text="Edit Profile"
        onPress={() => navigation.toggleDrawer()}
        cartPress={() => navigation.navigate("NoCartItems")}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <View style={styles.imageContainar}>
          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 140, height: 140, borderRadius: 140 }}
              />
            ) : (
              <View>
                <Icon name="user" size={100} color={color.profileContainar} />
                <View style={styles.iconPos}>
                  <Icon name="edit" size={20} color={"white"} />
                </View>
              </View>
            )}
          </TouchableOpacity>

          <Text style={styles.text}>{text}</Text>
        </View>
        <CustomTextInput onChangeText={onChangeText} text={text} icon="man" />
        <CustomButton text="Submit" screen={() => navigation.goBack()} />
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

  fieldView: {
    margin: 15,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    borderColor: color.headerColor,
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
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    width: Dimensions.get("screen").width - 90,
  },
  imageButton: {
    backgroundColor: color.headerColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    width: 140,
    height: 140,
  },
  iconPos: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "white",
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.tabColor,
    margin: 60,
    marginLeft: 100,
  },
});
