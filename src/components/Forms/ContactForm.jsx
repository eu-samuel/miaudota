import { ContactForm } from "./StyledForms"
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Select,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue
} from "@chakra-ui/react";
import { RiWhatsappFill } from 'react-icons/ri'
import * as MdIcons from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import useForm from './../../hooks/useForm';

export default function Contact(props) {

  const { form, onChange, clearInputs } = useForm({
    name: "",
    email: "",
    select: "",
    message: "",
  });

  const sendMessage = () => {
    clearInputs()
    props.setForm(false)
  }

  return (
    <ContactForm>
    <Flex>
      <Box
        color="black"
        borderRadius="lg"
        m={{ sm: 3, md: 3, lg: 1 }}
        p={{ sm: 3, md: 3, lg: 6 }}
      >
        <Box p={1}>
          <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 10 }}>
            <WrapItem>
              <Box>
              <div className="resources">
                <div><Heading
                w="100"
                color={useColorModeValue("black", 'white')}>Fale conosco</Heading>
                <Text id="text" mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue("gray.500", 'white')}>
                  <p>Nos mande uma mensagem diretamente </p>
                  <p>ou pelo whatsapp.</p>
                </Text>
                </div>
                <Box color={useColorModeValue("black", "white")}
                py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    </VStack>
                    <div id="icon">
                      <RiWhatsappFill color="#f35f29" size="20px" />
                     (21) 99999-9999
                     </div>
                     <div id="icon">
                      <MdIcons.MdEmail color="#f35f29" size="20px" />
                      miaudota@email.com
                      </div>
                      <div id="icon">
                        <MdIcons.MdLocationOn color="#f35f29" size="20px" />
                      Rio de Janeiro - RJ
                      </div>
                </Box>
                </div>
              </Box>
              </WrapItem>
              <div className="form">
            <WrapItem>
              <Box bg={useColorModeValue("white", "")} borderRadius="lg">
                <Box m={1} color={useColorModeValue("#0B0E3F", "white")}>
                  <VStack spacing={5}>
                    <FormControl id="area">
                      <FormLabel>Seu nome</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                        />
                        <Input type="text" name="name" value={form.name} onChange={onChange} required size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="area">
                      <FormLabel>Seu e-mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdIcons.MdOutlineEmail id="mail" color="gray.800" />}
                        />
                        <Input type="text" name="email" value={form.email} onChange={onChange} required size="ml" h="4vh" w="22vw" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="area">
                      <FormLabel>Assunto</FormLabel>
                      <Select 
                      value={form.select} 
                      name="select" 
                      onChange={onChange}
                      required 
                        h={7}>
                        <option value="null">Escolha um assunto</option>
                        <option value="voluntariado">Voluntariado (deixar telefone para contato)</option>
                        <option value="doacao">Doações</option>
                        <option value="reclamacao">Reclamações</option>
                        <option value="denuncia">Denúncias</option>
                      </Select>
                    </FormControl>
                    <FormControl id="area">
                      <FormLabel>Mensagem</FormLabel>
                      <Textarea
                        value={form.message}
                        onChange={onChange}
                        required 
                        name="message"  
                        borderColor="gray.300"
                        h="20vh"
                        w="22vw"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="Sua mensagem aqui"
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                         onClick={() => sendMessage()}
                        variant="solid"
                        bg="#f35f29"
                        color="white"
                        _hover={{}}
                      >
                        Enviar mensagem
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
            </div>
          </Wrap>
        </Box>
        </Box>
    </Flex>
    </ContactForm>
  );
}
