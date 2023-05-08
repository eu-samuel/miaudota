import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToFemale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const TinaPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#FF0080">
          <div className="cat-container">
          <CloseButton id="close" onClick={() => goToFemale(navigate)}/>
            {CatsList.filter(item => item.name === "Tina").map((cat) => {
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
                  <p>Sou uma gatinha super manhosa de {cat.age}. Ainda sou uma filhote e gostaria muito de crescer na minha própria casa, com a minha 
                  família. Estou aqui vivendo no abrigo e vou rezar todos os dias para ser adotada. Eu não posso perder as esperanças, não é mesmo? 
                  Amigos, só há um porém com a minha adoção: Sou Felv positiva, pois vim de uma mamãe que estava contaminada e por isso só posso conviver 
                  com outro gatinho felv positivo ou ser filha única (não ter outros gatinhos no local).</p>
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
