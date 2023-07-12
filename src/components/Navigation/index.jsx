import { Outlet } from "react-router-dom";
import styles from './Navigation.module.css'
import { FaInstagram, FaSearchLocation } from "react-icons/fa";
import Links from "../Links";

const Navigation = () => {
    return ( 
        <>
        <header>
        <section className={styles.cabecalho}>
           <div className={styles.cabecalho_links}>
                    <a href="https://www.instagram.com/cave29bebidas/" className={styles.cabecalho_insta} target="_blank"><FaInstagram/></a>
           
                    <a href="https://www.google.com.br/maps/place/Cave+29+Bebidas+Especiais/@-21.1205941,-42.9519162,17z/data=!3m1!4b1!4m6!3m5!1s0xa31b3996031fbf:0x1546515af0f06748!8m2!3d-21.1205941!4d-42.9497275!16s%2Fg%2F11s0kbs6rt" className={styles.cabecalho_loc} target="_blank"><FaSearchLocation/></a>

            </div>
           <div className={styles.cabecalho_img}>
            <img src="Logo3.png" alt=""/>

            </div>
           <div className={styles.cabecalho_pedido_btn}>
                <a href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5532999876682%26text%3DOi%252C%2Bgostaria%2Bde%2Bsaber%2Bsobre%2Bos%2Bvinhos%2Bda%2BCave%2B29%2521%25F0%259F%258D%25B7%25F0%259F%25A4%25A9%25F0%259F%25A5%2582&e=AT1FcE1pQU8xeCCvFjSczbfMnWyQSnRZJl2ugn3PRH0J-i24vxxRvxyeXBHwVKbjY0xwyIMieWY42tLalJvzwo0r0t_67AF_kVOCvj4"className={styles.cabecalho_pedido_btn}  target="_blank">Faça Seu Pedido</a>
            </div>
       </section>
        <Links/>
        
        </header>

        <Outlet/>
        </>
        
     );
}
 
export default Navigation;