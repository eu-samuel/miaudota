import styled from "styled-components"

export const ContactForm = styled.form`

z-index: 1;
 .resources{
     display: flex;
     #text{
         position: relative;
         top: -1vh;
         width: 20vw;
    }
}
 #icon{
     display: flex;
     position: relative;
     left: -3.2vw;
     gap: 1vw;
     color:${
        props => props.color
    }
    ;
}
 .form{
     position: relative;
     top: -10vh;
     left: 4vh;
     #textarea, label{
        font-size: 14px;
    }
}
 select{
     width: 22vw;
     font-size: 14px;
     border: solid 1px #cecece;
     padding-left: .5vw;
}
 @media only screen and (min-width : 320px) and (max-width : 480px) {
     .resources{
         width: 100vw;
         display: flex;
         flex-direction: column;
         text-align: center;
         align-items: center;
         gap: 0;
    }
     .form{
        left: 3vh;
         top: -12vh;
         #area, label {
            width: 80vw;
             font-size: 15px;
        }
    }
     #text {
        display: none;
    }
     #icon {
        top: -1vh;
    }
     #mail {
        position: relative;
         top: -.5vh;
    }
     textarea {
        width: 80vw;
         height: 15vh;
    }
     select {
        width: 80vw;
         font-size: 15px;
    }
}
 ` 