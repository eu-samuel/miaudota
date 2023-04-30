import { Header } from "../../components/header/header";
import React from "react";
import { HomeContainer } from "./style";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { Posts } from "../../components/Posts";
import HomePost from "../../components/UI/Cards/HomePost";
import { ChakraProvider } from "@chakra-ui/react";

export const HomePage = () => {

  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <HomeContainer>
            <div className="posts">
              {Posts.map((post, index) => {
                return(
                  <>
                <div id="post">
                  <HomePost
                  key={index}
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
