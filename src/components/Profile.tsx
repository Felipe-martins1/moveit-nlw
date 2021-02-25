import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Felipe-martins1.png" alt="Felipe Martins" />
      <div>
        <strong>Felipe Martins</strong>
        <p>
          <img src="icons/level.svg" alt="Level Atual" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
