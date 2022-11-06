import { FC } from "react";
import styles from "../styles/Home.module.css";

export const Button: FC<{ label: string; handleClick?: () => void }> = ({
  label,
  handleClick,
}) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};
