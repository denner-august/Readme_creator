import { useForm, useFieldArray } from "react-hook-form";
import styles from "./inputs.module.scss";

interface inputsProps {
  titulo: string;
  descrição: string;
  social: string;
  nome: String;
  link: string;

  testando: string;
}

export function Inputs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<inputsProps>();

  function ReceberDAdos(data: inputsProps) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(ReceberDAdos)} className={styles.Container}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Titulo do seu projeto</label>
      <input placeholder="qual o nome do seu projeto" {...register("titulo")} />
      <label>Descrição Do seu projeto</label>
      <textarea
        placeholder="descreva sobre seu projeto, o que você planeja fazer"
        {...register("descrição")}
      />
      {/* adicionar imagem */}
      <label>Redes sociais</label>

      <ul className={styles.input_redeSocial}>
        <li>
          <input placeholder="nome da rede social" {...register("nome")} />
          <input placeholder="link da rede social" {...register("link")} />
        </li>
        {/* <li>
          <input placeholder="nome da rede social" />
          <input placeholder="link da rede social" />
        </li> */}

        <li></li>
      </ul>

      <ul className={styles.add_redeSocial}>
        <p>Adicionar mais redes sociais</p>
        <button>sim</button>
        <button>não</button>
      </ul>

      <input type="submit" />
    </form>
  );
}
