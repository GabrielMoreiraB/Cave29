import styles from './Historia.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaWineBottle, FaWineGlassAlt, FaHouseUser } from "react-icons/fa";

const Historia = () => {

    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.banner_titulo}>Tradição</div>
        <div className={styles.banner_texto}>Encantando Paladares desde 2019</div>
      </section>
      <section className={styles.cards}>
        <div className={styles.card} data-aos="fade-up"
            data-aos-duration="1000">
          <div className={styles.card_icon}>
            <FaWineBottle/>
          </div>
          <h2 className={styles.card_title}>Qualidade</h2>
          <p className={styles.card_text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae molestiae voluptate molestias ea natus, repellat odit
            fugit, ullam maxime ex consectetur. Ducimus quia nostrum neque ipsa
            reprehenderit dolorem ad fugit.
          </p>
        </div>

        <div className={styles.card} data-aos="fade-up"
            data-aos-duration="2000">
          <div className={styles.card_icon}>
            <FaWineGlassAlt/>
          </div>
          <h2 className={styles.card_title}>Exclusividade</h2>
          <p className={styles.card_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            incidunt, sunt debitis vitae ratione nulla quidem laudantium
            voluptatibus atque ex saepe veniam consequatur odit quisquam,
            similique tempore exercitationem est possimus.
          </p>
        </div>

        <div className={styles.card} data-aos="fade-up"
            data-aos-duration="3000">
          <div className={styles.card_icon}>
            <FaHouseUser/>
          </div>
          <h2 className={styles.card_title}>Tradição</h2>
          <p className={styles.card_text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            exercitationem minima aperiam quasi impedit quo cumque repellat,
            similique qui suscipit atque, illum perspiciatis voluptate unde aut
            laudantium cupiditate et tempore.
          </p>
        </div>
      </section>

      <section className={styles.history} data-aos="fade-right" data-aos-duration="1000">
        <div className={styles.history_conteudo}>
          <h2 className={styles.title_conteudo}>Conheça Nossa Historia</h2>
          <div className={styles.under_title}></div>
          <p className={styles.text_conteudo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            libero porro nulla vitae aut, eum possimus doloremque, architecto
            quidem, commodi numquam placeat nostrum autem veniam quod facere ut
            quae eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem corrupti, odit similique architecto voluptate tempore eum
            deserunt. Sapiente rem error aut dolore explicabo incidunt adipisci
            necessitatibus aperiam animi placeat. Laudantium.
          </p>
        </div>
        <div className={styles.history_img}>
          <img src="img2.png" alt="" />
        </div>
      </section>

      <section className={styles.banner_fixed}>
        <h2 className={styles.text_banner}>
          “Quem sabe degustação, nunca mais bebe um vinho, mas experimenta seus
          segredos.”
        </h2>
      </section>
    </>
  );
};

export default Historia;
