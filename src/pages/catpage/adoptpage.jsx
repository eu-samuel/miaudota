import React from "react";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const CatPage = (props) => {


  const CatContainer = () => {
    return (
      <div className={props.ShowPage ? "cat-on" : "cat-off"}>
      <img src={props.cat.image}/>
      </div>
    )
  }

  return (
    <ChakraProvider>
      <DefaultPageStyle>
     {props.showPage === true && <CatContainer/>}
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
