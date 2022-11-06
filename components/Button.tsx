import { FC } from "react";
import styles from "../styles/Home.module.css";

export const Button: FC<{ label: string }> = ({ label }) => {
  return (
    <button className={styles.button} onClick={() => {}}>
      {label}
    </button>
  );
};
