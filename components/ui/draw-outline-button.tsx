"use client";

import { useState, useRef, useEffect } from "react";
import { TfiArrowRight } from "react-icons/tfi";

interface DrawOutlineButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  strokeColor?: string;
}

const DrawOutlineButton: React.FC<DrawOutlineButtonProps> = ({
  children = "",
  onClick,
  className = "",
  icon,
  strokeColor = "#000000",
}) => {
  const [hovered, setHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (buttonRef.current) {
        const { width, height } = buttonRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const width = size.width || 180;
  const height = size.height || 50;
  const rx = height / 2;
  const perimeter = 2 * (width - height) + 2 * Math.PI * rx;

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex items-center justify-center gap-4 text-xl cursor-pointer mt-5 md:mt-10
        rounded-full overflow-visible text-secondary transition-all duration-300 ease-in-out min-w-[180px] min-h-[50px] ${className}`}
    >
      <svg
        width={width}
        height={height}
        className="absolute top-0 left-0 pointer-events-none"
      >
        <rect
          x={1}
          y={1}
          width={width - 2}
          height={height - 2}
          rx={rx}
          ry={rx}
          fill="none"
          stroke={strokeColor}
          strokeWidth="0.5"
          strokeDasharray={perimeter}
          strokeDashoffset={hovered ? 0 : perimeter}
          style={{ transition: "stroke-dashoffset 0.8s ease-in-out" }}
        />
      </svg>

      <span className="bg-secondary p-2 -ml-6 rounded-full text-foreground transition-transform duration-300 group-hover:-rotate-45 z-10 flex items-center justify-center">
        {icon || <TfiArrowRight />}
      </span>

      <span className="z-10">{children}</span>
    </button>
  );
};

export default DrawOutlineButton;
