import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.card}>
        <h2>KARATE TURNYRU ARENA</h2>
        <h1 className={styles.moto}>SUKŪRK, VALDYK IR VARŽYKIS</h1>
        <h1 className={styles.moto2}>
          Atrask geriausius karate turnyrus Lietuvoje!
        </h1>
        <div className={styles.buttonContainer}>
          <button className={styles.button1}>ZIŪRĖTI GYVAI</button>
          <button className={styles.button2}>TURNYRAI</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
