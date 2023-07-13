import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { GiCellarBarrels, GiGrapes } from "react-icons/gi";

const Card = ({vinho}) => {
  return (
    <>
      <Link to={`/vinho/${vinho.id}`} className={styles.card_front}>
        <img src={vinho.imagem} alt={vinho.nome} />
        <div className={styles.card_info}>
          <h2 className={styles.card_name}>{vinho.nome}</h2>
            <div className={styles.card_info_cabecalho}>
              <div>
                <GiCellarBarrels className={styles.icons_info}/>
                <span>{vinho.vinicola}</span>
              </div>
              <div>
                <GiGrapes className={styles.icons_info}/>
                <span>{vinho.uva}</span>
              </div>
            </div>
          <div className={styles.card_front_info_valor}>
            <button className={`${styles.btn_troca} ${styles.btn_trocaF}`} >
              <img src="img/produtos/icons/info.png" alt='' />
            </button>
            <div className={styles.valor_front}>
            <div className={styles.bola}></div>
              <h2>R$${vinho.preco.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
