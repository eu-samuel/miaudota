import { Header } from "../../components/header/header";
import React from "react";
import { DonateContainer } from "./style";
import { DefaultPageStyle } from "../../assets/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const DonatePage = () => {

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <DonateContainer>
        </DonateContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
