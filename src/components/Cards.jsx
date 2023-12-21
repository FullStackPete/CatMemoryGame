import { useState, useEffect } from "react";
import axios from "axios";
import CardBackground from "../assets/card_bg.jpg"




export function Cards({ handleCardClick, setAllCards, setCardsLeft,lose, allData, setAllData, cardIsActive, setCardIsActive,win,currentRound }) {
  
  const CatApi = `https://api.thecatapi.com/v1/images/search?limit=${currentRound}&api_key=${
    import.meta.env.VITE_CatApiKey
  }`;
  useEffect(() => {    
    const fetchData = async()=>{
      try{
        const res = await axios.get(CatApi);
        setAllData(res.data);
        const cardIds = res.data.map((data)=>data.id);
        setAllCards(cardIds);
        setCardsLeft(cardIds);
      } catch (err){
        console.log("Error fetching data: ", err);
      }
    }
    fetchData();
  }, [setAllCards,lose,setCardIsActive,win]);

  
  
  
  return (
    <div className="flex flex-row card-wrap items-center justify-center mt-16">

      {allData.map((data) => (
        <img
          onClick={() => handleCardClick(data)}
          className="object-cover card m-4 rounded-xl max-h-80"
          key={data.id}
          src={cardIsActive ? data.url : CardBackground}
        ></img>
        
      ))}
    </div>
  );
}