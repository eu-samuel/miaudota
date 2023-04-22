import { Header } from "../../components/header/header";
import React from "react";
import { AboutContainer } from "./style";
import { DefaultPageStyle } from "../../assets/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import Post1 from '../../assets/UI/Post1';
import Post2 from '../../assets/UI/Post2';
import Post3 from '../../assets/UI/Post3';

export const AboutPage = () => {
  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <AboutContainer>
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
        </AboutContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
