import styled from "styled-components";

export const DefaultPageStyle = styled.section`

    position: relative;
    top: 10vh;
    max-height: 90vh;   

    #credits{
        text-align: center;
        margin-top: 4vh;
        font-size: 14px;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
        max-height: 300vh;
        display: flex;
        top: 5vh;
        padding-bottom: 5vh;
    }
` 

export const StyledInput = styled.input`
    
    background-color: white;
    color: black;
    border: solid .5px #d6d5d5;
    border-radius: 3px;
    width: 14vw;
    height: 4vh;
    font-size: 14px;
    padding-left: .5vw;
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
        width: 30vw;
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 52.5vw;
        top: 7vh;
        z-index: 10;
        transition: 200ms;
    }

    .balloon-off{
        margin: 0 auto; 
        background: white;
        font-family: 'open sans';
        font-size: 0.85em;
        line-height: 1.6em;  
        border-radius: 6px;
        width: 30vw;
        height: 0vh;
        color: white;
        display: flex;
        visibility: hidden;
        flex-direction: column;
        opacity: 0;
        position: absolute;
        left: 52.5vw;
        top: 7vh;
        z-index: 10;
        transition: 200ms;
    }

    .form{margin-top: 5vh;}

    .message-sent{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2vh;
        padding: 5vh 0 5vh 0;

    }

    img{
        width: 40%;
        padding-bottom: 2vh;
    }

    button{
        background-color: #e01f1f;
        padding: .5rem 1.5rem;
        font-weight: 700;
        border-radius: 16px;
        :active{transform: scale(0.95);}
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {

    .balloon-on {
        width: 100vw;
        max-height: 120vh;
        top: 6vh;
        left: 0vw;
        border-radius: 0;
    }

    .balloon-off{
        width: 100vw;
        height: 0vh;
        left: 0;
        border-radius: 0;
    }


    .message-sent{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2vh;
        padding: 5vh 0 5vh 0;

    }

    img{
        width: 50%;
        padding-bottom: 2vh;
    }

    button{
        background-color: #e01f1f;
        padding: .5rem 1.5rem;
        color: white;
        font-weight: 700;
        border-radius: 16px;
        :active{transform: scale(0.95);}
    }

    }
`

export const StyledPost = styled.div`

    margin-top: 2vh;
    background: ${props => props.color};
    border-radius: 10px;
    max-width: 23vw;
    min-height: 65vh;
    box-shadow: 10px 20px 30px 10px ${props=> props.boxcolor};

    img{border-radius: 5px;}
    
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

    @media only screen and (min-width : 320px) and (max-width : 480px) {

        max-width: 90vw;

        img{border-radius: 5px;}
    
        .container{
            margin-top: 2vh;
            display: flex;
            flex-direction: column;
            gap: 2vh;
            padding: .5vh 3vw 0 3vw;
        }

        #text{
            color: ${props => props.textcolor};
            width: 75vw;
        }

        span{
            position: relative;
            top: -1vh;
        }
    
    }
`
export const StyledCard = styled.div`

    .card{
        font-family: "Montserrat", sans-serif;
        display: flex;
        flex-direction: column;
        background-color: white;
        gap: 2vh;
        align-items: center;
        width: 14vw;
        height: 35vh;
        padding: .5rem;
        border: solid 1px #dad7d7;
        border-radius: 8px;
        img{
            width: 95%;
            border-radius: 4px;}
    }

    .sub-container{
        display: flex;
        text-align: left;
        align-items: center;
        margin-left: 2vw;
        height: 6vh;
        width: 100%;
        font-weight: 700;
        #name{
            font-size: 18px;
            width: 5vw;
            position: relative;
        }

        button{
            color: white;
            background: ${props => props.color};
            font-weight: 700;
            padding: .6rem 1.2rem;
            cursor: pointer;
            border-radius: 16px;
            margin-left: 1.5vw;
            :active{transform: scale(0.98)}
        }
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
        
        .card{
            gap: 2vh;
            width: 70vw;
            height: 43vh;
            padding: .5rem;
            img{width: 85%;}
        }

        .sub-container{
            margin-left: 6vw;
        #name{
            font-size: 18px;
            width: 25vw;
        }

        button{
            padding: .6rem 2.2rem;
            margin-left: 3.5vw;
        }
    }
    
    }

`