import { Header } from "../../components/header/header";
import React from "react";
import { Container1 } from "./contents/content1/homecontent1";
import { Container2 } from "./contents/content2/homecontent2";
import { Container3 } from "./contents/content3/homecontent3";
import { Container4 } from "./contents/content4/homecontent4";
import { Container5 } from "./contents/content5/homecontent5";
import { DefaultPageStyle } from "../../assets/generalStyles";

export const HomePage = (props) => {
    return(
        <>
        <Header/>
        <DefaultPageStyle>
        {props.home === 1 && <Container1/>}
        {props.home === 2 && <Container2/>}
        {props.home === 3 && <Container3/>}
        {props.home === 4 && <Container4/>}
        {props.home === 5 && <Container5/>}
        </DefaultPageStyle>
        </>
    )
}