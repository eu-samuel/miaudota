import styled from "styled-components";

export const AdoptContainer = styled.div`

    width: 85vw;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .page-on{
        position: relative;
        top: 1vh;
        opacity: 1;
        transition: 200ms;
    }

    .page-off{
        opacity: 0;
        transition: 200ms;
    }

    h1{
        font-family: "Montserrat", sans-serif;
        font-size: 2rem;
        font-weight: 700;
    }

    #description{
        width: 46vw;
        text-align: justify;
        font-size: 15px;
    }

    
    #credits{
        text-align: center;
        margin-top: 8vh;
        font-size: 14px;
    }

    .cat-genres{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .genre-select{
        padding-top: 8vh;
        width: 90vw;
        gap: 15vw;
        align-items: center;
        display: flex;
        justify-content: center;
        img{
            width: 25%;
            cursor: pointer;
            :active{
                transform: scale(0.98);
            }
        }
    }

    #back{
        font-weight: 700;
        cursor: pointer;
        :hover{text-decoration: underline}
        position: relative;
        right: 38.5vw;
        top: 2vh;
    }

    .cats-container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2.5vw;
        padding-top: 3vh;
        align-items: center;
        justify-content: center;
    }

`
