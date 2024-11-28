import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { favoriteCardType } from "../types";
import { toast, Zoom } from "react-toastify";

type FavoriteCardsContextType = {
  favoriteCards: favoriteCardType[];
  setFavoriteCards: Dispatch<SetStateAction<favoriteCardType[]>>;
  manageFavorite: (favoriteCard: favoriteCardType) => void;
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
      const cardIndex = favoriteCards.findIndex(
        (item) => item.id === favoriteCard.id,
      );
      setFavoriteCards((prev) =>
        prev.filter((item) => item.id !== favoriteCard.id),
      );
      toast(
        <>
          Removed from favorite cards&nbsp;
          <button
            onClick={() => {
              setFavoriteCards((prev) => {
                const updatedFavorites = [...prev];
                updatedFavorites.splice(cardIndex, 0, favoriteCard);
                return updatedFavorites;
              });
            }}
            className="btn-light"
          >
            Undo
          </button>
        </>,
        {
          closeOnClick: true,
          position: "top-right",
          autoClose: 5000,
          draggable: true,
          theme: "dark",
          transition: Zoom,
        },
      );
    } else {
      setFavoriteCards((prev) => [...prev, favoriteCard]);
    }
  }
  return (
    <FavoriteCardsContext.Provider
      value={{ favoriteCards, setFavoriteCards, manageFavorite }}
    >
      {children}
    </FavoriteCardsContext.Provider>
  );
}
