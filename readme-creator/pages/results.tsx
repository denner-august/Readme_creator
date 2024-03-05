import Principal from "../components/principa";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Dados";

import styles from "../styles/results.module.scss";

export default function Results() {
  const { images, Dados } = useContext(Context);

  const [textoImage, setTextoImage] = useState<string[]>([]);
  const texto =
    '![texto alternativo](apague e coloque a url da sua imagem aqui "titulo")';

  useEffect(() => {
    let index = 1;

    while (index <= images) {
      setTextoImage((preve) => (preve = [...preve, texto]));
      index++;
    }

    return () => {
      setTextoImage([]);
    };
  }, [images]);

  return (
    <Principal>
      <div className={styles.Container}>
        <h1> # {Dados.titulo}</h1>
        <br />
        <p>## {Dados.descrição}</p>
        <br />

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
                    {item.redeSocial}:{"<"}
                    {item.link_RedeSocial}
                    {">"}
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
