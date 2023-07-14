import { useParams } from 'react-router-dom';
import styles from './Vinho.module.css';
import { useEffect, useState } from 'react';
import Produtos from '../../Infos/produtos';
import { GiCellarBarrels, GiGrapes, GiDrop, GiDrinking, GiNoseSide, GiKnifeFork, GiSandsOfTime } from 'react-icons/gi';
import { FaWineGlassAlt, FaTemperatureLow } from 'react-icons/fa';
import Caracteristica from '../../components/Caracteristica';

const Vinho = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [vinho, setVinho] = useState({});

  function getVinhoById(id) {
    setVinho(Produtos.find(produto => produto.id === Number(id)));
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
            <div className={styles.icons}>
              <GiCellarBarrels color="rgb(59, 59, 59)" /> {vinho.vinicola}
            </div>
            <div className={styles.icons}>
              <GiGrapes color="rgb(59, 59, 59)" /> {vinho.uva}
            </div>
            <div className={styles.icons}>
              {' '}
              <FaWineGlassAlt color="grey" /> {vinho.tipo}
            </div>
          </div>
          <p className={styles.historia}>{vinho.historia}</p>
          <h3 className={styles.valor_container}>
            Valor: R${' '}
            <span className={styles.valor}>
              {vinho.preco && vinho.preco.toFixed(2)}
            </span>
          </h3>
          <button className={styles.botao_compra}>comprar</button>
        </div>
      </div>
      <div className={styles.container_caracteristica}>
        <h1 className={styles.caracteristica_title}>Características</h1>

        <div className={styles.caracteristica}>
          <Caracteristica 
            icon={<GiGrapes />} 
            title="Uva" 
            info={vinho.uva} 
          />

          <Caracteristica 
            icon={<GiCellarBarrels />} 
            title="Vinícola" 
            info={vinho.vinicola} 
          />

          <Caracteristica 
            icon={<FaWineGlassAlt />} 
            title="Tipo" 
            info={vinho.tipo} 
          />


<Caracteristica 
            icon={<FaTemperatureLow />} 
            title="Temp. de Serviço" 
            info={vinho.tempeservi} 
          />

<Caracteristica 
            icon={<GiDrop />} 
            title="Teor" 
            info={vinho.teor} 
          />

<Caracteristica 
            icon={<GiDrinking />} 
            title="Como Vejo" 
            info={vinho.comovejo} 
          />


<Caracteristica 
            icon={<GiNoseSide />} 
            title="Olfativo" 
            info={vinho.Olfativo} 
          />

<Caracteristica 
            icon={<GiKnifeFork />} 
            title="Harmonização" 
            info={vinho.harmonizacao} 
          />

<Caracteristica 
            icon={<GiSandsOfTime />} 
            title="Amadurecimento" 
            info={vinho.amadurecimento} 
          />
        </div>
      </div>
    </>
  );
};

export default Vinho;
