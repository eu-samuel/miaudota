import { StyledHeader, HeaderButton } from './StyledHeader';
import { useState } from "react"
import { useColorModeValue } from '@chakra-ui/react';
import { Balloon } from "./balloon";
import { goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import DarkModeButton from './../DarkButton';
import { useNav } from '../../hooks/useForm';
import { Nav } from '../nav/nav';

export const Header = () => {

    const navigate = useNavigate()
    const [balloon, setBalloon] = useState(false)

    const {nav, showNav} = useNav()


    return(
        <>
        <StyledHeader>
            <AiOutlineMenu id="nav-btn" onClick={() => showNav()}/>
            <img onClick={() => goToHome(navigate)} src={useColorModeValue("https://i.ibb.co/8gvTTxF/logo.png", "https://i.ibb.co/xMMfcCh/logo2.png")} id="logo"/> 
            <span>Adoção de gatos no Estado do Rio de Janeiro.</span>
            
            <HeaderButton 
            color={useColorModeValue('#164a64', 'gray')}
            textcolor={useColorModeValue('black', 'white.800')}
            bg={useColorModeValue('white', 'gray.800')} 
            bordercolor={useColorModeValue('#164a64', 'gray')} 
            onClick={() => setBalloon(!balloon)}>
                Fale Conosco
                </HeaderButton>
                <Balloon
                balloon={balloon}/>
            <div className="dark-btn">
                <DarkModeButton/>
                </div>
        </StyledHeader>
        <Nav nav={nav}/>
        </>
    )
}