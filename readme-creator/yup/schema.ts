import * as yup from "yup";

export interface formProps {
  titulo: string;
  descrição: string;
  name: string;
  products: { redeSocial: string; link_RedeSocial: string }[];
  redeSocial: string;
  link_RedeSocial: string;
  mode: string;
}

export const Yupschema = yup
  .object({
    titulo: yup.string().required("Você precisa de um titulo"),
    descrição: yup.string().required("Descreva como vai funcionar seu projeto"),
  })
  .required();
