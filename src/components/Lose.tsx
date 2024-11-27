import { useState, useEffect } from "react";
type LoseProps = {
  lose: boolean;
};
function Lose({ lose }: LoseProps) {
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
    setTimeout(() => {
      setSlide(false);
    }, 1500);
  }, [lose]);
  return (
    <>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur overflow-hidden">
        <div
          className={`absolute text-6xl w-max text-center ${slide ? "show" : "hide"}
             top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
        >
          <p className="pacifico">Try again!</p>
        </div>
      </div>
    </>
  );
}

export default Lose;
