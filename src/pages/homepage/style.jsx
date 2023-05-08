import styled from "styled-components";

export const HomeContainer = styled.div`

    width: 85vw;    
    display: flex;
    align-items: center;
    justify-content: center;
    
    .posts{
        margin-top: 5vh;
        max-width: 80vw;
        gap: 2vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    span{
        text-align: right;
        font-weight: 700;
        color: #d72f8b;
        cursor: pointer;
        :hover{text-decoration: underline}
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
     
        width: 100vw;    
        display: flex;
        align-items: flex-start;
    
    .posts{
        margin-top: 5vh;
        width: 95vw;
        gap: 2vw;
        display: flex;
        flex-direction: column;
    }
        
    }
`