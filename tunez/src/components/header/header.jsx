import { StyledHeader } from "../../assets/generalStyles"
import { StyledButton } from "../../assets/secondaryStyles"

export const Header = () => {

    return(
        <StyledHeader>
            <img id="logo" src="https://i.ibb.co/vDwP4NL/logo.png"/>
            <span>Espaço virtual de adoção de gatos do estado do Rio de Janeiro.</span>
            <StyledButton color={'#cd64cd'}>Login</StyledButton>
        </StyledHeader>
    )
}