import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootJokeStack from "./RootStack";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootJokeStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
