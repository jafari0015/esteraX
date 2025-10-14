"use client";
import PercentageLoader from "../ui/percentage-loader";

interface HeaderLoaderProps {
  duration?: number;
  className?: string;
}

const HeaderLoader: React.FC<HeaderLoaderProps> = ({
  duration = 2,
  className,
}) => (
  <div className="fixed h-4 font-sans ">
    <PercentageLoader duration={duration} className={className} />
  </div>
);

export default HeaderLoader;
