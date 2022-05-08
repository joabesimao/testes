import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario";

//Jest

test("quando o input está vazio,novos componentes não podem ser adicionados", () => {
  render(<Formulario />);

  //encontrar no DOM o input
  const input = screen.getByPlaceholderText(
    "insira os nomes dos participantes"
  );
  //encontrar o botao
  const botao = screen.getByRole("button");

  //garantir que o input esteja no documento
  expect(input).toBeInTheDocument();
  //garantir que o botao esteja desabilitado
  expect(botao).toBeDisabled();
});

test("adicionar um participante caso exista um nome preenchido", () => {
  render(
    <RecoilRoot>
      <Formulario />
    </RecoilRoot>
  );
  const input = screen.getByPlaceholderText(
    "insira os nomes dos participantes"
  );
  //encontrar o botao
  const botao = screen.getByRole("button");

  fireEvent.change(input, {
    target: {
      value: "joabe Simao",
    },
  });
  fireEvent.click(botao);

  expect(input).toHaveFocus();

  expect(input).toHaveValue("");
});
