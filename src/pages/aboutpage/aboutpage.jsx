import { Header } from "../../components/header/header";
import React from "react";
import { AboutContainer } from "./style";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const AboutPage = () => {
  return (
    <ChakraProvider>
      <Header/>
      <DefaultPageStyle>
        <AboutContainer>
          <div className="main">
        <div className="article">
        <h1>O que é a MiauDota?</h1>
          <article>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta corrupti, facere animi recusandae ut, magni porro quam aliquid optio libero nulla asperiores architecto nihil eos sit exercitationem unde, ex iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dicta voluptatum, perspiciatis est quibusdam odit iste provident ipsam, suscipit laborum quos possimus totam labore aspernatur quas mollitia porro et nostrum!
          </article>
          
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At mollitia possimus illum reiciendis assumenda ad facere recusandae sit similique velit accusantium iure alias cupiditate magnam eius veniam, doloribus ducimus quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus harum, quo consectetur facilis illo aut, porro et voluptate cum sequi itaque culpa quisquam rerum eos quaerat eaque non, odit expedita.
            </article>

            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis aperiam veniam inventore laboriosam dolores! Modi, eligendi rem consectetur magnam molestias beatae voluptate similique itaque facilis eius dolor ipsum!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit delectus sunt molestias qui odio. Soluta quam voluptates blanditiis! Architecto dolorum perferendis cupiditate animi consectetur. Officiis iste et doloribus tempora possimus!</article>
          </div>
          <div className="main-img">
          <img id ="collage" src="https://i.ibb.co/G2qXWDH/collage.png"/>
        <p>A MiauDota funciona através de diversas pessoas voluntárias, que fornecem lares temporários aos animais.</p>
        </div>
        </div>
        <div className="stats">
        </div>
        </AboutContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
