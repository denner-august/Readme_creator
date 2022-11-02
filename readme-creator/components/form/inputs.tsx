import { useContext } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Context } from "../../context/Dados";
import styles from "./inputs.module.scss";

export function Inputs() {
  const { images, setImages, receberDados, Exibir_results } =
    useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<any>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  function Adicionar() {
    append({
      redeSocial: "",
      link_RedeSocial: "",
    });
  }

  function add_remove_Images(request: string) {
    if (request === "add") {
      return setImages(images + 1);
    }

    if (images > 0 && request === "remove") {
      return setImages(images - 1);
    }
  }

  return (
    <form onSubmit={handleSubmit(receberDados)} className={styles.Container}>
      <label>Titulo do seu projeto</label>
      <input
        required
        placeholder="qual o nome do seu projeto"
        {...register("titulo")}
      />
      <label>Descrição do seu projeto</label>
      <textarea
        required
        placeholder="descreva sobre seu projeto, o que você planeja fazer"
        {...register("descrição")}
      />

      <div className={styles.images}>
        <label>
          {images <= 0 ? "Adicionar images?" : "Adicionar mais images?"}
        </label>

        <span>{images}</span>

        <button onClick={() => add_remove_Images("add")}>Adicionar</button>
        <button onClick={() => add_remove_Images("remove")}>Remover</button>
      </div>

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

            <button
              className={styles.button_remove}
              onClick={() => remove(Number(index))}
            >
              Remover
            </button>
          </div>
        ))}
      </ul>

      <div className={styles.add_redeSocial}>
        <button onClick={Adicionar}>Adicionar mais redes sociais?</button>
      </div>

      <input type="submit" value="Gerar readme" onClick={Exibir_results} />
    </form>
  );
}
