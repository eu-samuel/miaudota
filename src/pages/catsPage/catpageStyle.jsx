import styled from "styled-components";

export const CatPageStyle = styled.div`

    width: 100vw;
    display: flex;

    .cat-container{
        margin-top: 2vh;
        width: 85vw;
        height: 75vh;
        display: flex;
        flex-direction: column;
        color:${props => props.textcolor};
        font-family: "Montserrat", sans-serif;
    }

    #name{
        text-align: center;
        position: relative;
        top: -1vh;
        color: ${props => props.color};
        font-size: 4vw; 
        font-weight: 700;
    }
    
    .cat-info{
        padding-left: 4vw;
        display: flex;
        gap: 3vw;
        img{
        width: 26%;
        border: solid 10px ${props => props.color};
        } 
        p{font-size: 15px;}
    }

    #close{
        position: absolute;
        top: 2vh;
        cursor: pointer;
        left: 78vw;
        color:  ${props => props.color};
        width: 2.5vw;
        text-align: center;
        font-size: 1.5vw;
        :active{transform: scale(0.9);}
    }

    article{
        padding: 3vh 0 3vh 0;
        width: 36vw;
        display: flex;
        text-align: justify;
        flex-direction: column;
        gap: 2vh;
    }

    #adoption{
        width: 34vw;
        padding-left: 2vw;
        text-align: center;
        color: ${props => props.color};
        font-weight: 700;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
    
    .cat-container{
        margin-top: 0;
        gap: 1vh;
        width: 95vw;
        height: 100vh;
    }

    #name{
        top: 0;
        margin-top: 6vh;
        font-size: 8vw; 
    }
    
    .cat-info{
        padding-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3vw;
        img{width: 90%;}
        p{font-size: 16px;}

    }

    #close{
        top: 4vh;
        width: 8vw;
        font-size: 3.5vw;
    }

    article{
        padding: 0;
        width: 85vw;
        display: flex;
        text-align: justify;
        flex-direction: column;
        gap: 2vh;
    }

    #adoption{
        width: 85vw;
        padding-left: 0;
        margin-top: 2vh;
        text-align: center;
        font-size: 15px;
        padding-bottom: 4vh;
    }


    }

`