import { Link } from 'react-router-dom';
import styles from './Links.module.css';

const Links = () => {
    return ( 
        <section className={styles.menu}>
            <div className={styles.nav_list}>
                <ul>
                    <li className={styles.nav_item}><Link className={styles.nav_link} to="/">Carta de Vinhos</Link></li>
                    <li className={styles.nav_item}><Link className={styles.nav_link} to="/nossahistoria">Nossa História</Link></li>
                    <li className={styles.nav_item}><Link className={styles.nav_link} to="/localizacao">Localização</Link></li>
                </ul>
            </div>

            <div className={styles.icon_burguer}>
                <button className={styles.burguer} aria-expanded="false">
                    <div className={styles.top_bread} ></div>
                    <div className={styles.meat} ></div>
                    <div className={styles.bottom_bread} ></div>
                  </button>
                  <div className={`${styles.nav_list_mobile} ${styles.hidden}`}>
                    <ul>
                    <li className={styles.nav_item}><Link className={styles.nav_link} to="/">Carta de Vinhos</Link></li>
                    <li className={styles.nav_item}><Link className={styles.nav_link} to="/nossahistoria">Nossa História</Link></li>
                    <li className={styles.nav_item}><Link className={styles.nav_link} to="/localizacao">Localização</Link></li>
                    </ul>
            </div>
            </div>
        </section>
     );
}
 
export default Links;