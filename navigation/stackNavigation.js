import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HealthRecords from "../screens/HealthRecords";
import Appointments from "../screens/appointments";
import Products from "../screens/products";
import LabTest from "../screens/labTest";
import NoCartItems from "../screens/noCartItems";
import EditProfile from "../screens/editProfile";
import CityLocation from "../screens/CityLocation";
import SignUp from "../screens/signup";
import Login from "../screens/login";
import Main from "../screens/main";

import {
  HomeTab,
  NotificationTab,
  OrderTab,
  ProfileTab,
} from "./bottomTabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="NotificationTab"
        component={NotificationTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderTab"
        component={OrderTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileTab"
        component={ProfileTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HealthRecords"
        component={HealthRecords}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Appointments"
        component={Appointments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Madicines"
        component={Products}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LabTest"
        component={LabTest}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NoCartItems"
        component={NoCartItems}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={CityLocation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
