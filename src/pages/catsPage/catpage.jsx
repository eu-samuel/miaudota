import React from "react";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import { CatPageStyle } from "./catpageStyle";
import { ContactContainer } from './../contactpage/style';

export const CatPage = (props) => {
  return (
    <ChakraProvider>
      <DefaultPageStyle>
        <CatPageStyle
        color={props.color}>
          <div className={props.showCat ? "modal-on" : "modal-off"}>
              <p id="close" onClick={() => props.setShowCat(false)}>x</p>
            <p id="name">{props.cat.name}</p>
            <div className="cat-info">
              <img src={props.cat.image2} alt={props.cat.name} />
              <div>
                <p id="age">Idade: {props.cat.age}</p>
                <p id="story">{props.cat.story}</p>
                <p>Quer adotar {props.cat.genre === "male" ? "o" : "a"} {props.cat.name}? Nos mande uma mensagem no Whatsapp 
                pelo número (21) 99999-9999. Não aceitamos ligações.</p>
          
              </div>
            </div>
          </div>
        </CatPageStyle>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
