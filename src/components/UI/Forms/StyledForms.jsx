import styled from "styled-components"

export const HeaderForm = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    position: relative;
    top: -1vh;
    padding-top: 5vh;

    #logo{
        width: 10vw;
    }

    label{
        display: flex;
        font-size: 15px;
        gap: 1vw;
        font-weight: 600;
    }

    .buttons, .reg-buttons{
        display: flex;
        align-items: center;
        gap: 1vw;
    }

    p{
        cursor: pointer;
        font-weight: 700;
        :hover{
            text-decoration: underline;
        }
    }
    
    .newsletter{
        display: flex;
        flex-direction: row;
        align-items: center;

        span{
            position: relative;
            top: -1.3vh;
            left: .5vw;
        }
    }

    button{
        border-radius: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
        :active{
            transform: scale(0.98);
        }
    }

    .reg-buttons{
        position: relative;
        top: -1.5vh;
    }
`

export const ContactForm = styled.form`
    
    .box{
        margin-top: 12vh;
        display: flex;
        flex-direction: row;
        border: solid 1px #E2E1E1;
        width: 80vw;
        max-height: 65vh;
        #catcontact{
            position: absolute;
            max-width: 23vw;
           left: 54vw;
        }
        select{
            width: 22vw;
            border: solid 1px #cecece;
            padding-left: .5vw;
        }
    }
`
