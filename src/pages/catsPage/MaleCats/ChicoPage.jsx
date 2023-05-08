import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { ChakraProvider } from "@chakra-ui/react";
import { CatPageStyle } from "../catpageStyle";
import { goToMale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const ChicoPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#0099CC">
        <div className="cat-container">
        <CloseButton id="close" onClick={() => goToMale(navigate)}/>
            {CatsList.filter(item => item.name === "Chico").map((cat) => {
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
                  <p>Sou um lindo filhotinho de apenas {cat.age}, super carinhoso e companheiro. Amigos, eu vim da rua e nunca mais quero voltar para lá. 
                  Estou aqui no abrigo esperando por uma adoção amorosa e responsável. Eu quero muito ganhar um lar e uma linda família! Infelizmente, eu 
                  nasci sendo Felv positivo e só posso conviver apenas com outro gatinho felv positivo ou ser filho único, mas meu amor vale por mais de 
                  cem gatinhos, isso eu garanto!.</p>
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

