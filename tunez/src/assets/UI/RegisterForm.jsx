import { StyledForm } from "../secondaryStyles";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export const RegisterForm = (props) => {
  const [ password, name, email, confirm, onChange, postData, passType, setPassType, setFormType] = props.formStates;

  return (
    <StyledForm>
      <img id="logo" src={useColorModeValue("https://i.ibb.co/8gvTTxF/logo.png","https://i.ibb.co/xMMfcCh/logo2.png")}/>
      <Box rounded={"lg"} p={4}>
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Nome completo:</FormLabel>

            <Input
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={onChange}
              required/>
          </FormControl>

          <FormControl id="email">
            <FormLabel>E-mail:</FormLabel>

            <Input
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={onChange}
              required/>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Senha:</FormLabel>

            <Input
              name="password"
              id="password"
              type={passType}
              value={password}
              onChange={onChange}
              minLength={8}
              required/>
            </FormControl>

            <FormControl id="confirm">
            <FormLabel>Confirme a senha:</FormLabel>

            <Input
              name="confirm"
              id="confirm"
              type={passType}
              value={confirm}
              onChange={onChange}
              minLength={8}
              required/>
          </FormControl>

          <div className="newsletter"><input type="checkbox"/> <span>Quero receber novidades em meu e-mail.</span></div>
          <Stack spacing={3}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}></Stack>
            <div className="buttons">
              <Button
                type="submit"
                id="btn"
                bg={"green.500"}
                color={"white"}
                _hover={{
                  bg: "green.600",
                }}>
                Finalizar cadastro
              </Button>
              <p onClick={() => setFormType("login")}>Possuo conta</p>
            </div>
          </Stack>
        </Stack>
      </Box>
    </StyledForm>
  );
};
