import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { goToFemale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const RainhaPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#FF0080">
          <div className="cat-container">
          <CloseButton id="close" onClick={() => goToFemale(navigate)}/>
            {CatsList.filter(item => item.name === "Rainha").map((cat) => {
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
                  <p>Olá pessoal. Eu me chamo Rainha. Como vocês estão?</p>
                  <p>Sou uma gatona linda e manhosa de {cat.age}. Me deram esse nome porque sou tão elegante e calma que mais pareço uma verdadeira rainha em seu trono. 
                    Mas infelizmente, parece que meus antigos tutores não pensavam assim, pois me encontraram dentro de uma caixa de papelão durante as fortes chuvas.
                    Se você está procurando uma gata tranquila e muito carinhosa, eu sou a sua perfeita escolha!
                    Quer me adotar? Mande uma mensagem para a galera da MiauDota e pergunte sobre mim. Vou ficar aqui esperando, estou ansiosa desde já. Beijinhos!</p>
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
