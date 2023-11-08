import React from "react";
import { Button, Text, View } from "react-native";
import { usePokemonContext } from "./contexts/PokemonContext";

export default function Header() {
  const { buyPokeballs } = usePokemonContext();

  const handleBuy = () => {
    const amount = Math.ceil(Math.random() * 3);
    buyPokeballs(amount);
  };

  return (
    <View style={{ width: "100%", borderBottomWidth: 1 }}>
      <Text>Header</Text>
      <Button title="Comprar Pokebola" onPress={handleBuy} />
    </View>
  );
}
