import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.scss';
import { routes } from 'src/config/Router/routes';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <h3 className={styles.title} onClick={() => navigate(routes.homepage)}>
          KTA
        </h3>
        <div className={styles.navItemContainer}>
          <h3>About</h3>
          <p className={styles.navItem}>Lorem</p>
          <p className={styles.navItem}>Lorem</p>
          <p className={styles.navItem}>Lorem</p>
        </div>
        <div className={styles.navItemContainer}>
          <h3>About</h3>
          <p className={styles.navItem}>Lorem</p>
          <p className={styles.navItem}>Lorem</p>
          <p className={styles.navItem}>Lorem</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
