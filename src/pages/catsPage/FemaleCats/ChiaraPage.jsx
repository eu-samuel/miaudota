import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToFemale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

export const ChiaraPage = () => {
  const navigate = useNavigate();

  return (
    <ChakraProvider>
      <Header />
      <DefaultPageStyle>
        <CatPageStyle 
        color="#FF0080">
          <div className="cat-container">
            <CloseButton id="close" onClick={() => goToFemale(navigate)} />
            {CatsList.filter((item) => item.name === "Chiara").map((cat) => {
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
                  <p>Olá pessoal. Eu me chamo {cat.name}, a gatinha mais charmosa do MiauDota!</p>
                  <p>Sou uma gatinha muito divertida de {cat.age}. Eu fui resgatada praticamente recém-nascida, pois minha mamãe infelizmente foi vítima de
                  humanos muito malvados quando descobriram que ela teve filhotinhos. Sou muito grata por tudo que a galerinha da MiauDota fez e ainda faz 
                  por mim, mas agora eu sinto no meu coraçãozinho que o meu lugar não é mais aqui no abrigo. Meu lugar é com a minha família e amigos eu 
                  sinto que a minha família está em algum lugar, só esperando a hora certa para vir me buscar. Enquanto isso, eu vou ficar aqui rezando 
                  para que a minha família não demore muito! Sou castrada, vacinada e vermifugada.</p>
                </article>
                <p id="adoption">
                        Quer adotar a {cat.name}? Use o botão de "fale conosco" ou nos mande uma mensagem no Whatsapp 
                pelo número (21) 99999-9999. <p>Não aceitamos ligações.</p></p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </CatPageStyle>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
