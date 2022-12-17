import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider.jsx";

import styles from "../styles/components/menu.module.css";

export function Menu() {
  const value = useContext(DataContext);
  // const [carrinho] = value.carrinho;
  const [menu, setMenu] = value.menu;

  const toogleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className={styles.containerMenu}>
        <div>
          <Link className={styles.logoMenu} to="/">
            Mãos de Mães
          </Link>
        </div>
        <ul className={styles.menu}>
          

          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/produtos">
              Produtos
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/sobrenos">
              Sobre nós
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/maes">
              Mães
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/contato">
              Contato
            </Link>
          </li>
          {/* <div onClick={toogleMenu()}>
            <box-icon name="cart" color="white"></box-icon>
            <span className={styles.total}>{carrinho.length}</span>
          </div> */}
        </ul>
        <button className={styles.buttonWsp}>
          <a href="https://web.whatsapp.com/" target="_blank">
            <box-icon
              type="logo"
              name="whatsapp"
              size="35px"
              color="white"
            ></box-icon>
          </a>
        </button>
      </div>
    </>
  );
}
