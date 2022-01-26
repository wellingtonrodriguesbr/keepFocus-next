import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}xp</header>
          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt={activeChallenge.type}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              onClick={resetChallenge}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeCompletedButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <div>
            <img src="icons/level-up.svg" alt="Level Up" />
          </div>
          <strong>Finalize um ciclo para receber desafios.</strong>
          <p>Avance de level completando os desafios e divirta-se com eles.</p>
        </div>
      )}
    </div>
  );
}
