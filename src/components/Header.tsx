import { useNavigate } from "react-router-dom";
import TextDecoration from "./TextDecoration";

type HeaderProps = {
  winStreak: number;
  highestWin: number;
};
function Header({ winStreak, highestWin }: HeaderProps) {
  const navigate = useNavigate();
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
        <div
          onClick={() => navigate("/favorites")}
          className="pacifico text-2xl underline justify-center md:text-[#242038] cursor-pointer mt-4"
        >
          Favorites
        </div>
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
