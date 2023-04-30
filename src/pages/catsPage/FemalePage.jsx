import React from "react";
import { Header } from "../../components/header/header";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { CatCard } from "../../components/UI/Cards/CatCard";
import { CatPage } from "./catpage";
import { AdoptContainer } from "../adoptpage/style";
import { useNavigate } from "react-router-dom";

export const FemalePage = (props) => {
  const [modelCat, setModelCat, showCat, setShowCat, backToAdopt] = props.content
  const femaleCats = props.CatsList.filter(cat => cat.genre === "female")
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
    color="#e32d91"
    />}


    <div className={showCat === false ? "page-on" : "page-off"}>
    <div className="cats-container"> 
    {femaleCats.map((cat, index) => {
      return(
        <CatCard
        key={index}
        color="#e32d91"
        hover="#c42682"
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
