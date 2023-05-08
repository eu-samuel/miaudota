import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToFemale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const LilicaPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#FF0080">
          <div className="cat-container">
          <CloseButton id="close" onClick={() => goToFemale(navigate)}/>
            {CatsList.filter(item => item.name === "Lilica").map((cat) => {
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
                  <p>Sou uma verdadeira lady de {cat.age}, uma gatinha super delicada e amorosa. As tias falam que eu sou uma verdadeira lady, e podem 
                  acreditar que sou mesmo! Vou seguir aqui com toda a minha doçura sonhando com a minha família. Será que é você? Apesar de eu ainda ser 
                  muito novinha para ser castrada, a MiauDota já disse que, assim que eu fizer seis mesinhos, eu serei castrada mesmo se você me adotar antes, 
                  e tudo por conta da ong!
                  </p>
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
