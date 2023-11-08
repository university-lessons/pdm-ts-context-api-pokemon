import React from "react";
import { Text, View } from "react-native";
import { usePokemonContext } from "./contexts/PokemonContext";

export default function SubComponent() {
  const { pokeballs } = usePokemonContext();

  return (
    <View>
      <Text>SubComponent (pokebolas: {pokeballs})</Text>
    </View>
  );
}
