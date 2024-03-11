import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { color } from "../colorPallete/colors";

import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigation from "./stackNavigation";
import CustomDrawerContent from "./drawerNavigation";

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: color.body,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigation}
          options={{
            headerShown: false,
            drawerActiveTintColor: color.headerColor,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
