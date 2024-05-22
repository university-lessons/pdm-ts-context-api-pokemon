import { createContext, PropsWithChildren, useContext, useState } from "react";

//------------------------------------------- Step 1: Define the Context

interface PokemonContextProps {
  pokeballs: number;
  buyPokeballs: (amount: number) => void;
  pokemons: number;
  catchPokemon: () => boolean;
  name: string;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(
  undefined
);

//------------------------------------------- Step 2: Define the Provider

export default function PokemonContextProvider({
  children,
}: PropsWithChildren) {
  const [pokeballs, setPokeballs] = useState(0);
  const [pokemons, setPokemons] = useState(0);

  const catchPokemon = () => {
    setPokeballs((val) => val - 1);

    if (Math.random() > 0.5) {
      setPokemons((val) => val + 1);
      return true;
    }
    return false;
  };

  const buyPokeballs = (amount: number) => {
    setPokeballs((val) => val + amount);
  };

  const name = "Ash";

  const value: PokemonContextProps = {
    pokeballs,
    pokemons,
    catchPokemon,
    buyPokeballs,
    name,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}

//------------------------------------------- Step 3: Define the Hook

export function usePokemonContext() {
  const context = useContext(PokemonContext);

  if (!context) {
    throw new Error(
      "usePokemonContext must be used inside PokemonContextProvider!"
    );
  }

  return context;
}
