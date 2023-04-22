import { Header } from "../../components/header/header";
import React from "react";
import { FaqContainer } from "./style";
import { DefaultPageStyle } from "../../assets/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import Post1 from '../../assets/UI/Post1';
import Post2 from '../../assets/UI/Post2';
import Post3 from '../../assets/UI/Post3';

export const FaqPage = () => {
  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <FaqContainer>
            <div className="posts">
                <div id="post">
                    <Post1 />
                </div>
                <div id="post">
                    <Post2 />
                </div>
                <div id="post">
                  <Post3/>
                </div>
          </div>
        </FaqContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
