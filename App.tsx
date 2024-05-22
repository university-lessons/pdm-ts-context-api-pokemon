import { StyleSheet, View } from "react-native";
import Content from "./src/Content";
import Footer from "./src/Footer";
import Header from "./src/Header";
import PokemonContextProvider, {
  usePokemonContext,
} from "./src/contexts/PokemonContext";

export default function App() {
  return (
    <PokemonContextProvider>
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    </PokemonContextProvider>
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
