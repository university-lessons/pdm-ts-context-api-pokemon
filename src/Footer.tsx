import React, { useContext } from "react";
import { Alert, Button, Text, View } from "react-native";
import { AppContext } from "./contexts/AppContext";

export default function Footer() {
  const appContext = useContext(AppContext);

  const handleThrow = () => {
    if (Math.random() > 0.5) {
      appContext.setPokemons(appContext.pokemons + 1);
    } else {
      Alert.alert("miss!!");
    }
  };

  return (
    <View>
      <Button title="Jogar Pokebola!" onPress={handleThrow} />
    </View>
  );
}
