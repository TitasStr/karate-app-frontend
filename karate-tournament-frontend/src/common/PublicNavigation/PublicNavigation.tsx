import { useNavigate } from 'react-router-dom';
import styles from './PublicNavigation.module.scss';
import { routes } from 'src/config/Router/routes';

const PublicNavigation = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.navigationContainer}>
      <div className={styles.innerNavigation}>
        <h3 className={styles.title} onClick={() => navigate(routes.homepage)}>
          KTA
        </h3>
        <nav className={styles.navigation}>
          <div className={styles.navigationItem}>
            <h5>Apie</h5>
          </div>
          <div className={styles.navigationItem}>
            <h5>Varzybos</h5>
          </div>
          <div
            className={styles.navigationItem}
            onClick={() => navigate(routes.login)}
          >
            <h5>Prisijungti</h5>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default PublicNavigation;
