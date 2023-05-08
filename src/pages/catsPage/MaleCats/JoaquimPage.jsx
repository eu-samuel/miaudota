import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToMale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const JoaquimPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#0099CC">
        <div className="cat-container">
        <CloseButton id="close" onClick={() => goToMale(navigate)}/>
            {CatsList.filter(item => item.name === "Joaquim").map((cat) => {
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
                  <p>Sou uma gatinho maravilhoso e calmo de {cat.age}. Pessoal, eu nasci aqui no abrigo porque minha mamãe foi resgatada grávida e já sou 
                  castrado, vacinado e já tomei os meus remedinhos contra vermes e pulgas. Eu estou prontinho para ser adotado, já participei de algumas 
                  feirinhas de adoção mas ninguém me adotou. Amigos, será que eu tenho alguma coisa errada? Eu não entendo por que ninguém quis me adotar. 
                  Eu sou bonito, amo um carinho e adoro ficar no colinho. Será que você gostaria de vim me conhecer? Gostaria de ser a minha família? Me dá 
                  uma chance amiguinho, eu prometo que eu serei um bom gatinho!</p>
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

