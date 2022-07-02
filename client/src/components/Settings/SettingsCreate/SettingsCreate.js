import styles from "./create.css";

const SettingsCreate = ({ create }) => {
  return (
    <div className={styles.create_container}>
      <img src={create.img} alt="song_img" className={styles.create_img} />
      <div className={styles.create_info}>
        <p className={styles.create_name}>{create.name}</p>
        <p className={styles.create_artist}>{create.artist}</p>
      </div>
    </div>
  );
};

export default SettingsCreate;
