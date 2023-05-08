import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToFemale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const KikaPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#FF0080">
          <div className="cat-container">
          <CloseButton id="close" onClick={() => goToFemale(navigate)}/>
            {CatsList.filter(item => item.name === "Kika").map((cat) => {
            return (
              <>
            <p id="name">{cat.name}</p>
            <div className="cat-info">
              <img src={cat.image2} alt={cat.name} />
              <div>
                <p id="age">Idade: {cat.age}</p>
                <p id="local">Está em: {cat.local}</p>
                <p>Castrada: Não (Castração por nossa conta)</p>
                <article>
                  <p>Olá pessoal. Eu me chamo {cat.name}. Como vocês estão?</p>
                  <p>Sou uma gatona linda e manhosa de {cat.age}. As tias me resgataram das ruas e me deram uma segunda chance de vida. Desde então eu vivo
                  aqui no abrigo. Já passei por várias feiras de adoção e ainda não ganhei uma família. Isso me deixa triste. Amigos eu sou uma gatinha 
                  tímida, preciso de um tempo para conseguir ficar amiga das pessoas. Mas eu sou uma boa gatinha, sou calminha e gosto de brincar, só 
                  preciso que a pessoa tenha paciência comigo. Espero que a minha família chegue logo para eu finalmente ter o meu final feliz.</p>
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
