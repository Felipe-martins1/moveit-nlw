import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Felipe-martins1.png" alt="Felipe Martins" />
      <div>
        <strong>Felipe Martins</strong>
        <p>
          <img src="icons/level.svg" alt="Level Atual" />
          Level 1
        </p>
      </div>
    </div>
  );
}
