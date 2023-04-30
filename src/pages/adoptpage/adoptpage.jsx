import { Header } from "../../components/header/header";
import React, {useState} from "react";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { AdoptContainer} from "./style";
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToMale } from "../../routes/coordinator";
import { goToFemale } from "../../routes/coordinator";

export const AdoptPage = () => {

  const [modelCat, setModelCat] = useState([])
  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>

        <AdoptContainer>
        <div className="cat-genres">
      <h1>Confira nosso quadro de adoções!</h1>

      <p id="description">
        Disponibilizamos sempre os gatinhos que estamos em mais urgência de
        adoção e atendam todos os nossos requisitos.
      </p>
      <p id="description">
        Porém, nos mande uma mensagem se você tiver especificações quanto a cor,
        sexo ou idade. A nossa lista de gatinhos é atualizada a cada quinzena ou a medida em que são adotados.
      </p>
      <div className="genre-select">
        <img src="https://i.ibb.co/jhCZxKf/image.png" alt="male-cats" onClick={() => goToMale(navigate)} />
        <img src="https://i.ibb.co/cDL4QQ6/image.png" alt="female-cats" onClick={() => goToFemale(navigate)}/>
      </div>

      <p id="credits">Nomes fictícios, todas as imagens foram retiradas do catálogo da <a href="https://www.patinhascarentes.org/gatos-para-adocao">Ong Patinhas Carentes.</a></p>
    </div>
        </AdoptContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};

      {/* <CatPage 
        showPage={showPage}
        setShowPage={setShowPage}
        cat={modelCat}/> */}
