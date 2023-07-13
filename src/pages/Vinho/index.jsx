import { useParams } from 'react-router-dom';
import styles from './Vinho.module.css';
import { useEffect, useState } from 'react';
import Produtos from '../../Infos/produtos';
import { GiCellarBarrels, GiGrapes} from "react-icons/gi";
import { FaWineGlassAlt } from "react-icons/fa";

const Vinho = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [vinho, setVinho] = useState({});

  function getVinhoById(id) {
    setVinho(Produtos.find(produto => produto.id ===  Number(id)));
    setLoading(false);
  }
  useEffect(() => {
    getVinhoById(id);
  }, []);

  return (
    <>
      <div className={styles.container_img}>
        <img src={`/${vinho.imagem}`} alt={vinho.nome} />  
        <div className={styles.container_img_info}>
            <h1 className={styles.container_title}>{vinho.nome}</h1>
            <div className={styles.container_icons}>
                <div className={styles.icons}><GiCellarBarrels color='grey'/>  {vinho.vinicola}</div>
                <div className={styles.icons}><GiGrapes color='grey'/> {vinho.uva}</div>
                <div className={styles.icons}> <FaWineGlassAlt color='grey'/> {vinho.tipo}</div>
            </div>
            <p className={styles.historia}>{vinho.historia}</p>
            <h3 className={styles.valor_container}>Valor: R$ <span className={styles.valor}>{vinho.preco && (vinho.preco).toFixed(2)}</span>
            </h3>
            <button className={styles.botao_compra}>comprar</button>
        </div>

      </div>
    </>
  );
};

export default Vinho;
