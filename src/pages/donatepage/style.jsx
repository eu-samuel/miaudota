import styled from "styled-components";

export const DonateContainer = styled.div`

    width: 85vw;  
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vh;
        
    h1{
        font-family: "Montserrat", sans-serif;
        font-size: 50px;
        font-weight: 700;
    }

    
    .box{   
        position: relative;
        font-size: 15px;
        top: 3vh;
        width: 35vw;
        display: flex;
        padding-top: 3vh;
        text-align: center;
        flex-direction: column;
        gap: 1vw;
        height: 36vh;
        background-color: #eeeeee;
        h1{
            font-weight: 600;
            font-size: 18px;
        }
        h2{font-weight: 600}
    }
    
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-left: 10vw;
        gap: 5vw;
        margin-top: 4vh;
    }

    .banks{
        display: flex;
        align-items: center;
        max-width: 50vw;
        padding: 0 2vw 0 2vw;
        justify-content: center;
        gap: 4vw;
        #bank-data{
            text-align: left;
        }
    }
    #cat-donate{
        position: relative;
        top: -4vh;
        width: 70%;
    }

    #postal{
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

    #text{
        text-align: justify;
        width: 60%;
        line-height: 3vh;
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
       
        width: 95vw;  
        margin-top: 5vh;
        justify-content: center;
        gap: 3vh;
        
    h1{
        font-size: 40px;
        text-align: center;
    }
    
    .box{   
        top: -2vh;
        width: 85vw;
        gap: 2vh;
        height: 50vh;
    }

    .container{
        display: flex;
        flex-direction: column;
        margin-left: 4.5vw;
        gap: 5vw;
        margin-top: 2vh;
    }

    .banks{
        display: flex;
        flex-direction: column;
        width: 90vw;
        margin: 0 auto;
        gap: 4vw;
        #bank-data{
            text-align: center;
            font-size: 15px;
        }
        p{width: 50vw;}
    }

    #cat-donate{
        top: -2vh;
        margin: 0 auto;
        width: 65%;
    }

    #postal{
        display: flex;
        flex-direction: column;
        gap: 1vh;
        font-size: 15px;
    }

    #text{
        text-align: justify;
        font-size: 15px;
        width: 90%;
    }
       
       }
`