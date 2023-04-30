import { Header } from "../../components/header/header";
import React from "react";
import { AboutContainer } from "./style";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const AboutPage = () => {
  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <AboutContainer>
          <div className="main">
        <div className="article">
        <h1>O que é a MiauDota?</h1>
          <article>
          A MiauDota é uma organização sem fins lucrativos, tendo sua sede localizada no centro da cidade do Rio de Janeiro. 
          Nosso trabalho é centralizado nos cuidados de abrigar, resgatar e disponibilizar para adoção gatos em situação de rua, abandono e maus tratos.
          </article>
          
          <article>
            Hoje, temos em nosso quadro cerca de 35 pessoas voluntárias, famílias inteiras que se doam por uma caracterísica em comum: o forte senso de justiça por aqueles
            que não conseguem compreender como nosso mundo funciona. A quantidade de gatos sob nossos cuidados até a presente data é de cerca de 220 a 240 animais.
            </article>
            
            <article>
            Nossa sede funciona como uma espécie de abrigo, concentrando os gatos da região do centro e áreas próximas. Além disso, atuamos através de grandes lares temporários,
            disponibilizados por nossa equipe de pessoas voluntárias e espalhados por toda a cidade e outros municípios da baixada fluminense.
            </article>

            <article>
            No momento, você está nos conhecendo através de nosso espaço virtual, aonde exibimos os animais que estão em urgência de adoção em um ambiente de maior alcance. 
            Confira nossa página de adoções no menu ao lado para saber mais.
            </article>
          </div>
          <div className="main-img">
          <img id ="collage" src="https://i.ibb.co/G2qXWDH/collage.png"/>
        <p>A MiauDota funciona através de diversas pessoas voluntárias, que fornecem lares temporários aos animais.</p>
        </div>
        </div>
        <div className="stats">
        </div>
        </AboutContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
