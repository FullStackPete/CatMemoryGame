import { useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import Instructions from "./components/Instructions";
import HowToPlay from "./components/Howtoplay";
import Header from "./components/Header";
import CatImage from "./components/CatImage";

function App() {
  const [currentRound, setCurrentRound] = useState(3);
  const [pickedCards, setPickedCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [cardsLeft, setCardsLeft] = useState([""]);
  const [lose, setLose] = useState(0);
  const [allData, setAllData] = useState([]);
  const [cardIsActive, setCardIsActive] = useState(false);
  const [win, setWin] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);
  const [render, setRender] = useState(-1);
  const [highestWin, setHighestWin] = useState(
    localStorage.getItem("highestWin") || 0
  );
  const shuffleData = (array) => {
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

  const handleCardClick = (data) => {
    setCardIsActive(false);
    if (!pickedCards.includes(data.id)) {
      setPickedCards((prev) => [...prev, data.id]);
      setCardsLeft((prev) => prev.filter((item) => item !== data.id));

        setTimeout(()=>{shuffleData(allData);},100)
      setTimeout(() => {
        setRender((prev) => prev + 1);
      }, 650);
      setTimeout(() => {
        setCardIsActive(true);
      }, 1000);
      if (pickedCards.length >= highestWin) {
        setHighestWin(pickedCards.length);
      }
    } else {
      //Lose Logic
      setCardIsActive(false);
      setLose((prev) => prev + 1);
      setCurrentRound(3);
      setPickedCards([]);
    }
  };

  useEffect(() => {
    if (pickedCards.length > highestWin) {
      setHighestWin(pickedCards.length);
    }
    if (cardsLeft.length === 0) {
      setWin((prev) => prev + 1);
      setCurrentRound((prev) => prev + 2);
    }
  }, [cardsLeft, highestWin, pickedCards.length]);
  return (
    <div className="min-h-screen font-color">
      <Header winStreak={pickedCards.length} highestWin={highestWin} />
      <Cards
        handleBackCardClick={handleBackCardClick}
        setAllCards={setAllCards}
        handleCardClick={handleCardClick}
        setCardsLeft={setCardsLeft}
        lose={lose}
        allCards={allCards}
        setAllData={setAllData}
        allData={allData}
        cardIsActive={cardIsActive}
        setCardIsActive={setCardIsActive}
        win={win}
        currentRound={currentRound}
      />
      <HowToPlay handleHowToPlayClick={handleHowToPlayClick} />
      {showInstructions && (
        <Instructions handleHowToPlayClick={handleHowToPlayClick} />
      )}
      <CatImage />
    </div>
  );
}

export default App;
