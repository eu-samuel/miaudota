import { Header } from "../../components/header/header";
import React from "react";
import { DonateContainer } from "./style";
import { DefaultPageStyle } from "../../components/secondaryStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const DonatePage = () => {

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <DonateContainer>
          <h1>Sua doação é importante!</h1>
          <article id="text">
            <p>Como forma de auxílio na nossa longa jornada pelo bem estar animal, a MiauDota aceita doações de pessoas que estejam dispostas a somar com a causa e contribuir com nosso projeto.
              Aceitamos doações em dinheiro e produtos voltados para animais como rações, medicamentos, caixas de areia, brinquedos e mais. Porém, lembre-se de que nossas pessoas voluntárias atuam apenas com gatos, alimentos voltados para cães serão redirecionados para outros projetos.</p>
          </article>
          <div className="container">
          <div className="box">
            <h1>Para doações em dinheiro:</h1>
          <div className="banks">
          <div id="bank-data">
          <h2>Itaú:</h2>
            <p>Agência: 9999</p>
            <p>Conta: 99999-9</p>
            <p>Pix: miaudota@email.com</p>
            </div>
            <div id="bank-data">
            <h2>Caixa econômica:</h2>
            <p>Agência: 8888</p>
            <p>Conta: 013 12345678-9</p>
            <p>Pix: miaudota2@email.com</p>
            </div>
            </div>
          <div id="postal">
            <h1>Caixa postal:</h1>
          <article><p>Samuel Pereira </p>
            <p>Rua Lorem Ipsum, 99 - Centro. </p>
            <p>Rio de Janeiro - RJ. 21999-999</p>
            </article>
            </div>
          </div>
          <img id="cat-donate" src="https://i.ibb.co/TLtK0tp/donate.png"/>
          </div>
        </DonateContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
