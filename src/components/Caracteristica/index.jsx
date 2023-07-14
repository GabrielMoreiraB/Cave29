import styles from './Caracteristica.module.css';

const Caracteristica = ({icon, title, info}) => {
    return ( 

          <div className={styles.caracteristica_unidade}>
            <div className={styles.caracteristica_icon}>{icon}</div>
            <span className={styles.caracteristica_texto}>{title}</span>
            <span className={styles.caracteristica_texto_info}>{info}</span>
          </div>
     );
}
 
export default Caracteristica;
