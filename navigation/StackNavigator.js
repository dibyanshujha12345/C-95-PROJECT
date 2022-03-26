import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import SpaceScreen from "../screens/SpaceScreen";
import AnimalScreen  from "../screens/AnimalScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="SpaceScreen" component={SpaceScreen} />
      <Stack.Screen name="AnimalScreen" component={AnimalScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
