import { Header } from "../../components/header/header";
import React, {useState} from "react";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { AdoptContainer} from "./style";
import { GenreContainer } from "./containers/genrecontainer";
import { ChakraProvider } from "@chakra-ui/react";
import { MaleContainer } from "./containers/malecontainer";
import { FemaleContainer } from "./containers/femalecontainer";
import { CatPage } from "../catpage/adoptpage";

export const AdoptPage = () => {

  const [page, setPage] = useState(0)
  const [modelCat, setModelCat] = useState([])

  const adoptCat = (item) => {
    setShowPage(!showPage)
    setModelCat(item)
  }

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>

        <AdoptContainer>
       {page === 0 && <GenreContainer setPage={setPage}/>}
       {page === 1 && <MaleContainer setPage={setPage} setModelCat={setModelCat}/>}
       {page === 2 && <FemaleContainer setPage={setPage} setModelCat={setModelCat}/>}
        </AdoptContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};

      {/* <CatPage 
        showPage={showPage}
        setShowPage={setShowPage}
        cat={modelCat}/> */}
