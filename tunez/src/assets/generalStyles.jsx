import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 81vw;
    position: absolute;
    top: 0vh;
    display: flex;
    align-items: center;
    gap: 16.5vw;
    left: 15vw;
    height: 5vh;
    padding-left: 8vh;
    padding-top: 2vh;
    box-shadow: 0px 1px 0px 0px rgba(191, 188, 188, 0.45); 
    #logo, span, button{
        position: relative;
    }
    
    #logo{
        top: -1.1vh;
        width: 20%;
    }
 
    span{
        left: -17vw;
        top: .8vh;
        font-size: 13px;
        font-family: "Poppins", 'Montserrat', sans-serif;
        font-weight: 700;
        }

    button{
        top: -.8vh;
    }
`

export const DefaultPageStyle = styled.section`

    position: relative;
    top: 10vh;
    max-height: 90vh;

` 