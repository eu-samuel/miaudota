import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToMale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const GaelPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#0099CC">
        <div className="cat-container">
        <CloseButton id="close" onClick={() => goToMale(navigate)}/>
            {CatsList.filter(item => item.name === "Gael").map((cat) => {
            return (
              <>
            <p id="name">{cat.name}</p>
            <div className="cat-info">
              <img src={cat.image2} alt={cat.name} />
              <div>
                <p id="age">Idade: {cat.age}</p>
                <p id="local">Está em: {cat.local}</p>
                <p>Castrado: Sim</p>
                <article>
                  <p>Olá pessoal. Eu me chamo {cat.name}. Como vocês estão?</p>
                  <p>Sou um gatinho preto de {cat.age} que dá muita sorte, viu! Sofria maus tratos nas ruas e por isso sou muito medroso e tenho uma 
                  personalidade mais introvertida, mas mesmo assim eu também mereço e quero muito ganhar amor. Se você tiver paciência e muito amor no 
                  coração eu vou aprender a confiar e vou te dar o meu coração felino de presente! Amigos, estou aqui no abrigo a um ano esperando por 
                  uma família, não quero mais esperar tanto! Você aí, me adota? Prometo que vou ser um bom menino!</p>
                </article>
                <p id="adoption"> Quer adotar o {cat.name}? Use o botão de "fale conosco" ou nos mande uma mensagem no Whatsapp 
                pelo número (21) 99999-9999. <p>Não aceitamos ligações.</p></p>
              </div>
            </div>
            </>
            )})}
          </div>
        </CatPageStyle>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};

