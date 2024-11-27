type IconProps = {
  iconName: string;
  fontSize: number;
  color: string;
  onClick?: () => void;
};
function Icon({ iconName, fontSize, color, onClick }: IconProps) {
  const styledIcon = {
    fontSize: fontSize + "px",
    color: color,
  };

  return (
    <span
      onClick={onClick}
      className="material-symbols-outlined"
      style={styledIcon}
    >
      {iconName}
    </span>
  );
}

export default Icon;

