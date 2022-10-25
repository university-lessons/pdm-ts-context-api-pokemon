import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

export default function SubComponent() {
  const appContext = useContext(AppContext);

  return (
    <View>
      <Text>SubComponent (pokebolas: {appContext.pokebolas})</Text>
    </View>
  );
}
