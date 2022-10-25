import { createContext } from "react";

export interface AppContextProps {
  pokebolas: number;
  setPokebolas: Function;
  pokemons: number;
  setPokemons: Function;
}

export const AppContext = createContext<AppContextProps>({
  pokebolas: 0,
  setPokebolas: () => {},
  pokemons: 0,
  setPokemons: () => {},
});
