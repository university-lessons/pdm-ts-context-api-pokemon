import React from "react";
import { Text, View } from "react-native";
import SubComponent from "./SubComponent";
import { usePokemonContext } from "./contexts/PokemonContext";

export default function Content() {
  const { pokeballs, pokemons, name } = usePokemonContext();

  return (
    <View>
      <Text>Pokemon App</Text>
      <Text>Pokebolas: {pokeballs}</Text>
      <Text>Pokemons: {pokemons}</Text>

      <Text>{name}</Text>

      <SubComponent />
    </View>
  );
}
