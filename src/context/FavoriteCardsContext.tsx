import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { favoriteCardType } from "../types";

type FavoriteCardsContextType = {
  favoriteCards: favoriteCardType[];
  setFavoriteCards: Dispatch<SetStateAction<favoriteCardType[]>>;
};

export const FavoriteCardsContext = createContext<
  FavoriteCardsContextType | undefined
>(undefined);

export function FavoriteCardsProvider({ children }: { children: ReactNode }) {
  const [favoriteCards, setFavoriteCards] = useState<favoriteCardType[]>(() =>
    JSON.parse(localStorage.getItem("cmgamefavorites") || "[]"),
  );

  return (
    <FavoriteCardsContext.Provider value={{ favoriteCards, setFavoriteCards }}>
      {children}
    </FavoriteCardsContext.Provider>
  );
}
