import { StyledBalloon } from "../../styles/secondaryStyles";
import { useColorModeValue } from "@chakra-ui/react";
import axios from "axios";
import useForm from "./../../hooks/useForm";
import { useState } from "react";
import { LoginForm } from "../../components/UI/Forms/LoginForm";
import { RegisterForm } from "../../components/UI/Forms/RegisterForm";

export const Balloon = (props) => {
  const [passType, setPassType] = useState("password");
  const [formType, setFormType] = useState("login")

  const { form, onChange, clearInputs } = useForm({
    email: "",
    password: "",
    confirm: "",
    name: "",
  });

  const userData = {
    username: form.name,
    email: form.email,
    password: form.password,
  };

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/users/signup`, userData)
      .then((res) => {
        console.log("Resposta do Signup", res.data.token);
        console.log("Entrou no signup");
        // Guarda o token
        window.localStorage.setItem("token", res.data.token);
        irParaFeed(navigate);
      })
      .catch((err) => {
        console.log("Resposta do Erro do Signup", err.response);
      });
  };

  const formStates = [form.password, form.name, form.email, form.confirm, onChange, postData, passType, setPassType, setFormType]

  return (
    <StyledBalloon
      textcolor={useColorModeValue("black", "white.800")}
      bg={useColorModeValue("white", "#1A202C")}
      bordercolor={useColorModeValue("#a1b3bd", "gray")}
    >
      <div className={props.balloon ? "balloon-on" : "balloon-off"}>
      {formType === "login" && <LoginForm formStates={formStates}/>}
      {formType === "register" && <RegisterForm formStates={formStates}/>}
            </div>
    </StyledBalloon>
  );
};
