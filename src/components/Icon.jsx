function Icon({iconName,fontSize,color,onClick}) {
    const styledIcon = {
        fontSize:fontSize + "px",
        color:color,
    }

    return (<span onClick={onClick}className="material-symbols-outlined" style={styledIcon} >
    {iconName}
    </span>  );
}

export default Icon;