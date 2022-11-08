import Router from "next/router";
import { createContext, ReactNode, useState } from "react";

interface inputsProps {
  titulo?: string;
  descrição?: string;
  products?: { redeSocial?: string; link_RedeSocial?: string }[];
}

interface Dados {
  images: number;
  setImages: (props: number) => void;
  receberDados: (prop: inputsProps) => void;
  Dados: inputsProps;
  Exibir_results: () => void;
}

type ProviderProps = {
  children: ReactNode;
};

export const Context = createContext({} as Dados);

export default function ContextProvider({ children }: ProviderProps) {
  const [images, setImages] = useState(0);
  const [Dados, setDados] = useState({});

  function receberDados(data: inputsProps) {
    setDados(data);
    Exibir_results();
  }

  function Exibir_results() {
    Router.push("results");
  }

  return (
    <Context.Provider
      value={{ images, setImages, receberDados, Dados, Exibir_results }}
    >
      {children}
    </Context.Provider>
  );
}
