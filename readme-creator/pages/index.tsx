import { Inputs } from "../components/form/inputs";
import Principal from "../components/principa";
import styles from "../styles/base.module.scss";

export default function Home() {
  return (
    <div className={styles.Container}>
      <Principal>
        <Inputs />
      </Principal>
    </div>
  );
}
