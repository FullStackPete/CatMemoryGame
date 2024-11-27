import { Dispatch, SetStateAction, useEffect } from "react";
import Icon from "./Icon";
import { favoriteCardType } from "../types";
import useFavoriteCards from "../hooks/useFavoriteCards";

type CatWithFavoriteProps = {
  handleCardClick: () => void;
  url: string;
  catId: string;
};
export default function CatWithFavorite({
  handleCardClick,
  url,
  catId,
}: CatWithFavoriteProps) {
  const {favoriteCards,setFavoriteCards} = useFavoriteCards();

  useEffect(() => {
    localStorage.setItem("cmgamefavorites", JSON.stringify(favoriteCards));
  }, [favoriteCards]);

  function manageFavorite(favoriteCard: favoriteCardType): void {
    const favoriteExists = favoriteCards.some((item) => item.id === favoriteCard.id);
    if (favoriteExists) {
      setFavoriteCards((prev) => prev.filter((item) => item.id !== favoriteCard.id));
    } else {
      setFavoriteCards((prev) => [...prev, favoriteCard]);
    }
  }
  return (
    <>
      <img
        loading="lazy"
        onClick={handleCardClick}
        className="object-cover aspect-[3/4] max-h-36 min-h-36 md:min-h-60 md:max-h-60 lg:max-h-80 lg:min-h-80 rounded-md card-shadow hover:cursor-pointer relative"
        src={url}
      />
      <Icon
        onClick={() => manageFavorite({ id: catId, url: url })}
        iconName={"Favorite"}
        color={"white"}
        className="lg:top-4 cursor-pointer lg:right-4 absolute lg:text-4xl md:text-3xl text-xl top-1 right-1"
        filled={favoriteCards.some((item) => item.id === catId && item.url === url)}
      />
    </>
  );
}
