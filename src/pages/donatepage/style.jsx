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
`