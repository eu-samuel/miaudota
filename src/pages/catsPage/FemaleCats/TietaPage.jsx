import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToFemale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const TietaPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#FF0080">
          <div className="cat-container">
          <CloseButton id="close" onClick={() => goToFemale(navigate)}/>
            {CatsList.filter(item => item.name === "Tieta").map((cat) => {
            return (
              <>
            <p id="name">{cat.name}</p>
            <div className="cat-info">
              <img src={cat.image2} alt={cat.name} />
              <div>
                <p id="age">Idade: {cat.age}</p>
                <p id="local">Está em: {cat.local}</p>
                <p>Castrada: Sim</p>
                <article>
                  <p>Olá pessoal. Eu me chamo {cat.name}. Como vocês estão?</p>
                  <p>Sou uma gatona muito linda de {cat.age}. Amigos, eu cheguei aqui no abrigo ano passado e eu estava gravidinha. Então, eu tive meus 
                  filhotes aqui no abrigo e vivo aqui, mas sigo sonhando com o dia que eu ou meus filhinhos vão ganhar uma nova família! Eu tenho uma 
                  pelagem fora dos padrões e olhos verde-água que chama atenção de qualquer um! Sou muito tímida, aceito um pouco de carinho mas no meu 
                  tempo, quando estou afim. Eu preciso de uma família que entenda meu perfil, tenha paciência, amor e respeito do meu tempo. Você, que está 
                  aí do outro lado, não gostaria de dar uma chance para uma pretinha? Prometo que eu não dou aza e sim muito amor!</p>
                  </article>
                  <p id="adoption">
                   Quer adotar a {cat.name}? Use o botão de "fale conosco" ou nos mande uma mensagem no Whatsapp 
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
