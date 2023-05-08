import { Header } from "../../../components/header/header";
import { CatPageStyle } from "../catpageStyle";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToMale } from "../../../routes/coordinator";
import { CatsList } from "../../../components/cats";
import { CloseButton } from '@chakra-ui/react';
import { DefaultPageStyle } from './../../../components/secondaryStyles';


export const CrispimPage = () => {
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <CatPageStyle color="#0099CC">
        <div className="cat-container">
        <CloseButton id="close" onClick={() => goToMale(navigate)}/>
            {CatsList.filter(item => item.name === "Crispim").map((cat) => {
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
                  <p>Sou um gatão muito educado e agradável de {cat.age}. Eu fui um gatinho de rua por um bom tempo e enfrentei como pude os perigos das 
                  ruas. Porém, num belo dia, a galera do MiauDota me resgatou e hoje eu venci uma etapa da minha vida, saindo das ruas. Agora, só me falta
                  ganhar uma família só minha! No entanto, não está sendo uma tarefá fácil para mim, pois sou muito tímido e minha nova família precisa ser
                  muito especial e me amar como eu sou. Espero que eu consiga ganhar uma família amigos, pois mesmo sendo muito tímido eu vou amar as 
                  pessoas que me adotarem!</p>
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

