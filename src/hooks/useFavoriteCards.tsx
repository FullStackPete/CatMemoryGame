import { useContext } from "react";
import { FavoriteCardsContext } from "../context/FavoriteCardsContext";

const useFavoriteCards = () => {
  const context = useContext(FavoriteCardsContext);
  if (!context) {
    throw new Error(
      "FavoriteCardsContext must be used within FavoriteCardsProvider",
    );
  }

  return context;
};
export default useFavoriteCards;
