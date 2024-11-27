import { ReactNode } from "react";

type TextDecorationProps = {
  children: ReactNode;
  customClassName?: string;
};
function TextDecoration({ children, customClassName }: TextDecorationProps) {
  return (
    <div
      className={`border-text-color border-0 md:border-4 lg:border-8 md:bg-[#242038] rounded-3xl mt-4 ${customClassName}`}
    >
      {children}
    </div>
  );
}
type HeaderProps = {
  winStreak: number;
  highestWin: number;
};
function Header({ winStreak, highestWin }: HeaderProps) {
  localStorage.setItem("highestWin", highestWin.toString());
  let highestLocalStorageWinDisplay = localStorage.getItem("highestWin");
  return (
    <div className="border-[#242038] border-b-8 rounded-b-3xl text-background md:border-none">
      <div className="flex flex-col  items-center font-color md:bg-[#A891D4]">
        <TextDecoration>
          <p className="text-center text-3xl md:text-4xl md:m-8 pacifico">
            Cat Memory Game
          </p>
        </TextDecoration>

        <div className="flex flex-row justify-between w-full jost">
          <TextDecoration customClassName="border-l-0 md:border-l-0 lg:border-l-0 rounded-l-none">
            <p className="mt-2 mx-4 md:m-4 text-xl ">
              {winStreak > 0 ? (
                <>You guessed {winStreak} cards!</>
              ) : (
                <>Pick a card!</>
              )}
            </p>
          </TextDecoration>
          <TextDecoration customClassName="border-r-0 md:border-r-0 lg:border-r-0 rounded-r-none">
            <p className="mt-2 mx-4 md:m-4 text-xl text-right">
              {highestWin > 0 ? (
                <>Your best is {highestLocalStorageWinDisplay}!</>
              ) : (
                <>Start playing to set your best score!</>
              )}
            </p>
          </TextDecoration>
        </div>
      </div>
    </div>
  );
}

export default Header;
