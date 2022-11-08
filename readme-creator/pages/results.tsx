import Principal from "../components/principa";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Dados";

import styles from "../styles/results.module.scss";

export default function Results() {
  const { images, Dados } = useContext(Context);

  const [textoImage, setTextoImage] = useState<string[]>([]);
  const texto =
    '![texto alternativo](apaque e coloque a url da sua imagem aqui "titulo")';

  useEffect(() => {
    for (let index = 1; index <= images; index++) {
      setTextoImage((preve) => (preve = [...preve, texto]));
    }

    return () => {
      setTextoImage([]);
    };
  }, []);

  return (
    <Principal>
      <div className={styles.Container}>
        <h1> # {Dados.titulo}</h1>
        <p>## {Dados.descrição}</p>

        {textoImage.map((value, index) => {
          return (
            <div key={index}>
              <p>{value}</p>
            </div>
          );
        })}

        <ul>
          {Dados.products?.map((item, index) => {
            return (
              <div key={index}>
                <li>
                  <p>
                    {item.redeSocial}: {item.link_RedeSocial}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>

      <div className={styles.buttonLayout}>
        <button className={styles.button}>Selecione tudo e copie</button>
      </div>
    </Principal>
  );
}
