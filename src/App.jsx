import { useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import Instructions from "./components/Instructions";
import Header from "./components/Header";

function App() {
  const [currentRound, setCurrentRound] = useState(3);
  const [pickedCards, setPickedCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [cardsLeft, setCardsLeft] = useState([""]);
  const [lose, setLose] = useState(0);
  const [allData, setAllData] = useState([]);
  const [cardIsActive, setCardIsActive] = useState(false);
  const [win, setWin] = useState(0);
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

  const handleCardClick = (data) => {
    if (!cardIsActive) {
      setCardIsActive(true);
    } else if (!pickedCards.includes(data.id)) {
      setPickedCards((prev) => [...prev, data.id]);
      // console.log("Wybrales te karty:",pickedCards);
      setCardsLeft((prev) => prev.filter((item) => item !== data.id));
      shuffleData(allData);
      if (pickedCards.length >= highestWin) {
        setHighestWin(pickedCards.length);
        console.log("twoja najwieksza wygrana to: ", pickedCards.length);
        console.log("Bug?:", pickedCards);
      }
    } else {
      //Lose Logic
      console.log("Game over! You already picked this card!!!", pickedCards);
      setLose((prev) => prev + 1);
      setCurrentRound(3);
      setPickedCards([]);
      setCardIsActive(false);
    }
  };

  useEffect(() => {
    //Win Logic
    console.log("Cards left: ", cardsLeft);
    console.log("useEffect win Logic highest win ",highestWin);

    if(pickedCards.length>highestWin){
      setHighestWin(pickedCards.length);
      // console.log("useEffect win Logic highest win ",highestWin);
    }

    if (cardsLeft.length === 0) {
      setWin((prev) => prev + 1);
      setCurrentRound((prev) => prev + 2);
      setCardIsActive(false);
    }
  }, [cardsLeft]);
  return (
    <div className="background-color h-screen font-color">
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
      <Instructions/>
    </div>
  );
}

export default App;
