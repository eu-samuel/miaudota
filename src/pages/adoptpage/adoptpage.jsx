import { Header } from "../../components/header/header";
import React from "react";
import { AdoptContainer } from "./style";
import { maleCats, femaleCats } from "../../components/cats";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const AdoptPage = () => {
  return (
    <ChakraProvider>
      <Header />
      <DefaultPageStyle>
        <AdoptContainer>
          <h1>Confira nosso quadro de adoções!</h1>
          <div className="cards-container">
            
            <div className="male-cats">
              {maleCats.map((cat, key) => {
                return (
                  <div key={key} className="cat-card">
                    <img src={cat.image} alt={cat.name} />
                    <p>{cat.name}</p>
                    <p>{cat.age}</p>
                    <button>Quero adotar</button>
                  </div>
                );
              })}
            </div>

            <div className="female-cats">
              {femaleCats.map((cat, key) => {
                return (
                  <div key={key} className="cat-card">
                    <img src={cat.image} alt={cat.name} />
                    <p>{cat.name}</p>
                    <p>{cat.age}</p>
                  </div>
                );
              })}
            </div>
            <p>Nomes fictícios, todos os gatos demonstrados neste projeto pertencem a Ong Patinhas Carentes.</p>
            <p><a href="https://www.patinhascarentes.org/gatos-para-adocao">Clique para saber mais</a></p>
          </div>
        </AdoptContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
