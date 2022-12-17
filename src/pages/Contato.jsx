import { useState } from "react";
import { database } from "../service/firebase";
import { ref, push, set } from "firebase/database";

import styles from "../styles/pages/contato.module.css";
import imgContato from "../assets/contato.png";

export function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleInputValueNome(event) {
    setNome(event.target.value);
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value);
  }

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value);
  }

  function handleCreateMessage(event) {
    event.preventDefault();

    const messageListRef = ref(database, "mensagens");
    const newMessageRef = push(messageListRef);
    set(newMessageRef, {
      nome: nome,
      email: email,
      texto: mensagem,
    });
  }

  return (
    <>
      <div className={styles.containerContato}>
        <div>
          <img src={imgContato} />
        </div>

        <div className={styles.containerContato1}>
          <h4 className={styles.titleContato}>
            Entre em contato com a gente se você é uma mãe artesã ou se gostaria
            de apoiar nossa iniciativa.
          </h4>
          <form className={styles.form} onSubmit={handleCreateMessage}>
            <input
              className={styles.formInput}
              placeholder="Digite seu nome"
              onChange={handleInputValueNome}
            />
            <input
              className={styles.formInput}
              placeholder="Digite seu email"
              onChange={handleInputValueEmail}
            />

            <textarea
              className={styles.formTextArea}
              placeholder="Digite sua mensagem"
              onChange={handleInputValueMensagem}
            />
            <button type="submit" className={styles.formButton}>
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
