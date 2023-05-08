import styled from "styled-components";

export const AboutContainer = styled.div`

    width: 85vw;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3vh 3vw 0 3vw;
    
    .main{
        display: flex;
        position: relative;
        gap: 2vw;
    }

    .main-img{
        position: relative;
        top: 3vh;
        img{max-width: 40vw;}
        p{
            margin-left: 3.4vw;
            font-size: 14px;
        }
    }

    .article{
        display: flex;
        flex-direction: column;
        gap: 2vh;
        margin-top: 4vh;
    }

    article{max-width: 34vw;}

    h1{
        font-weight: 700;
        font-size: 40px;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
        
        width: 100vw;    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3vh 3vw 8vh 3vw;
    
    .main{
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        gap: 2vw;
    }

    .main-img{
        position: relative;
        top: 3vh;
        img{
            position: relative;
            top: -109vh;
            max-width: 90vw;}
        p{
            margin-left: 0;
            font-size: 12px;
            position: relative;
            top: -107vh;
        }
    }

    .article{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2vh;
        margin-top: 2vh;
    }

    article{
        position: relative;
        text-align: justify;
        top: 38vh;
        right: 2vw;
        max-width: 80vw;
    }
    h1{text-align: center;}
    
    }

`