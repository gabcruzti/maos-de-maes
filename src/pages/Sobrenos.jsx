import styles from "../styles/pages/sobrenos.module.css";
import imgSobreNos from "../assets/sobrenos.png";

export function Sobrenos() {
  return (
    <>
      <div className={styles.containerSobrenos}>
        <div>
          <img src={imgSobreNos} />
        </div>

        <section className={styles.containerSobrenos1}>
          <li className={styles.listSobrenos}>
            <h1 className={styles.titleSobrenos}>História</h1>
            <p className={styles.textSobrenos}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ipsa porro quis debitis dolorum perspiciatis nemo
              error blanditiis expedita tempora explicabo, tempore temporibus,
              velit optio eaque nulla corrupti possimus reprehenderit!
            </p>
          </li>
          <li className={styles.listSobrenos}>
            <h1 className={styles.titleSobrenos}>Missão</h1>
            <p className={styles.textSobrenos}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ipsa porro quis debitis dolorum perspiciatis nemo
              error blanditiis expedita tempora explicabo, tempore temporibus,
              velit optio eaque nulla corrupti possimus reprehenderit!
            </p>
          </li>
          <li className={styles.listSobrenos}>
            <h1 className={styles.titleSobrenos}>Visão</h1>
            <p className={styles.textSobrenos}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus ipsa porro quis debitis dolorum perspiciatis nemo
              error blanditiis expedita tempora explicabo, tempore temporibus,
              velit optio eaque nulla corrupti possimus reprehenderit!
            </p>
          </li>
        </section>
      </div>
    </>
  );
}
