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
  manageFavorite: (favoriteCard: favoriteCardType)=>void;
};

export const FavoriteCardsContext = createContext<
  FavoriteCardsContextType | undefined
>(undefined);

export function FavoriteCardsProvider({ children }: { children: ReactNode }) {
  const [favoriteCards, setFavoriteCards] = useState<favoriteCardType[]>(() =>
    JSON.parse(localStorage.getItem("cmgamefavorites") || "[]"),
  );

  function manageFavorite(favoriteCard: favoriteCardType): void {
  const favoriteExists = favoriteCards.some(
    (item) => item.id === favoriteCard.id,
  );
  if (favoriteExists) {
    setFavoriteCards((prev) =>
      prev.filter((item) => item.id !== favoriteCard.id),
    );
  } else {
    setFavoriteCards((prev) => [...prev, favoriteCard]);
  }
}
  return (
    <FavoriteCardsContext.Provider value={{ favoriteCards, setFavoriteCards,manageFavorite }}>
      {children}
    </FavoriteCardsContext.Provider>
  );
}
