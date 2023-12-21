import { useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import Header from "./components/Header";
import PlayBtn from "./components/PlayBtn";

function App() {
  const [currentRound,setCurrentRound] = useState(3);
  const [pickedCards, setPickedCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [cardsLeft, setCardsLeft] = useState([""]);
  const [lose, setLose] = useState(0);
  const [allData, setAllData] = useState([]);
  const [cardIsActive, setCardIsActive] = useState(false);
  const [win,setWin] = useState(0)

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
      setCardsLeft((prev) => prev.filter((item) => item !== data.id)); 
      console.log("Pozostało tyle kart:",cardsLeft.length);     
      shuffleData(allData);
      
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
    if(cardsLeft.length===0){
      setWin((prev)=>prev+1);
      setCurrentRound((prev)=>prev+2);
      setCardIsActive(false);
      }
  }, [cardsLeft]);
  return (
    <div className="bg-orange-200 h-screen">
      <Header winStreak={pickedCards.length} />
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
      <PlayBtn />
    </div>
  );
}

export default App;
