function Icon({iconName,fontSize,color}) {
    const styledIcon = {
        fontSize:fontSize + "px",
        color:color,
    }

    return (<span className="material-symbols-outlined" style={styledIcon} >
    {iconName}
    </span>  );
}

export default Icon;