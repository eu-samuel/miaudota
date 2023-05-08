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
            :active{transform: scale(0.98);}
        }
    }


    @media only screen and (min-width : 320px) and (max-width : 480px) {
    
        width: 100vw;
        position: relative;
        top: 10vh;
    
        #credits{
            text-align: center;
            margin-top: 6vh;
            width: 70vw;
            font-size: 14px;
        }


        h1{
            font-size: 1.5rem;
            text-align: center;
        }

        #description{
            width: 80vw;
            text-align: justify;
            font-size: 15px;
            margin-top: 2vh;
        }


        .genre-select{
            padding-top: 5vh;
            width: 90vw;
            gap: 15vw;
            img{
                width: 40%;
                cursor: pointer;
                :active{transform: scale(0.98);}
            }
        }

    }
`
