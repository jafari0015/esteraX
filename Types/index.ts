interface LineProps {
  direction?: "horizontal" | "vertical";
  length?: string | number;
  thickness?: string | number;
  color?: string;
  top?: string | number;
  left?: string | number;
  bottom?: string | number;
  right?: string | number;
  zIndex?: number;
  width?: string | number;
  height?: string | number;
  center?: boolean;
  style?: React.CSSProperties;
  animation?: "expandHorizontal" | "expandVertical";
}

interface NavItem {
  title: string;
  url: string;
  icon?: React.ElementType;
}
interface LoaderProps {
  duration?: number;
  className?: string;
}

interface VerticalLineProps {
  height: number;
  top?: number;
  right?: number;
}
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
  arrowColor?: string;
  arrowBg?: string;
  hoverBg?: string;
  hoverText?: string;
  size?: "sm" | "md" | "lg";
}
interface NavSectionProps {
  title?: string;
  items: { title: string; url: string }[];
  hovered: string | null;
  setHovered: (title: string | null) => void;
  showLine?: boolean;
  textSize?: string;
  fontWeight?: string;
  textColor?: string;
  arrowSize?: string;
  leading?: string;
  darkStyle?: boolean;
  className?: string;
  onLinkClick?: () => void;
}
interface AboutSectionProps {
  id?: string;
  title?: string;
  imageSrc?: string;
  heading?: string;
  paragraphs?: string[];
  buttonText?: string;
  buttonHref?: string;
  textClass?: string;
  bgColor?: string;
}
// Type definitions for blog data
interface BlogImage {
  asset?: {
    _id?: string;
    url?: string;
  };
  alt?: string;
  caption?: string;
}

interface BlogCategory {
  title: string;
  _id: string;
}

interface BlogSlug {
  current: string;
}

interface Blog {
  _id: string;
  title: string;
  slug: BlogSlug;
  excerpt?: string;
  mainImage?: BlogImage;
  publishedAt: string;
  categories?: BlogCategory[];
  readingTime?: number;
}

// --- Type Definitions ---
interface ImageValue {
  asset?: {
    url?: string;
  };
  alt?: string;
  caption?: string;
}

interface GalleryImageValue {
  asset?: {
    url?: string;
  };
  alt?: string;
  caption?: string;
}

interface GalleryValue {
  images?: GalleryImageValue[];
}

interface VideoValue {
  url?: string;
  caption?: string;
}

interface CodeValue {
  code?: string;
}


interface BlockProps {
  children?: React.ReactNode;
}

interface LinkValue {
  href?: string;
}

interface LinkProps {
  children?: React.ReactNode;
  value?: LinkValue;
}

interface Category {
  _id: string;
  title: string;
}

interface Author {
  name: string;
  image?: string;
  bio?: string;
  slug: string;
}

