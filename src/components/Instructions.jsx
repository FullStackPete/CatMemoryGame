import Icon from "./Icon";

function Instructions() {
    return (<>
    <div className="how-to-play mt-48 flex justify-center text-4xl ">
        <p className="font-color-dark mr-2 pacifico"> How to play?</p>
        <Icon fontSize="30"iconName="help" color="#242038"/>
    </div></>  );
}

export default Instructions;