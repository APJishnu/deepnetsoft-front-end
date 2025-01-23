import React from "react";
import { Button } from "antd";
import styles from "./button.module.scss";

interface ButtonComponentProps {
  text: string;
  onClick?: () => void;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  className?:string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  onClick,
  type = "default",
  className
}) => {
  return (
    <Button className={`${styles.commonButton} ${className}`} type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
