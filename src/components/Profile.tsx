import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/wellingtonrodriguesbr.png"
        alt="Imagem de perfil do usuário"
      />
      <div>
        <strong>Wellington Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Seta roxa apontando para cima" />
          Level 1
        </p>
      </div>
    </div>
  );
}
