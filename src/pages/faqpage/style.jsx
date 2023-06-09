import styled from "styled-components";

export const FaqContainer = styled.div`

    width: 85vw;  
    display:flex;
    flex-direction: column;
    margin: 3vh 0 0 5vw;
    font-size: 15px;
    gap: 5vh;
    justify-content: center;
    padding-bottom: 5vh;
    
    h1{
            font-size: 40px;
            font-weight: 700;
        }

    #cat-doubts{
        max-width: 15%;

        position: absolute;
        top: -2vh;
        left: 70vw;
    }

    .faq{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 60vw;
        gap: 5vw;
        height: 50vh;

        span{
            font-weight: 700;
        }
    }

    .first-questions, .later-questions{
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    article{
        width: 30vw;
        margin-top: 1vh;
    }

    
    @media only screen and (min-width : 320px) and (max-width : 480px) {

        width: 100vw;  
        display:flex;
        flex-direction: column;
        margin: 0;
        margin-top: 5vh;
        font-size: 15px;
        gap: 2vh;
        justify-content: center;

    
    h1{text-align: center;}

    #cat-doubts{display: none;}

    .faq{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95vw;
        text-align: justify;
        gap: 5vw;
    }

    .first-questions, .later-questions{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        width: 80vw;
        padding-left: 2vw;
        gap: 2vh;
    }

    .later-questions{
        padding-bottom: 5vh;
    }

    article{
        width: 90vw;
        margin-top: 1vh;
    }

    
    }
`