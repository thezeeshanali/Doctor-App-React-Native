import "react-native-gesture-handler";
import React, { useEffect } from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";
import { CustomDatePicker } from "./components/datePicker";
import Navigation from "./navigation/navigation";
import ProductCard from "./components/productCard";

import CustomizeSearchBar from "./components/searchBar";
import Products from "./screens/products";
import UploadPresc from "./components/uploadPresc";
import LabTest from "./screens/labTest";
import NoCartItems from "./screens/noCartItems";
import EditProfile from "./screens/editProfile";
import ImagePickerExample from "./components/picPicker";
import AppContext from "./context/appContext";
import CityLocation from "./screens/CityLocation";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import Login from "./screens/login";
import SignUp from "./screens/signup";
import Main from "./screens/main";
import ExpoPushNotification from "./screens/expoPushNotification";

// export async function registerForPushNotification() {
//   const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

//   if (status != "granted") {
//     const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//   }
//   if (status != "granted") {
//     alert("Failed to push notifications");
//     return;
//   }

//   const token = (await Notifications.getExpoPushTokenAsync()).data;
//   return token;
// }

export default function App() {
  // useEffect(() => {
  //   registerForPushNotification()
  //     .then((token) => console.log(token))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <AppContext>
      <Navigation />
    </AppContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
