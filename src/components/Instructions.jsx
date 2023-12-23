import Icon from "./Icon";

function Instructions({ handleHowToPlayClick }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur">
      <div className="absolute text-black top-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-lg text-lg text-background font-color px-2 bg-white border-4 text-center jost">
        <div className="flex flex-row">
          <ul>
            <li>First click on a card to flip it!</li>
            <li>Then click on a cat!</li>
            <li>Wait for cats to randomize...</li>
            <li>And finally click on a cat that you didn&apos;t select yet!</li>
          </ul>
          <span className="absolute cursor-pointer right-2">
            <Icon color="white" onClick={handleHowToPlayClick} iconName="Close" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
