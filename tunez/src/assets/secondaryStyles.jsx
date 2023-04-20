import styled from "styled-components";

export const StyledInput = styled.input`
    
    background-color: white;
    color: black;
    border: solid .5px #a19fa1;
    border-radius: 6px;
    width: 6vw;
    height: 2vh;
    font-size: 15px;
    padding-left: 1vw;
`

export const StyledButton = styled.button`
    
    font-family: 'Montserrat', Helvetica, sans-serif;
    background-color: white;
    color: black;
    font-size: 14px;
    width: 7vw;
    height: 2vh;
    padding: 1rem .5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: solid 1px ${props => props.color};
    border-radius: 3px;
    box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.3);
    transition: 150ms;

    cursor: pointer;
    :hover{
        background-color: ${props => props.color};
        color: white;
    }
    :active{
        transform: scale(0.95);
    }

`