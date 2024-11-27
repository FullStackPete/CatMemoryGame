import CatPng from "../../public/favicon.png";

function CatImage() {
    return ( <div className="fixed -bottom-1 left-4">
        <img className="w-20 md:w-32 lg:w-40" src={CatPng} alt="Meow!!!" />
    </div> );
}

export default CatImage;
