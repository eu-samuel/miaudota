import styled from "styled-components";

export const StyledInput = styled.input`
    
    background-color: white;
    color: black;
    border: solid .5px ${props => props.bordercolor};
    border-radius: 3px;
    max-width: 12vw;
    max-height: 3vh;
    font-size: 14px;
    padding-left: .5vw;
`

export const HeaderButton = styled.button`
    
    font-family: 'Montserrat', Helvetica, sans-serif;
    background-color: ${props => props.bg};
    color: ${props => props.textcolor};
    font-size: 14px;
    width: 7vw;
    height: 2vh;
    padding: 1rem .5rem;
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
    :active{
        transform: scale(0.95);
    }

`

export const FormButton = styled.button`
    
    font-family: 'Montserrat', Helvetica, sans-serif;
    background-color: ${props => props.bg};
    color: ${props => props.textcolor};
    font-size: 14px;
    width: 7vw;
    height: 2vh;
    padding: 1rem .5rem;
    font-weight: 600;
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
    :active{
        transform: scale(0.95);
    }

`

export const StyledBalloon = styled.div`
    
    .balloon-on {
        margin: 0 auto; 
        border: solid 1px  ${props => props.bordercolor};
        background: ${props => props.bg};
        color: ${props => props.textcolor};
        font-family: 'open sans';
        font-size: 0.85em;
        line-height: 1.6em;  
        border-radius: 6px;
        max-width:20vw;
        min-height: 40vh;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 59vw;
        top: 7vh;
        z-index: 1;
        transition: 200ms;
    }

    .balloon-off{
        margin: 0 auto; 
        background: white;
        font-family: 'open sans';
        font-size: 0.85em;
        line-height: 1.6em;  
        border-radius: 6px;
        max-width: 20vw;
        height: 0vh;
        color: white;
        display: flex;
        flex-direction: column;
        opacity: 0;
        position: absolute;
        left: 59vw;
        top: 7vh;
        z-index: 1;
        transition: 200ms;
    }
`

export const StyledCard = styled.div`

    margin-top: 2vh;
    background: ${props => props.color};
    border-radius: 10px;
    max-width: 23vw;
    min-height: 65vh;
    box-shadow: 10px 20px 30px 10px ${props=> props.boxcolor};


    img{
        border-radius: 5px;
    }
    
    .container{
        margin-top: 3vh;
        display: flex;
        flex-direction: column;
        gap: .8vh;
        padding: 1vh 2vw 0 2vw;
    }

    #tag{
        font-weight: 700;
        font-size: 14px;
        letter-spacing: .1vh;
        color: #ce2e91;
    }
    
    #title{
        font-weight: 700;
        font-size: 24px;
    }

    #text{
        color: ${props => props.textcolor};
        width: 20vw;
    }
`

export const StyledForm = styled.form`
    
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

    .buttons{
        display: flex;
        align-items: center;
        gap: 1vw;
        position: relative;
        top: -1vh;
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

    #btn{
        border-radius: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 14px;
        :active{
            transform: scale(0.98);
        }
    }
`
