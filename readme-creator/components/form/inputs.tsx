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
  } = useForm<any>({
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  function receberDados(data: inputsProps) {
    console.log(data);
  }

  function Adicionar() {
    append({
      redeSocial: "",
      link_RedeSocial: "",
    });
  }

  return (
    <form onSubmit={handleSubmit(receberDados)} className={styles.Container}>
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
        {fields.map((products, index) => (
          <div key={products.id}>
            <input
              required
              placeholder="nome da rede social"
              {...register(`products.${index}.redeSocial`)}
            />
            <input
              required
              placeholder="link da rede social"
              {...register(`products.${index}.link_RedeSocial`)}
            />
          </div>
        ))}
      </ul>

      <ul className={styles.add_redeSocial}>
        <p>Adicionar mais redes sociais</p>
        <button onClick={Adicionar}>sim</button>
        <button>Nao</button> {/* criar função que remove uma rede social */}
      </ul>

      <input type="submit" />
    </form>
  );
}
