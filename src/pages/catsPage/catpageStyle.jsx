import styled from "styled-components";

export const CatPageStyle = styled.div`

    width: 100vw;
    display: flex;
    justify-content: center;


    .modal-on{
        position: absolute;
        top: -10vh;
        width: 85vw;
        padding: 2vh 2vw 2vh 2vw;
        height: 75vh;
        display: flex;
        flex-direction: column;
        opacity: 1;
        z-index: 1;
        transition: 200ms;
    }

    .modal-off{
        position: absolute;
        top: 10vh;
        width: 85vw;
        padding: 2vh 2vw 2vh 2.5vw;
        height: 75vh;
        display: flex;
        opacity: 0;
        transform: 200ms;
    }

    #name{
        font-family: "Montserrat", sans-serif;
        text-align: center;
        position: relative;
        color: ${props => props.color};
        top: -2vh;
        font-size: 4vw; 
        font-weight: 700;
    }
    
    .cat-info{
        padding-left: 4vw;
        display: flex;
        gap: 3vw;
        img{
        width: 31%;
    }

    }
    #close{
        position: absolute;
        top: -1vh;
        font-family: "Montserrat", sans-serif;
        cursor: pointer;
        left: 78vw;
        z-index: 1;
        font-weight: 350;
        color: ${props => props.color};
        font-size: 3vw;
        :active{
            transform: scale(0.85);
        }
    }
`