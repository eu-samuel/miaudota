import styled from "styled-components";

export const FaqContainer = styled.div`

    width: 84vw;  
    display:flex;
    flex-direction: column;
    margin: 3vh 0 0 5vw;
    gap: 5vh;
    justify-content: center;
    
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
`