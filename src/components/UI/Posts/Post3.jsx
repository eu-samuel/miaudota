import { StyledCard } from "../../../styles/secondaryStyles";
import { useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { goToFaq } from "../../../routes/coordinator";

export default function Post3() {
  const navigate = useNavigate()

  return (
    <StyledCard
    color={useColorModeValue('white', 'gray.900')}
    textcolor={useColorModeValue('#7e7d9b','white')}
    boxcolor={useColorModeValue('#e8e6e7', '#151b25')}>
    <img src="https://www.bemparana.com.br/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-10-at-20.07.29.jpeg"/>
    <div className="container">
    <p id="tag">FAQ</p>
    <p id="title">Políticas de adoção.</p>
    
    <p id="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p><span onClick={() => goToFaq(navigate)}>Saiba mais</span>
      </div>
    </StyledCard>
  );
}