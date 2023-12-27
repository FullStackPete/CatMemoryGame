import Icon from "./Icon";

function HowToPlay({ handleHowToPlayClick }) {
  return (
    <>
      <div className="flex flex-wrap justify-center align-bottom my-10 text-2xl">
        <div
          onClick={handleHowToPlayClick}
          className="content-wrapper cursor-pointer flex justify-center items-center"
        >
          <p className="font-color-dark mr-2 pacifico">How to play?</p>
          <Icon fontSize="30" iconName="help" color="#242038" />
        </div>
      </div>
    </>
  );
}

export default HowToPlay;
