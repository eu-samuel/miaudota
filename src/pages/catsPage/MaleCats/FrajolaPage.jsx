import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToMale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';
import DarkModeButton from './../../../components/DarkButton';

export const FrajolaPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#0099CC">
        <div className="cat-container">
        <CloseButton id="close" onClick={() => goToMale(navigate)}/>
            {CatsList.filter(item => item.name === "Frajola").map((cat) => {
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
                  <p>Sou um gatinho muito fofo de apenas {cat.age} e nasci aqui no abrigo, já que minha mamãe foi resgatada ainda grávida. Moro junto com 
                  os meus dois irmãos e a minha mamãe. Sou super carinhoso, adoro brincar e estou doido para ganhar uma linda famíla. Espero não ficar 
                  adulto aqui, pois quero crescer na minha própria casinha. Me dou muito bem com outros gatinhos, mas tenho muito medo de cachorro então 
                  por favor, me leve pra um lar sem cãezinhos para não me deixar apavorado.</p>
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

