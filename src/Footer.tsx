import React from "react";
import { Alert, Button, View } from "react-native";
import { usePokemonContext } from "./contexts/PokemonContext";

export default function Footer() {
  const { catchPokemon, pokeballs } = usePokemonContext();

  const handleThrow = () => {
    if (pokeballs == 0) {
      Alert.alert("compre mais pokebolas!");
      return;
    }

    if (!catchPokemon()) {
      Alert.alert("miss!!");
    }
  };

  return (
    <View>
      <Button title="Jogar Pokebola!" onPress={handleThrow} />
    </View>
  );
}
