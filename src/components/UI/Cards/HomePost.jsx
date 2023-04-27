import { StyledPost } from "../../../styles/secondaryStyles";
import { useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function HomePost(props) {
  const navigate = useNavigate()

  return (
    <StyledCard
    color={useColorModeValue('white', 'gray.900')}
    textcolor={useColorModeValue('#7e7d9b','white')}
    boxcolor={useColorModeValue('#e8e6e7', '#151b25')}>
    <img src={props.image}/>
    <div className="container">
    <p id="tag">{props.tag}</p>
    <p id="title">{props.title}</p>
    
    <p id="text">{props.text} </p>
      <span onClick={() => props.route(navigate)}>Saiba mais</span></div>
    </StyledCard>
  );
}