import Router from "next/router";
import { createContext, ReactNode, useState } from "react";

interface inputsProps {
  titulo?: string;
  descrição?: string;
  social?: string;
  link?: string;
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
  const [Dados, setTeste] = useState({});

  function receberDados(data: inputsProps) {
    setTeste(data);
  }

  function Exibir_results() {
    Router.push("results");
  }

  return (
    <Context.Provider
      value={{ images, setImages, receberDados, Dados, Exibir_results }}
    >
      {children};
    </Context.Provider>
  );
}
