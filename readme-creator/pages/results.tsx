import Principal from "../components/principa";
import { useContext } from "react";
import { Context } from "../context/Dados";
export default function Results() {
  const { images, Dados } = useContext(Context);

  return (
    <Principal>
      <h1>{images}</h1>
      <h1>{Dados.titulo}</h1>
      <h1>{Dados.descrição}</h1>
    </Principal>
  );
}
