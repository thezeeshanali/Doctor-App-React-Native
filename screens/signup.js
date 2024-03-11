import {
  Image,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { color } from "../colorPallete/colors";
import FieldText from "../components/fieldText";
import Icon from "@expo/vector-icons/AntDesign";
import CustomHeader from "../components/header";
import { appContext } from "../context/appContext";
import CustomButton from "../components/customButton";
import BackHeader from "../components/header1";
import CustomTextInput from "../components/customTextInput";
import { Checkbox } from "react-native-paper";

export default function SignUp({ navigation }) {
  const { image, text } = useContext(appContext);
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [checkMail, setCheckMail] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);

  const onSelectMale = () => {
    setMaleChecked(true);
    setFemaleChecked(false);
  };
  const onSelectFemale = () => {
    setMaleChecked(false);
    setFemaleChecked(true);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    // <= Added this function
    const strongRegex = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );

    if (!strongRegex.test(email)) {
      setCheckMail(false);
      return false;
    } else if (password.length < 8) {
      setCheckPassword(false);
      setCheckMail(true);
      return false;
    } else {
      navigation.goBack();
      let response = fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          to: "",
          sound: "default",
          title: "Saqib king",
          body: "hero hum hen tum nhi",
        },
      });
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BackHeader text="Sign Up" />
      <ScrollView
        contentContainerStyle={styles.container}
        nestedScrollEnabled={true}
      >
        <Image
          style={{
            width: 140,
            height: 140,
            alignSelf: "center",
            marginTop: 10,
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
          }}
        />
        <Text style={styles.text}>Full Name</Text>
        <CustomTextInput icon="user" />
        <Text style={styles.text}>Email Address</Text>
        <CustomTextInput
          icon="mail"
          onChangeText={(email) => setEmail(email)}
        />
        {!checkMail ? (
          <Text style={styles.text1}>Email Address invalid found</Text>
        ) : (
          <Text></Text>
        )}
        <Text style={styles.text}>Phone No</Text>
        <CustomTextInput icon="phone" />
        <Text style={styles.text}>What's your gender?</Text>
        <View style={styles.genderView}>
          <TouchableOpacity
            style={maleChecked ? styles.gender1 : styles.gender}
            onPress={onSelectMale}
          >
            <Text style={styles.text}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={femaleChecked ? styles.gender1 : styles.gender}
            onPress={onSelectFemale}
          >
            <Text style={styles.text}>Female</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Password</Text>
        <CustomTextInput
          icon="lock"
          security={true}
          onChangeText={(password) => setPassword(password)}
        />
        {!checkPassword ? (
          <Text style={styles.text1}>Password length less than 8</Text>
        ) : (
          <Text></Text>
        )}

        <CustomButton text="Sign Up" screen={signIn} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            margin: 10,
            marginTop: 20,
          }}
        >
          <Text onPress={() => navigation.navigate("Login")}>
            If you're already a user then Sign In
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingBottom: 10,
    padding: 20,
    backgroundColor: color.body,
  },
  gender: {
    width: "40%",
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
  },
  gender1: {
    width: "40%",
    borderWidth: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
    backgroundColor: "grey",
  },
  genderView: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontStyle: "italic",
  },
  text1: {
    fontSize: 18,
    fontStyle: "italic",
    color: color.tabColor,
  },
});
