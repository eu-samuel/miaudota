import styled from "styled-components";

export const DonateContainer = styled.div`

    width: 84vw;  
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
        gap: 2vw;
    }

    .box{
        width: 25vw;
        display: flex;
        padding-top: 4vh;
        text-align: center;
        flex-direction: column;
        gap: 1vw;
        height: 53vh;
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
        width: 80%;
    }

    #postal{
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    #text{
        text-align: justify;
        width: 60%;
        line-height: 3vh;
    }
`