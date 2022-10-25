import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Content from "./src/Content";
import { AppContext } from "./src/contexts/AppContext";
import Footer from "./src/Footer";
import Header from "./src/Header";

export default function App() {
  const [pokebolas, setPokebolas] = useState(0);
  const [pokemons, setPokemons] = useState(0);

  const context = {
    pokebolas,
    setPokebolas,
    pokemons,
    setPokemons,
  };

  return (
    <AppContext.Provider value={context}>
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
