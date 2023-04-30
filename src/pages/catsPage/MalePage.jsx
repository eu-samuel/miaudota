import React from "react";
import { Header } from "../../components/header/header";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { CatCard } from "../../components/UI/Cards/CatCard";
import { CatPage } from "./catpage";
import { AdoptContainer } from "../adoptpage/style";
import { useNavigate } from "react-router-dom";

export const MalePage = (props) => {
  const [modelCat, setModelCat, showCat, setShowCat, backToAdopt] = props.content
  const maleCats = props.CatsList.filter(cat => cat.genre === "male")
  const navigate = useNavigate()

  return (
    <ChakraProvider>
    <Header/>
    <DefaultPageStyle>
      <AdoptContainer>
      {showCat == false && <p id="back" onClick={() => backToAdopt(navigate)}>Voltar</p>}
    {showCat && 
    <CatPage 
    cat={modelCat}
    showCat={showCat}
    setShowCat={setShowCat}
    color="#0099CC"
    />}


    <div className={showCat === false ? "page-on" : "page-off"}>
    <div className="cats-container"> 
    {maleCats.map((cat, index) => {
      return(
        <CatCard
        key={index}
        color="#0099CC"
        hover="#017095"
        content={props.content}
        cat={cat}
        />
      )
    })}
    </div>
    </div>

    </AdoptContainer>
    </DefaultPageStyle>
    </ChakraProvider>
  );
};
