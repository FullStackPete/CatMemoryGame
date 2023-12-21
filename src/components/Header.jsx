import React, { useEffect } from 'react';

function Header({ winStreak }) {
  useEffect(() => {
    const highestWin = localStorage.getItem('highestWin') || 0;

    if (winStreak > highestWin) {
      localStorage.setItem('highestWin', winStreak.toString());
    }
  }, [winStreak]);

  const highestWin = localStorage.getItem('highestWin') || 0;

  return (
    <div className="flex flex-col items-center ">
      <p className="text-black text-6xl m-8">Cat Memory Game</p>
      <div className="flex flex-row justify-between w-screen">
        <p className="text-black m-4 text-2xl">
          {winStreak > 0 ? (
            <>
              You guessed {winStreak} cards!
            </>
          ) : (
            <>You didn't pick any cards yet!</>
          )}
        </p>
        <p className="text-black m-4 text-2xl">
          Your all-time best is {highestWin} guessed cards!
        </p>
      </div>
    </div>
  );
}

export default Header;