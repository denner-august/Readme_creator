import { ReactNode } from "react";
import styles from "./base.module.scss";

type PrincipalProps = {
  children: ReactNode;
};

export default function Principal({ children }: PrincipalProps) {
  return <div className={styles.Container}>{children}</div>;
}
