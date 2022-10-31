import { useForm } from "react-hook-form";
import styles from "./inputs.module.scss";

export function Inputs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Container}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Titulo do seu projeto</label>
      <input defaultValue="" {...register("titulo")} />
      <label>Descrição Do seu projeto</label>
      <textarea
        defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        {...register("descrição")}
      />

      <input type="submit" />
    </form>
  );
}
