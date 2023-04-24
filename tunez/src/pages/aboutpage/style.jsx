import styled from "styled-components";

export const AboutContainer = styled.div`

    width: 84vw;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .main{
        display: flex;
        gap: 2vw;
    }

    .main-img{
        position: relative;
        top: 8vh;
        img{
            max-width: 40vw;
        }
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

    article{
        max-width: 34vw;
    }
    h1{
        font-weight: 700;
        font-size: 40px;
    }

    .stats{
        position: relative;
        top: -4vh;
        text-align: center;
    }

`