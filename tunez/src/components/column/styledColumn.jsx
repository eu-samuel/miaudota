import styled from "styled-components";

export const StyledColumn = styled.section`

    display: flex;
    flex-direction: column;
    color: white;
    text-align: center;
    width: 15vw;
    min-height: 100vh;
    box-shadow: 0px 0px 100px 0px rgba(96, 68, 97, 0.45); 
    background: #834d9b;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #d04ed6, #834d9b);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #d04ed6, #834d9b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .social-media{
        display: flex;
        padding: 5vh 0 2vh 0;
        gap: 1vw;
        height: 2vh;
        align-items: center;
        justify-content: center;
        #icon{
            width: 16%;
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
        position: relative;
        top: 2vh;
    }

    p{
        margin-top: 6vh;
    }

`

export const StyledList = styled.ul`
    
    list-style: none;
    position: relative;
    left: -3vw;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    gap: 5vh;

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
        width: 15vw;
        height: 8vh;
        text-align: left;
        color: black;
        box-shadow: 3px 3px 8px 3px rgba(96, 68, 97, 0.45); 
        font-size: 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: 150ms;
        :hover{
            width: 19vw;
        }
    }


`