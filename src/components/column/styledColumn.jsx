import styled from "styled-components";

export const StyledColumn = styled.section`

    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
    width: 15vw;
    min-height: 100vh;
    background: linear-gradient(#2a215a, #0c504d);

    .social-media{
        display: flex;
        padding: 5vh 0 2vh 0;
        gap: 1vw;
        height: 2vh;
        align-items: center;
        justify-content: center;
        #icon{
            width: 15%;
            cursor: pointer;
            :active{
                transform: scale(0.95);
            }
        }
    }

    span{
        position: relative;
        top: 3vh;
        font-size: 12px;
    }

    a{
        color: white;
        transition: 150ms;
        :hover{
            color: lightcoral;
        }
    }
    h2{
        font-family: "Poppins", "Montserrat", sans-serif;
        font-size: 20px;
        margin-top: 2vh;
    }

`

export const StyledList = styled.ul`
    
    list-style: none;
    position: relative;
    left: -.3vw;
    margin-top: 7vh;
    display: flex;
    flex-direction: column;
    gap: 4.5vh;

    img{
        width: 23%;
        padding-left: .5vw;
    }
    
    button{
        display: flex;
        align-items: center;
        font-family: "Montserrat";
        font-weight: 700;
        gap: 1vw;
        background-color: white;
        color: white;
        border: none;
        padding: .5rem 1rem;
        width: 14vw;
        height: 8vh;
        text-align: left;
        color: black;
        box-shadow: 3px 3px 8px 3px rgba(23, 17, 23, 0.45); 
        font-size: 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: 150ms;
        :hover{
            width: 18vw;
        }
        :active{
            transform: scale(0.98);
        }
    }


`