import Icon from "./Icon";

type InstructionsProps = {
  handleHowToPlayClick: () => void;
};

function Instructions({ handleHowToPlayClick }: InstructionsProps) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur w-screen h-[100vh] overflow-hidden">
      <div
        className="absolute w-96 text-black top-1/4 left-1/2 transform -translate-x-1/2 
      translate-y-1/2 rounded-lg text-lg text-background 
      font-color bg-white border-4 text-center jost py-2 px-8 md:px-4 lg:px-2"
      >
        <div className="flex flex-row">
          <ul>
            <li>First click on a card to flip it!</li>
            <li>Then click on a cat!</li>
            <li>Wait for cats to randomize...</li>
            <br />
            <li>And finally click on a cat that you didn&apos;t select yet!</li>
          </ul>
          <span className="absolute cursor-pointer right-2">
            <Icon
              color="white"
              onClick={handleHowToPlayClick}
              iconName="Close"
              fontSize={24}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
