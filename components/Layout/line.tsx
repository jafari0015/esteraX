import React from "react";

const Line: React.FC<LineProps> = ({
  direction = "horizontal",
  length = "100%",
  thickness = 1,
  color = "black",
  top,
  left,
  bottom,
  right,
  zIndex = 50,
  width,
  height,
  center = false,
}) => {
  const style: React.CSSProperties = {
    position: "absolute",
    top,
    left,
    bottom,
    right,
    zIndex,
    backgroundColor: color,
    width:
      direction === "horizontal"
        ? width || length
        : typeof thickness === "number"
          ? `${thickness}px`
          : thickness,
    height:
      direction === "horizontal"
        ? typeof thickness === "number"
          ? `${thickness}px`
          : thickness
        : height || length,
  };

  if (center) {
    style.position = "absolute";
    style.top = "50%";
    style.left = "50%";
    style.transform = "translate(-50%, -50%)";
  }

  return <div style={style} />;
};

export default Line;
