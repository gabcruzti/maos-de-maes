import styles from '../styles/pages/produtos.module.css'

export const ProdutoItem = ({ title, price, image, creator}) => {
  return (
    <>
      <div class={styles.produtosCard}> 
        <div class={styles.produtosImage} >
          <img src={image}/>
        </div>
        <div class={styles.produtosFooter}>
          <h1 class={styles.produtosTitle}>{title}</h1>
          <p class={styles.produtosCategory}>Criadora: {creator}</p>
          <p class={styles.produtosPrice}>R${price}</p>          
        </div>
        <div class={styles.produtosButtoms}>
            <button class={styles.produtosButtom}>Comprar</button>
            <div class={styles.produtosVer}>
                <a href="#">Ver</a>
            </div>
        </div>
      </div>
      </>
    
  );
};
