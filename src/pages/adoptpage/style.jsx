import styled from "styled-components";

export const AdoptContainer = styled.div`

    width: 85vw;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-family: "Montserrat", sans-serif;
        font-size: 2rem;
        font-weight: 700;
    }
    
    .cards-container{
        width: 75vw;
        margin-top: 5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8vh;
    }

    .male-cats, .female-cats{
        display: flex;
        gap: 3vw;
    }

    .cat-card{
        display: flex;
        align-items: center;
        flex-direction: column;
        border: solid 1px black;   
        width: 10vw;
        height: 20vh;
        img{
            width: 8vw;
        }
    }
`