import { Header } from "../../components/header/header";
import React from "react";
import { AdoptContainer } from "./style";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const AdoptPage = () => {

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <AdoptContainer>
        </AdoptContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
