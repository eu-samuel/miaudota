import styled from "styled-components";

export const CatsContainer = styled.section`
    
    width: 85vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2vh;

    .main-container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 3vw;
        align-items: center;
    }

    #back{
        font-size: 20px;
        font-weight: 700;
        position: relative;
        top: -1vh;
        right: 39.5vw;
        cursor: pointer;
        :hover{text-decoration: underline}
    }

    #credits{
        position: relative;
        top: -1vh;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
        
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6vh;


    .main-container{
        width: 100vw;
        display: flex;
        flex-direction: column;
        gap: 4vh;
    }

    #credits{
        width: 70vw;
        padding-bottom: 3vh;}

    }
`