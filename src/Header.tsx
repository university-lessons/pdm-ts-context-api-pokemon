import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AppContext } from "./contexts/AppContext";

export default function Header() {
  const appContext = useContext(AppContext);

  const handleBuy = () => {
    appContext.setPokebolas(appContext.pokebolas + 1);
  };

  return (
    <View style={{ width: "100%", borderBottomWidth: 1 }}>
      <Text>Header</Text>
      <Button title="Comprar PkB" onPress={handleBuy} />
    </View>
  );
}
