import styles from "../styles/components/footer.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <h3>Segue a gente!</h3>
        <div className={styles.footerIcons}>
          <box-icon type="logo" name="gmail" size="sm" color="white"></box-icon>
          <box-icon
            type="logo"
            name="facebook-circle"
            size="sm"
            color="white"
          ></box-icon>
          <box-icon
            type="logo"
            name="instagram-alt"
            size="sm"
            color="white"
          ></box-icon>
          <box-icon type='logo' size="sm" color="white" name='linkedin-square'></box-icon>
        </div>
        <p>Feito com ♡ por Gabriela Cruz no Bootcamp da Reprograma</p>
      </div>
    </>
  );
}
