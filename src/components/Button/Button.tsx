import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "text" | "primary";
}

export const Button: FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...restProps
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${className}`}
    {...restProps}
  >
    {children}
  </button>
);
