import { useEffect } from "react";
import axios from "axios";
import CardBackground from "../assets/card_bg.jpg";
import Tilt from "react-parallax-tilt";
import ReactCardFlip from "react-card-flip";

export function Cards({
  handleBackCardClick,
  handleCardClick,
  setAllCards,
  setCardsLeft,
  lose,
  allData,
  setAllData,
  cardIsActive,
  win,
  currentRound,
}) {
  const chunkSize = 3; // Możesz dostosować wielkość grupy według potrzeb
  const CatApi = `https://api.thecatapi.com/v1/images/search?limit=${currentRound}&api_key=${
    import.meta.env.VITE_CatApiKey
  }`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(CatApi);
        setAllData(res.data);
        const cardIds = res.data.map((data) => data.id);
        setAllCards(cardIds);
        setCardsLeft(cardIds);
      } catch (err) {
        console.log("Error fetching data: ", err);
      }
    };

    fetchData();
  }, [lose, win, CatApi, setAllCards, setAllData, setCardsLeft]);

  const chunkedData = Array.from(
    { length: Math.ceil(allData.length / chunkSize) },
    (_, index) => allData.slice(index * chunkSize, (index + 1) * chunkSize)
  );

  return (
    <div className="flex flex-col justify-center mt-8 md:mt-0 items-center md:h-full">
      {chunkedData.map((chunk, index) => (
        <div
          className="flex justify-center items-center flex-row mx-2"
          key={`chunk-${index}`}
        >
          {chunk.map((data) => (
            <Tilt
              tiltMaxAngleX="15"
              tiltMaxAngleY="15"
              key={data.id} // Unique key for each Tilt component
              className="!p-0 my-2 mx-2 md:my-4 md:mx-4 background-color !rounded-md aspect-[3/4] max-h-60 min-h-60 lg:max-h-80 lg:min-h-80"
            >
              <ReactCardFlip
                flipDirection="horizontal"
                isFlipped={cardIsActive}
              >
                <img
                  onClick={() => handleBackCardClick()}
                  className="aspect-[3/4] max-h-36 min-h-36 md:min-h-60 md:max-h-60 lg:max-h-80 lg:min-h-80 rounded-md card-shadow hover:cursor-pointer"
                  src={CardBackground}
                />
                <img
                  onClick={() => handleCardClick(data)}
                  className="object-cover aspect-[3/4] max-h-36 min-h-36 md:min-h-60 md:max-h-60 lg:max-h-80 lg:min-h-80 rounded-md card-shadow hover:cursor-pointer"
                  src={data.url}
                />
              </ReactCardFlip>
            </Tilt>
          ))}
        </div>
      ))}
    </div>
  );
}
