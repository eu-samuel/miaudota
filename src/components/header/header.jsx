import { StyledHeader } from "../../styles/generalStyles"
import { HeaderButton } from "../../styles/secondaryStyles"
import { useState } from "react"
import DarkModeButton from "../../components/UI/DarkButton"
import { useColorModeValue } from '@chakra-ui/react';
import { Balloon } from "./balloon";
import { goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export const Header = () => {

    const navigate = useNavigate()
    const [balloon, setBalloon] = useState(false)
     
    return(
        <StyledHeader>
            <img onClick={() => goToHome(navigate)} src={useColorModeValue("https://i.ibb.co/8gvTTxF/logo.png", "https://i.ibb.co/xMMfcCh/logo2.png")} id="logo"/> 
            <span>Adoção de gatos no Estado do Rio de Janeiro.</span>
            
            <HeaderButton 
            color={useColorModeValue('#164a64', 'gray')}
            textcolor={useColorModeValue('black', 'white.800')}
            bg={useColorModeValue('white', 'gray.800')} 
            bordercolor={useColorModeValue('#164a64', 'gray')} 
            onClick={() => setBalloon(!balloon)}>
                Login
                </HeaderButton>
                <Balloon
                balloon={balloon}/>
            <div className="dark-btn">
                <DarkModeButton/>
                </div>
        </StyledHeader>
    )
}