import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type WinContextType = {
  winStreak: number;
  setWinStreak: Dispatch<SetStateAction<number>>;
  highestWin: number;
  setHighestWin: Dispatch<SetStateAction<number>>;
  win: number;
  setWin: Dispatch<SetStateAction<number>>;
};
export const WinContext = createContext<WinContextType | undefined>(undefined);

type WinProvider = {
  children: ReactNode;
};

export function WinProvider({ children }: WinProvider) {
  const [winStreak, setWinStreak] = useState<number>(0);
  const [win, setWin] = useState<number>(0);
  const [highestWin, setHighestWin] = useState<number>(
    Number(localStorage.getItem("highestWin")) || 0,
  );
  return (
    <WinContext.Provider
      value={{
        winStreak,
        setWinStreak,
        highestWin,
        setHighestWin,
        win,
        setWin,
      }}
    >
      {children}
    </WinContext.Provider>
  );
}
