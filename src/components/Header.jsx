import React, { useEffect } from "react";

function TextDecoration({ children, customClassName }) {
  return (
    <div
      className={`border-text-color border-8 text-background rounded-3xl mt-2 ${customClassName}`}
    >
      {children}
    </div>
  );
}

function Header({ winStreak, highestWin }) {
  localStorage.setItem("highestWin", highestWin);
  let highestLocalStorageWinDisplay = localStorage.getItem("highestWin");
  return (
    <div className="flex flex-col items-center font-color">
      <TextDecoration>
        <p className=" text-6xl m-8 pacifico">Cat Memory Game</p>
      </TextDecoration>

      <div className="flex flex-row justify-between w-screen jost">
        <TextDecoration customClassName="border-l-0 rounded-l-none">
          <p className=" m-4 text-3xl ">
            {winStreak > 0 ? (
              <>You guessed {winStreak} cards!</>
            ) : (
              <>You didn't pick any cards yet!</>
            )}
          </p>
        </TextDecoration>
        <TextDecoration customClassName="border-r-0 rounded-r-none">
          <p className=" m-4 text-3xl">
            {highestWin > 0 ? (
              <>Your best is {highestLocalStorageWinDisplay} guessed cards!</>
            ) : (
              <>Start playing to set your best score!</>
            )}
          </p>
        </TextDecoration>
      </div>
    </div>
  );
}

export default Header;
