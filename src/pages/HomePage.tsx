import { useState, useEffect } from "react";
import { Cards } from "../components/Cards";
import Instructions from "../components/Instructions";
import HowToPlay from "../components/HowToPlay";
import Lose from "../components/Lose";
import { CardType } from "../types";
import useWin from "../hooks/useWin";

function HomePage() {
  const { setWin, highestWin, setHighestWin, setWinStreak } = useWin();
  const [currentRound, setCurrentRound] = useState<number>(3);
  const [pickedCards, setPickedCards] = useState<string[]>([]);
  const [cardsLeft, setCardsLeft] = useState<string[]>([""]);
  const [lose, setLose] = useState<boolean>(false);
  const [allData, setAllData] = useState<CardType[]>([]);
  const [cardIsActive, setCardIsActive] = useState<boolean>(false);
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [_, setRender] = useState<number>(-1);
  const shuffleData = (array: CardType[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleHowToPlayClick = () => {
    setShowInstructions(!showInstructions);
  };
  const handleBackCardClick = () => {
    setCardIsActive(!cardIsActive);
  };

  const handleCardClick = (data: CardType) => {
    setCardIsActive(false);
    if (!pickedCards.includes(data.id)) {
      setPickedCards((prev) => [...prev, data.id]);
      setCardsLeft((prev) => prev.filter((item) => item !== data.id));

      setTimeout(() => {
        shuffleData(allData);
      }, 100);
      setTimeout(() => {
        setRender((prev) => prev + 1);
      }, 450);
      setTimeout(() => {
        setCardIsActive(true);
      }, 1000);
      if (pickedCards.length >= highestWin) {
        setHighestWin(pickedCards.length);
      }
    } else {
      setLose(true);
      setTimeout(() => {
        setLose(false);
        setCardIsActive(false);
      }, 2000);

      setCurrentRound(3);
      setPickedCards([]);
    }
  };
  useEffect(() => {
    setWinStreak(pickedCards.length);
  }, [pickedCards.length]);

  useEffect(() => {
    if (pickedCards.length > highestWin) {
      setHighestWin(pickedCards.length);
      localStorage.setItem("highestWin", pickedCards.length.toString());
    }
    if (cardsLeft.length === 0) {
      setWin((prev) => prev + 1);
      setCurrentRound((prev) => prev + 2);
    }
  }, [cardsLeft, highestWin, pickedCards.length]);
  return (
    <div className="flex flex-col font-color h-full">
      <div className="flex-grow">
        <Cards
          handleBackCardClick={handleBackCardClick}
          handleCardClick={handleCardClick}
          setCardsLeft={setCardsLeft}
          cardsLeft={cardsLeft}
          lose={lose}
          setAllData={setAllData}
          allData={allData}
          cardIsActive={cardIsActive}
          currentRound={currentRound}
        />
        {showInstructions && (
          <Instructions handleHowToPlayClick={handleHowToPlayClick} />
        )}
        {lose && <Lose lose={lose} />}
      </div>
      <HowToPlay handleHowToPlayClick={handleHowToPlayClick} />
    </div>
  );
}

export default HomePage;
