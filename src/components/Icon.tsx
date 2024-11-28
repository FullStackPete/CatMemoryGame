type IconProps = {
  iconName: string;
  color?: string;
  fontSize?: number;
  onClick?: () => void;
  className?: string;
  filled?: boolean;
};
function Icon({
  iconName,
  fontSize,
  color,
  onClick,
  className,
  filled,
}: IconProps) {
  const styledIcon = {
    fontSize: fontSize + "px",
    color: color,
  };

  return (
    <span
      onClick={onClick}
      className={`material-symbols-outlined ${filled ? "fill-icon" : ""} ${className ? className : ""}`}
      style={styledIcon}
    >
      {iconName}
    </span>
  );
}

export default Icon;
