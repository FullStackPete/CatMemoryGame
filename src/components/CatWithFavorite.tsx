import { Dispatch, SetStateAction, useEffect } from "react";
import Icon from "./Icon";
import { favoriteCardType } from "../types";

type CatWithFavoriteProps = {
  setFavorite: Dispatch<SetStateAction<favoriteCardType[]>>;
  favorite: favoriteCardType[];
  handleCardClick: () => void;
  url: string;
  catId: string;
};
export default function CatWithFavorite({
  handleCardClick,
  url,
  catId,
  setFavorite,
  favorite,
}: CatWithFavoriteProps) {
  useEffect(() => {
    localStorage.setItem("cmgamefavorites", JSON.stringify(favorite));
  }, [favorite]);

  function manageFavorite(favoriteCard: favoriteCardType): void {
    const favoriteExists = favorite.some((item) => item.id === favoriteCard.id);
    if (favoriteExists) {
      setFavorite((prev) => prev.filter((item) => item.id !== favoriteCard.id));
    } else {
      setFavorite((prev) => [...prev, favoriteCard]);
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
        filled={favorite.some((item) => item.id === catId && item.url === url)}
      />
    </>
  );
}
