import { Header } from "../../components/header/header";
import React from "react";
import { HomeContainer } from "./style";
import { DefaultPageStyle } from "../../assets/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import Post1 from '../../assets/UI/Posts/Post1';
import Post2 from '../../assets/UI/Posts/Post2';
import Post3 from '../../assets/UI/Posts/Post3';
import { useNavigate } from "react-router-dom";
import { goToAbout } from "../../routes/coordinator";

export const HomePage = () => {

  const navigate = useNavigate()

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <HomeContainer>
            <div className="posts">
                <div id="post"  onClick={() => goToAbout(navigate)}>
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
