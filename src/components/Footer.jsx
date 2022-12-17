import styles from "../styles/components/footer.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <h3>Segue a gente!</h3>
        <div className={styles.footerIcons}>
          <a href="https://mail.google.com/" target="_blank">
            <box-icon
              type="logo"
              name="gmail"
              size="sm"
              color="white"
            ></box-icon>
          </a>
          <a href="https://facebook.com/" target="_blank">
            <box-icon
              type="logo"
              name="facebook-circle"
              size="sm"
              color="white"
            ></box-icon>
          </a>
          <a href="https://instagram.com/" target="_blank">
            <box-icon
              type="logo"
              name="instagram-alt"
              size="sm"
              color="white"
            ></box-icon>
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <box-icon
              type="logo"
              size="sm"
              color="white"
              name="linkedin-square"
            ></box-icon>
          </a>
        </div>
        <p>Feito com ♡ por Gabriela Cruz no Bootcamp da Reprograma</p>
      </div>
    </>
  );
}
