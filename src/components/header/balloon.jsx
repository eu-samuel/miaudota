import { StyledBalloon } from "../SecondaryStyles";
import { useColorModeValue } from "@chakra-ui/react";
import Contact from './../Forms/ContactForm';
import { useState } from "react";

export const Balloon = (props) => {

  const [form, setForm] = useState(true)

  return (
    <StyledBalloon
      textcolor={useColorModeValue("black", "white.800")}
      bg={useColorModeValue("white", "#1A202C")}
      bordercolor={useColorModeValue("#a1b3bd", "gray")}
    >
      <div className={props.balloon ? "balloon-on" : "balloon-off"}>
     {form && <Contact
     setForm={setForm}
     />}
     {!form && <div className="message-sent">
      <h1>Mensagem enviada com sucesso!</h1>
      <img id="finish" src="https://i.ibb.co/n6mbQfp/image.png"/>
      <button onClick={() => setForm(true)}>Voltar</button>
      </div>
      }
            </div>
    </StyledBalloon>
  );
};
