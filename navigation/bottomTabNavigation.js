import React from "react";
import Home from "../screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notifications from "../screens/notifications";
import MyOrders from "../screens/MyOders";
import Profile from "../screens/profile";

import { color } from "../colorPallete/colors";
import Icon1 from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "ios-notifications-outline";
          } else if (route.name === "Orders") {
            iconName = focused ? "list-circle" : "list-circle-outline";
          } else {
            iconName = focused ? "person" : "person-outline";
          }

          // You can return any component that you like here!
          return <Icon1 name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: color.tabColor,
        tabBarInactiveTintColor: "gray",
        tabBarLabel: navigation.isFocused() ? route.name : "",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Orders" component={MyOrders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export const NotificationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={MyOrders} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export const OrderTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Orders" component={MyOrders} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export const ProfileTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="Orders" component={MyOrders} />
    </Tab.Navigator>
  );
};
