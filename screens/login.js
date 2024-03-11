import {
  Image,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { color } from "../colorPallete/colors";
import FieldText from "../components/fieldText";
import Icon from "@expo/vector-icons/AntDesign";
import CustomHeader from "../components/header";
import { appContext } from "../context/appContext";
import CustomButton from "../components/customButton";
import BackHeader from "../components/header1";
import CustomTextInput from "../components/customTextInput";
import { Checkbox } from "react-native-paper";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Login({ navigation }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const { image, text } = useContext(appContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BackHeader text="Login" backIcon={() => navigation.goBack()} />
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
        <Text>Phone No.</Text>
        <CustomTextInput icon="phone" />
        <Text>Password</Text>
        <CustomTextInput icon="lock" security={true} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text>Sign in as a Doctor</Text>
        </View>

        <CustomButton
          text="Sign In"
          screen={async () => {
            await sendPushNotification(expoPushToken);
            navigation.navigate("HomeTab");
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
            marginTop: 20,
          }}
        >
          <Text>Forget Password!</Text>
          <Text onPress={() => navigation.navigate("SignUp")}>Sign up</Text>
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
    height: "100%",
  },
});

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Hye! Thankyou For Login",
    body: "Welcome to The Doctor App Home Screen",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "Doctor App",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      sound: "default",
      lockscreenVisibility: true,
    });
  }

  return token;
}
