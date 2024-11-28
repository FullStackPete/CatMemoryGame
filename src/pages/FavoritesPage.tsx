import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CatWithFavorite from "../components/CatWithFavorite";
import useFavoriteCards from "../hooks/useFavoriteCards";
import { useNavigate } from "react-router";
import Icon from "../components/Icon";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer, Zoom } from "react-toastify";
export default function FavoritesPage() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { favoriteCards } = useFavoriteCards();
  const copyLinkToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!"); // Możesz zamienić alert na bardziej subtelny feedback
    } catch (error) {
      console.error("Failed to copy the link", error);
      toast.error("Failed to copy the link. Please try again.");
    }
  };

  const toggleOptions = (cardId: string) => {
    setOpenCardId((prev) => (prev === cardId ? null : cardId));
  };

  const handleDownload = (url: string) => {
    const fileName = url.split("/")[4];
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName || "downloaded-file";
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the file:", error);
      });
  };

  return (
    <>
      <ToastContainer transition={Zoom} autoClose={3000} theme="dark" />
      <div className="grid grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-x-16 gap-x-2 md:mx-[10%] mx-4 ">
        {favoriteCards.map((card) => (
          <div className="relative" key={card.id}>
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              key={card.id}
              className="!p-0 my-2 mx-2 md:my-4 md:mx-4 background-color !rounded-md aspect-[3/4] min-h-36 max-h-36 md:max-h-60 md:min-h-60 lg:max-h-80 lg:min-h-80"
            >
              <CatWithFavorite
                url={card.url}
                catId={card.id}
                favoriteChosen={false}
              />
            </Tilt>
            <div className="absolute cursor-pointer bottom-4 lg:left-7 md:left-5 left-3">
              <Icon
                className="lg:text-4xl text-3xl"
                iconName={"more_vert"}
                color={"white"}
                onClick={() => toggleOptions(card.id)}
              />
            </div>

            {openCardId === card.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.3 }}
                className="menu bg-white rounded-lg shadow-lg absolute z-10 border border-gray-200 w-40 overflow-hidden"
              >
                <div className="menu-item flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
                  <Icon
                    iconName="share"
                    className="icon w-5 h-5 text-blue-500"
                    color={"black"}
                  />
                  Share
                </div>
                <div
                  onClick={() => {
                    copyLinkToClipboard(card.url);
                  }}
                  className="menu-item flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Icon
                    className="icon w-5 h-5 text-green-500"
                    iconName={"link"}
                    color={"black"}
                  />
                  Copy link
                </div>
                <div
                  className="menu-item flex items-center gap-2 p-2 text-gray-400 cursor-not-allowed"
                  onClick={() => handleDownload(card.url)}
                >
                  <Icon
                    className="icon w-5 h-5 text-red-300"
                    iconName={"download"}
                  />
                  <s>Download</s>
                </div>
              </motion.div>
            )}
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
