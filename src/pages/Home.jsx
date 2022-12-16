import { Link } from "react-router-dom";
import { BookOpen, PaintBrush, Palette, Heart, AddressBook, UserCirclePlus } from "phosphor-react";

import styles from "../styles/pages/home.module.css";
import imgHome from "../assets/home.png";
import imgProdutos from "../assets/produtoshome.png"
import imgMaes from "../assets/maeshome.png"


export function Home() {
  return (
    <>
      <div
        className={styles.backgroundImg}
        style={{ backgroundImage: `url(${imgHome})`, backgroundSize: "cover" }}
      ></div>
      <div className={styles.containerHome}>
        <div>
          <Link className={styles.menuLink} to="/produtos">
            
            <div><div className={styles.iconHome}>
              <PaintBrush size={74} />
              <Palette size={74} />
            </div>
            <div>
              <h3>Produtos exclusivos</h3>
              <p>
                Compre produtos feitos com muito amor pelas mãos maravilhosas de
                nossas mães.
              </p>
            </div></div>
            <div><img src={imgProdutos}/></div>
            
          </Link>
        </div>

        <div>
          <Link className={styles.menuLink} to="/maes">
          <div><img src={imgMaes}/></div>
            <div><div className={styles.iconHome}>
              <Heart size={84} />
            </div>
            <div>
              <h3>Conheça o coração das mulheres por trás</h3>
              <p>
                Por trás de cada produto existe uma história de força e
                resiliência que queremos dividir com você.
              </p>
            </div></div>
            
          </Link>
        </div>
        
        <div className={styles.containerHome1} >
        <div>
          <Link className={styles.menuLink} to="/sobrenos">
            <div className={styles.iconHome}>
              <BookOpen size={64} />
            </div>
            <div>
              <h3>Quem somos?</h3>
              <p>Conheça nossa história, missão, visão e propósito.</p>
            </div>
          </Link>
        </div>

        <div>
          <Link className={styles.menuLink} to="/contato">
            <div className={styles.iconHome}>
              <AddressBook size={64} />
            </div>
            <div>
              <h3>Você é uma mãe artesã?</h3>
              <p>Contacte-nos e conte a gente sua história.</p>
            </div>
          </Link>
        </div>

        <div>
          <Link className={styles.menuLink} to="/contato">
            <div className={styles.iconHome}>
              <UserCirclePlus size={64} />
            </div>
            <div>
              <h3>Junte-se a nós e apoie uma mãe!</h3>
              <p>
                Escreva a gente se estiver interessado em apoiar
                nossas mães.
              </p>
            </div>
          </Link>
        </div>
        </div>

        
      </div>
    </>
  );
}
