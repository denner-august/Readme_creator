import { useContext } from "react";
import { Context } from "../../context/Dados";
import styles from "./inputs.module.scss";

import { useForm, useFieldArray } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { formProps, Yupschema } from "../../yup/schema";

export function Inputs() {
  const { images, setImages, receberDados } = useContext(Context);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(Yupschema),
  });

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

  function add_remove_Images(event: React.FormEvent, request: string) {
    event.preventDefault();

    if (request === "add") {
      setImages(images + 1);
    }

    if (images > 0 && request === "remove") {
      setImages(images - 1);
    }
  }

  return (
    <form onSubmit={handleSubmit(receberDados)} className={styles.Container}>
      <label>Titulo do seu projeto</label>
      <p>{errors.titulo?.message}</p>
      <input placeholder="qual o nome do seu projeto" {...register("titulo")} />

      <label>Descrição do seu projeto</label>
      <p>{errors.descrição?.message}</p>
      <textarea
        placeholder="descreva sobre seu projeto, o que você planeja fazer"
        {...register("descrição")}
      />

      <div className={styles.images}>
        <label>
          {images <= 0 ? "Adicionar images?" : "Adicionar mais images?"}
        </label>

        <span>{images}</span>

        <button onClick={(event) => add_remove_Images(event, "add")}>
          Adicionar
        </button>
        <button onClick={(event) => add_remove_Images(event, "remove")}>
          Remover
        </button>
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

            <p>{errors.redeSocial?.message}</p>
          </div>
        ))}
      </ul>

      <div className={styles.add_redeSocial}>
        <button onClick={Adicionar}>Adicionar mais redes sociais?</button>
      </div>

      <input type="submit" value="Gerar readme" />
    </form>
  );
}
