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
    console.log("Current instructions state value: ", showInstructions);
  };

  const handleCardClick = (data) => {
    setCardIsActive(false);
    setTimeout(()=>{
      setCardIsActive(true);
    },500);
    if (!pickedCards.includes(data.id)) {
      setPickedCards((prev) => [...prev, data.id]);
      // console.log("Wybrales te karty:",pickedCards);
      setCardsLeft((prev) => prev.filter((item) => item !== data.id));   
      shuffleData(allData);      
      
      if (pickedCards.length >= highestWin) {
        setHighestWin(pickedCards.length);        
      }
    } else {
      //Lose Logic
      console.log("Game over! You already picked this card!!!", pickedCards);
      setLose((prev) => prev + 1);
      setCurrentRound(3);
      setPickedCards([]);
    }
  };

  useEffect(() => {
    
    console.log("Cards left: ", cardsLeft);
    if (pickedCards.length > highestWin) {
      setHighestWin(pickedCards.length);
    }

    if (cardsLeft.length === 0) {
      setWin((prev) => prev + 1);
      setCurrentRound((prev) => prev + 2);
    }
  }, [cardsLeft]);
  return (
    <div className="min-h-screen font-color">
      <Header winStreak={pickedCards.length} highestWin={highestWin} />
      <Cards
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
