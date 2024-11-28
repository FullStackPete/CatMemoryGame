import { Dispatch, SetStateAction, useEffect } from "react";
import Icon from "./Icon";
import useFavoriteCards from "../hooks/useFavoriteCards";

type CatWithFavoriteProps = {
  handleCardClick: () => void;
  url: string;
  catId: string;
  favoriteChosen: boolean;
  setFavoriteChosen: Dispatch<SetStateAction<boolean>>;
  favoritePage?: boolean;
};
export default function CatWithFavorite({
  handleCardClick,
  url,
  catId,
  favoriteChosen,
  setFavoriteChosen,
}: CatWithFavoriteProps) {
  const { favoriteCards, manageFavorite } = useFavoriteCards();

  useEffect(() => {
    localStorage.setItem("cmgamefavorites", JSON.stringify(favoriteCards));
  }, [favoriteCards]);

  return (
    <>
      <img
        loading="lazy"
        onClick={handleCardClick}
        className="object-cover aspect-[3/4] max-h-36 min-h-36 md:min-h-60 md:max-h-60 lg:max-h-80 lg:min-h-80 rounded-md card-shadow hover:cursor-pointer relative"
        src={url}
      />
      {favoriteChosen === false && (
        <Icon
          onClick={() => {
            manageFavorite({ id: catId, url: url });
            setFavoriteChosen(true);
          }}
          iconName={"Favorite"}
          color={"white"}
          className="lg:top-4 cursor-pointer lg:left-4 absolute lg:text-4xl md:text-3xl text-xl top-1 left-1"
          filled={favoriteCards.some(
            (item) => item.id === catId && item.url === url,
          )}
        />
      )}
    </>
  );
}
