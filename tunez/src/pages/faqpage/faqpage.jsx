import { Header } from "../../components/header/header";
import React from "react";
import { FaqContainer } from "./style";
import { DefaultPageStyle } from "../../assets/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const FaqPage = () => {
  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <FaqContainer>
        </FaqContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
