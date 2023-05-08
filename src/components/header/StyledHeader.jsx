import styled from "styled-components"

export const StyledHeader = styled.header`
    width: 85vw;
    position: absolute;
    top: 0vh;
    display: flex;
    align-items: center;
    gap: 3.5vw;
    left: 15vw;
    height: 7vh;
    padding: 0 0 .5vh 6vw;
    box-shadow: 0px 1px 0px 0px rgba(191, 188, 188, 0.45); 

    #nav-btn{
        display: none;
    }

    #logo{
        width: 20%;
        transition: 200ms;
        cursor: pointer;
        :active{transform: scale(0.98);}
    }
 
    span{
        font-size: 13px;
        width: 19vw;
        margin-top: 3vh;
        position: relative;
        right: 4vw;
        font-family: "Poppins", 'Montserrat', sans-serif;
        font-weight: 700;
        }

        .dark-btn{
            position: relative;
            right: 2vw;
        }


    @media only screen and (min-width : 320px) and (max-width : 480px) {
            width: 100vw;
            gap: 2vw;
            top: 0;
            left: 0;
            height: 7vh;
            padding: 0 0 0 0;
            justify-content: center;

            #nav-btn{
                display: flex;
                margin-left: 1vw;
                font-size: 6vw;
                cursor: pointer;
            }

            span, .dark-btn{
                display: none;
            }

            #logo{
                width: 45vw;
                position: relative;
                top: -.3vh;
                left: 5vw;
            }

        }
`


export const HeaderButton = styled.button`
    
    font-family: 'Montserrat', Helvetica, sans-serif;
    background-color: ${props => props.bg};
    color: ${props => props.textcolor};
    font-size: 14px;
    width: 9vw;
    height: 2vh;
    padding: 1rem .5rem;
    position: relative;
    top: .2vh;
    font-weight: 600;
    margin-left: 19.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: solid 1px ${props => props.bordercolor};
    border-radius: 3px;
    box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.3);
    transition: 150ms;

    cursor: pointer;
    :hover{
        background-color: ${props => props.color};
        color: white;
    }
    :active{transform: scale(0.95);}

    @media only screen and (min-width : 320px) and (max-width : 480px) {
        font-size: 14px;
        width: 30vw;
        height: 4vh;
        padding: .7rem .3rem;
        top: -.3vh;
        margin-left: 4vw;
        }

`