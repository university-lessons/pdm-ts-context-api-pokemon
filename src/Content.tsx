import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AppContext } from "./contexts/AppContext";
import SubComponent from "./SubComponent";

export default function Content() {
  const appContext = useContext(AppContext);

  return (
    <View>
      <Text>Pokemon App</Text>
      <Text>Pokebolas: {appContext.pokebolas}</Text>
      <Text>Pokemons: {appContext.pokemons}</Text>

      <SubComponent />
    </View>
  );
}
