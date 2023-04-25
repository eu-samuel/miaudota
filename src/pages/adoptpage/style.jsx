import styled from "styled-components";

export const AdoptContainer = styled.div`

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

`