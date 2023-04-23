import { StyledCard } from "../../secondaryStyles";
import { useColorModeValue } from "@chakra-ui/react";

export default function Post2() {
  return (
    <StyledCard
    color={useColorModeValue('white', 'gray.900')}
    textcolor={useColorModeValue('#7e7d9b','white')}
    boxcolor={useColorModeValue('#e8e6e7', '#151b25')}>
    <img src="https://i.ibb.co/rmWhGRz/post2.png"/>
    <div className="container">
    <p id="tag">CONTRIBUA</p>
    <p id="title">Sua doação é importante!</p>
    
    <p id="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p></div>
    </StyledCard>
  );
}