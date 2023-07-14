import { useEffect, useState } from 'react';
import styles from './Carta.module.css';
import Produtos from '../../Infos/produtos';
import Card from '../../components/Card';

const Carta = () => {
  const tipos = [
    {
      name: 'Todos',
      value: 'todos',
    },
    {
      name: 'Tinto',
      value: 'tinto',
    },
    {
      name: 'Branco',
      value: 'branco',
    },
    {
      name: 'Rosê',
      value: 'rose',
    },
    {
      name: 'Espumante',
      value: 'espumante',
    },
  ];

  const [vinhos, setVinhos] = useState([]);
  const [classe, setClasse] = useState('todos');

  useEffect(()=> {
    function getProdutoByTipo(){
      if(classe === 'todos'){
        setVinhos(Produtos);
        return
      }
      setVinhos(Produtos.filter(produto=> produto.tipo === classe))

    }
    getProdutoByTipo()
  },[classe])

  return (
    <>
      <section className={styles.carta}>
        <div className={styles.title_carta}>
          <h2>Nossa Carta</h2>
          <div className={styles.under_title_carta}></div>
        </div>
        <div className={styles.botoes_filtro}>
          {tipos.map(tipo => (
            <div
              className={styles.botao_filtro}
              key={tipo.value}
              onClick={()=>setClasse(tipo.value)}
            >
              {tipo.name}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.card_space}>
        {vinhos.map(vinho => (
          <Card key={vinho.id} vinho={vinho} />
        ))}
      </section>
    </>
  );
};

export default Carta;
