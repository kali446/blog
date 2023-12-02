import React, { ButtonHTMLAttributes } from "react";
import type { Route as NextRouter } from "next";
import Link from "next/link";

export type Route<T = string> = NextRouter<string>;

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: Route;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  pattern?: "primary" | "secondary" | "third" | "white" | "default";
  layout?: "full" | "box" | "outline";
}

const Button = ({
  onClick,
  children,
  type,
  href,
  loading,
  disabled,
  pattern,
  className,
  layout,
}: Props) => {
  let colors = "";
  let shape = "";

  switch (pattern) {
    case "primary":
      colors =
        "bg-button text-buttonContrast hover:bg-buttonHover hover:text-buttonHoverContrast transition-colors duration-500";
      break;
    case "secondary":
      colors = "";
      break;
    case "white":
      colors = "";
      break;
    case "third":
      colors = "";
      break;
    default:
      break;
  }

  switch (layout) {
    case "full":
      shape = "w-full";
    default:
      break;
  }

  let CLASSES = `py-[.6rem] px-4 leading-none rounded-md capitalize font-medium text-[.9rem] ${colors} ${shape} ${className}`;

  if (!!href) {
    return (
      <Link href={href} className={`${CLASSES} `} onClick={onClick} type={type}>
        {children || `This is Link`}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${CLASSES}`}
      onClick={onClick}
      type={type}
    >
      {children || `Button default`}
    </button>
  );
};

export default Button;
