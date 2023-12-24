import CatPng from "../../public/favicon.png";

function CatImage() {
    return ( <div className="absolute -bottom-2 left-20">
        <img className="w-40" src={CatPng} alt="Meow!!!" />
    </div> );
}

export default CatImage;