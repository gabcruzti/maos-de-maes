import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

import styles from "../styles/components/carrinho.module.css";

export const Carrinho = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrinho, setCarrinho] = value.carrinho;
  const [total] = value.total;

  const tooglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carrinhosShow" : "carrinhos";
  const show2 = menu ? "carrinhoShow" : "carrinho";

  const substrair = (id) => {
    carrinho.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCarrinho([...carrinho]);
    });
  };

  const addition = (id) => {
    carrinho.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCarrinho([...carrinho]);
    });
  };

  const removeProduto = (id) => {
    if (window.confirm("Você deseja excluir o produto?")) {
      carrinho.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          carrinho.splica(index, 1);
        }
      });
      setCarrinho([...carrinho]);
    }
  };

  return (
    <div className={styles.show1}>
      <div className={styles.show2}>
        <div className={styles.carrinhoClose} onClick={tooglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Seu carrinho</h2>

        <div className={styles.carrinhoCenter}>
          {carrinho.lenght === 0 ? (
            <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
              Carrinho vazio
            </h2>
          ) : (
            <>
              {carrinho.map((produto) => (
                <div className={styles.carrinhoItem} key={produto.id}>
                  <img src={produto.image} width="40px" />
                  <div>
                    <h3>{produto.title}</h3>
                    <p className={styles.price}>R${produto.price}</p>
                  </div>
                  <div>
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => addition(produto.id)}
                    ></box-icon>
                    <p className={styles.amount}>{produto.cantidad}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => substrair(produto.id)}
                    ></box-icon>
                  </div>
                  <div
                    className={styles.remove}
                    onClick={removeProduto(produto.id)}
                  >
                    <box-icon name="trash" type="solid"></box-icon>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className={styles.carrinhoFooter}>
          <h3>Total: R$ {total}</h3>
          <button className={styles.btn}>Payment</button>
        </div>
      </div>
    </div>
  );
};
