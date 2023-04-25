import { Header } from "../../components/header/header";
import React from "react";
import { HomeContainer } from "./style";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import Post1 from '../../components/UI/Posts/Post1';
import Post2 from '../../components/UI/Posts/Post2';
import Post3 from '../../components/UI/Posts/Post3';
import { useNavigate } from "react-router-dom";

export const HomePage = () => {

  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <HomeContainer>
            <div className="posts">
                <div id="post">
                    <Post1/>
                </div>
                <div id="post">
                    <Post2 />
                </div>
                <div id="post">
                  <Post3/>
                </div>
          </div>
        </HomeContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
