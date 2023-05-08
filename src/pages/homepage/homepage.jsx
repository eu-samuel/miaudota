import { Header } from "../../components/header/header";
import React from "react";
import { HomeContainer } from "./style";
import { DefaultPageStyle } from "../../components/SecondaryStyles";
import { Posts } from "../../components/Posts";
import { ChakraProvider } from "@chakra-ui/react";
import HomePost from './../../components/Cards/HomePost';

export const HomePage = () => {

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <HomeContainer>
            <div className="posts">
              {Posts.map((post, key) => {
                return(
                  <>
                <div id="post">
                  <HomePost
                  key={key}
                  image={post.image}
                  tag={post.tag}
                  text={post.text}
                  route={post.route}
                  title={post.title}
                  />
                </div>
                  </>
                )
              })}

          </div>
        </HomeContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
