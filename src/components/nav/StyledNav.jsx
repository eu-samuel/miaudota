import styled from "styled-components";

export const StyledNav = styled.section`

    display: none;

@media only screen and (min-width : 320px) and (max-width : 480px) {
    
    display: flex;

    .nav-on{
        position: absolute;
        top: 6vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: white;
        text-align: center;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(#2a215a, #0c504d);
        z-index: 1;
        transition: 200ms;
          
    .social-media{
        display: flex;
        padding: 4vh 0 2vh 0;
        gap: 1vw;
        height: 2vh;
        align-items: center;
        justify-content: center;
        #icon{
            width: 15%;
            cursor: pointer;
            :active{transform: scale(0.95);}
        }
    }

    span{
        position: relative;
        top: 3vh;
        line-height: 3vh;
        font-size: 12px;
    }

    a{
        color: white;
        transition: 150ms;
        :hover{color: lightcoral;}
    }

    h2{
        font-family: "Poppins", "Montserrat", sans-serif;
        font-size: 20px;
        margin-top: 5vh;
    }
    
    img{
        width: 20%;
        padding-left: .5vw;
    }


    button{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Montserrat";
        font-weight: 700;
        gap: 6vw;
        background-color: white;
        color: white;
        border: none;
        padding: .5rem 1rem;
        width: 60vw;
        height: 8vh;
        text-align: center;
        color: black;
        box-shadow: 3px 3px 8px 3px rgba(23, 17, 23, 0.45); 
        font-size: 20px;
        border-radius: 8px;
        cursor: pointer;
        transition: 150ms;
        :active{transform: scale(0.98);}
    }

    li{
        list-style: none;
        position: relative;
        left: -.3vw;
        margin-top: 5vh;
        margin-left: 2vw;
        display: flex;
        flex-direction: column;
    }

    }

    .nav-off{
        position: absolute;
        top: 6vh;
        width: 100vw;
        height: 0vh;
        z-index: 1;
        transition: 200ms;

    .social-media, span, h2, button, li{display: none;}
    }


    }
    
`