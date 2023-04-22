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

export const LoginForm = (props) => {
  const [ password, name, email, confirm, onChange, postData, passType, setPassType, setFormType] = props.formStates;

  return (
    <StyledForm>
      <img id="logo" src={useColorModeValue("https://i.ibb.co/8gvTTxF/logo.png","https://i.ibb.co/xMMfcCh/logo2.png")}/>

      <Box rounded={"lg"} p={4}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>E-mail:</FormLabel>

            <Input
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={onChange}
              required
            />
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
              required
            />
          </FormControl>

          <Stack spacing={3}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}></Stack>
            <div className="buttons">
              <Button
                type="submit"
                id="btn"
                bg={"blue.500"}
                color={"white"}
                w={'6vw'}
                _hover={{
                  bg: "blue.600",
                }}>
                Entrar
              </Button>
              <Button
                type="button"
                id="btn"
                bg={"purple.500"}
                w={'7vw'}
                color={"white"}
                _hover={{
                  bg: "purple.600",
                }}
                onClick={() => setFormType("register")}>
                Cadastre-se
              </Button>
            </div>
          </Stack>
        </Stack>
      </Box>
    </StyledForm>
  );
};
