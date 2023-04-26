import styled from "styled-components";

export const StyledHeader = styled.header`
    max-width: 85vw;
    position: absolute;
    top: 0vh;
    display: flex;
    align-items: center;
    gap: 3.5vw;
    left: 15vw;
    height: 7vh;
    padding: 0 0 .5vh 6vw;
    box-shadow: 0px 1px 0px 0px rgba(191, 188, 188, 0.45); 

    #logo{
        width: 20%;
        transition: 200ms;
        cursor: pointer;
        :active{transform: scale(0.98);}
    }
 
    span{
        font-size: 13px;
        width: 19vw;
        margin-top: 3vh;
        position: relative;
        right: 4vw;
        font-family: "Poppins", 'Montserrat', sans-serif;
        font-weight: 700;
        }

        .dark-btn{
            position: relative;
            right: 2vw;
        }
`

export const DefaultPageStyle = styled.section`

    position: relative;
    top: 10vh;
    max-height: 90vh;

` 