import { Header } from "../../components/header/header";
import React from "react";
import { ContactContainer } from "./style";
import Contact from "../../components/UI/Forms/ContactForm";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const ContactPage = () => {
  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <ContactContainer>
          <Contact/>
        </ContactContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
