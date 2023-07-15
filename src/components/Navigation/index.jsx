import { Link, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
import { FaInstagram, FaSearchLocation, FaWhatsapp } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';
import Links from '../Links';
import { useState } from 'react';
import Poupup from '../Poupup';

const Navigation = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {showPopup && <Poupup onclose={handleClosePopup} showPopup={showPopup}/>} 
      <header>
        <section className={styles.cabecalho}>
          <div className={styles.cabecalho_links}>
            <a
              href="https://www.instagram.com/cave29bebidas/"
              className={styles.cabecalho_insta}
              target="_blank"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.google.com.br/maps/place/Cave+29+Bebidas+Especiais/@-21.1205941,-42.9519162,17z/data=!3m1!4b1!4m6!3m5!1s0xa31b3996031fbf:0x1546515af0f06748!8m2!3d-21.1205941!4d-42.9497275!16s%2Fg%2F11s0kbs6rt"
              className={styles.cabecalho_loc}
              target="_blank"
            >
              <FaSearchLocation />
            </a>
          </div>
          <Link to={'/'} className={styles.cabecalho_img}>
            <img src="/Logo3.png" alt="" />
          </Link>
          <div className={styles.cabecalho_pedido_btn}>
            <a
              href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5532999876682%26text%3DOi%252C%2Bgostaria%2Bde%2Bsaber%2Bsobre%2Bos%2Bvinhos%2Bda%2BCave%2B29%2521%25F0%259F%258D%25B7%25F0%259F%25A4%25A9%25F0%259F%25A5%2582&e=AT1FcE1pQU8xeCCvFjSczbfMnWyQSnRZJl2ugn3PRH0J-i24vxxRvxyeXBHwVKbjY0xwyIMieWY42tLalJvzwo0r0t_67AF_kVOCvj4"
              target="_blank"
            >
              Faça Seu Pedido
            </a>
          </div>
        </section>
        <Links />
      </header>

      <Outlet />

      <footer>
        <div className={styles.footer_contato}>
          <h2 className={styles.titulo_contato}>Contato</h2>
          <h1 className={styles.contato_num}>
            <FaWhatsapp /> (32) 9 9987-6682
          </h1>
          <h3>Email:</h3>
          <h3>CNPJ:43.931.107/001-66 </h3>
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5532999876682%26text%3DOi%252C%2Bgostaria%2Bde%2Bsaber%2Bsobre%2Bos%2Bvinhos%2Bda%2BCave%2B29%2521%25F0%259F%258D%25B7%25F0%259F%25A4%25A9%25F0%259F%25A5%2582&e=AT1FcE1pQU8xeCCvFjSczbfMnWyQSnRZJl2ugn3PRH0J-i24vxxRvxyeXBHwVKbjY0xwyIMieWY42tLalJvzwo0r0t_67AF_kVOCvj4"
            className={styles.cabecalho_pedido_btn}
            target="_blank"
          >
            <FaWhatsapp />
            Faça seu pedido aqui!
          </a>{' '}
        </div>

        <div className={styles.footer_localizacao}>
          <h2 className={styles.loc_titulo}>
            {' '}
            R. Francisco de Lucas Filho, 100 - <br /> Santa Cruz, Ubá - MG,
            36507-054
          </h2>
          <FaMapLocationDot />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7986010554914!2d-42.95191618523507!3d-21.120594085948692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa31b3996031fbf%3A0x1546515af0f06748!2sCave%2029%20Bebidas%20Especiais!5e0!3m2!1spt-BR!2sbr!4v1678019603408!5m2!1spt-BR!2sbr"
            width="350"
            height="250"
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
};

export default Navigation;
