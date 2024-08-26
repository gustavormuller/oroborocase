"use client";

import { usePathname } from "next/navigation";

const STEPS = [
  {
    name: "Passo 1: Adicione uma imagem",
    description: "Escolha uma imagem para sua capinha",
    url: "/upload",
  },
  {
    name: "Passo 2: Customize o design",
    description: "Faça a capinha do seu jeito",
    url: "/design",
  },
  {
    name: "Passo 3: Resumo",
    description: "Revise seu design final",
    url: "/preview",
  },
];

const Steps = () => {
  const pathname = usePathname();

  return <div></div>;
};

export default Steps;
