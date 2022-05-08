import React, { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hook/useAdicionarparticipante";

const Formulario = () => {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const adicionarNaLista = useAdicionarParticipante();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        placeholder="insira os nomes dos participantes"
      />
      <button disabled={!nome}>adicionar</button>
    </form>
  );
};
export default Formulario;
