import { Header } from "../../../components/header/header";
import { DefaultPageStyle } from "../../../components/secondaryStyles";
import { ChakraProvider } from "@chakra-ui/react";
import { CatPageStyle } from "../catpageStyle";
import { goToMale } from "../../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';

export const BebezaoPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#0099CC">
        <div className="cat-container">
        <CloseButton id="close" onClick={() => goToMale(navigate)}/>
            {CatsList.filter(item => item.name === "Bebezão").map((cat) => {
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
                  <p>Sou um verdadeiro gatão manhoso e ciumento de {cat.age}. Eu já sofri muito nessa minha vidinha de gatinho, tive sarna e uma ferida 
                  muito grave na minha patinha! Mas, graças à chance que o MiauDota me deu, hoje eu estou muito saudável e super lindo. Aqui no abrigo, 
                  recebi o nome de bebezão porque faço muita manha e pareço ser um filhotinho ainda, mesmo assim grandão. Estou sonhando com o dia que eu 
                  serei adotado. Espero que não demore muito! Recadinho importante amigos: eu preciso ser filho único, pois eu não tenho muita paciência 
                  com outros gatinhos.</p>
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

