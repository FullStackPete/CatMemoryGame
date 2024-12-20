import { SetStateAction } from "react";
import Tilt from "react-parallax-tilt";
import CatWithFavorite from "../components/CatWithFavorite";
import useFavoriteCards from "../hooks/useFavoriteCards";
import { useNavigate } from "react-router";

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { favoriteCards } = useFavoriteCards();

  return (
    <>
      <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-16 gap-x-2 md:mx-[10%] mx-4 ">
        {favoriteCards.map((card) => (
          <div className="relative">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              key={card.id}
              className="!p-0 my-2 mx-2 md:my-4 md:mx-4 background-color !rounded-md aspect-[3/4] min-h-36 max-h-36 md:max-h-60 md:min-h-60 lg:max-h-80 lg:min-h-80"
            >
              <CatWithFavorite
                handleCardClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                url={card.url}
                catId={card.id}
                favoriteChosen={false}
                setFavoriteChosen={function (
                  value: SetStateAction<boolean>,
                ): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </Tilt>
          </div>
        ))}
      </div>

      {favoriteCards.length === 0 && (
        <>
          <p className="text-xl text-center m-4">
            You don't have any favorite cards yet! <br />
            Go play some games and add favorites as You go!
          </p>
          <p
            className="text-xl text-center m-4 font-semibold underline md:no-underline md:hover:underline underline-offset-4 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            Click here to play!
          </p>
        </>
      )}
    </>
  );
}
