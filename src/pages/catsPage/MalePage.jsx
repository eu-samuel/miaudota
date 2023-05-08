import React from "react";
import { Header } from "../../components/header/header";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultPageStyle } from "../../components/SecondaryStyles";
import { CatCard } from "../../components/Cards/CatCard";
import { goToAdopt } from "../../routes/coordinator";
import { CatsContainer } from "./CatsContainer";
import { useNavigate } from "react-router-dom";

export const MalePage = (props) => {
  const maleCats = props.CatsList.filter(cat => cat.genre === "male")
  const navigate = useNavigate()

  return (
    <ChakraProvider>
    <Header/>
    <DefaultPageStyle>
      <CatsContainer>
      <p id="back" onClick={() => goToAdopt(navigate)}>Voltar</p>
        <div className="main-container">
    {maleCats.map((cat, index) => {
      return(
        <CatCard
        key={index}
        color="#0099CC"
        hover="#017095"
        content={props.content}
        cat={cat}
        />
      )
    })}
    </div>
    <p id="credits">Nomes fictícios, todas as imagens foram retiradas do catálogo da <a href="https://www.patinhascarentes.org/gatos-para-adocao">Ong Patinhas Carentes.</a></p>
    </CatsContainer>
     </DefaultPageStyle>
    </ChakraProvider>
  );
};
