import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Icon from "./Icon";
import useFavoriteCards from "../hooks/useFavoriteCards";

type CatWithFavoriteProps = {
  handleCardClick?: () => void;
  url: string;
  catId: string;
  favoriteChosen: boolean;
  setFavoriteChosen?: Dispatch<SetStateAction<boolean>>;
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
            setFavoriteChosen && setFavoriteChosen(true);
          }}
          iconName={"Favorite"}
          color={"white"}
          className="lg:top-4 lg:left-4 top-1 left-1 lg:text-4xl text-3xl absolute cursor-pointer"
          filled={favoriteCards.some(
            (item) => item.id === catId && item.url === url,
          )}
        />
      )}
      {/* <ShareAll.FacebookMessengerShareButton */}
      {/*   url={url} */}
      {/*   appId="8550896691703452" */}
      {/*   className="" */}
      {/* > */}
      {/*   <ShareAll.FacebookMessengerIcon */}
      {/*     round */}
      {/*     className="lg:text-xl md:text-lg text-sm" */}
      {/*   /> */}
      {/* </ShareAll.FacebookMessengerShareButton> */}
    </>
  );
}
