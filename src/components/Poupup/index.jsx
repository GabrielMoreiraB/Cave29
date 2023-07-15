
import styles from './Poupup.module.css'

const Poupup = ({onclose, showPopup}) => {
    return ( 
        <div className={`${styles.popup} ${showPopup ? styles.open : ''}`}>
            <div className={styles.popup_content}>
                
                <h1 className={styles.title}>Você tem mais de 18 anos?</h1>
                <div className={styles.flex_popup}>
                <button className={styles.btn}  onClick={onclose}>Sim!</button>
                <button className={styles.nao}>Não</button>
                </div>
                <span><strong>Se beber, não dirija.</strong></span>
            </div>
        </div>
     );
}
 
export default Poupup;