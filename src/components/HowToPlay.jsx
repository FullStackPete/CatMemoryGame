import Icon from "./Icon";

function HowToPlay({handleHowToPlayClick}) {

    return (<>
    <div className="how-to-play mt-8 flex items-center justify-center text-2xl">
        <div onClick={handleHowToPlayClick} className="content-wrapper cursor-pointer flex">
        <p className="font-color-dark mr-2 pacifico">How to play?</p>
        <Icon fontSize="30"iconName="help" color="#242038"/>
        </div>
    </div></>  );
}

export default HowToPlay;