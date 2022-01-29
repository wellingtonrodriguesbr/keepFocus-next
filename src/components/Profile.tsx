import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="/icons/eye.svg" alt="Imagem de perfil do usuário" />
      <div>
        <strong>Mantenha o foco</strong>
        <p>
          <img src="icons/level.svg" alt="Seta roxa apontando para cima" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
