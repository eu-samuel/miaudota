import { ContactForm } from "./StyledForms";

import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
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

export default function Contact() {
  return (
    <ContactForm>
    <Flex>
      <Box
        className="box"
        color="black"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Box p={4}>
          <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
            <WrapItem>
              <Box>
                <div>
                <Heading
                color={useColorModeValue("black", 'white')}>Fale conosco</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue("gray.500", 'white')}>
                  <p>Nos mande uma mensagem diretamente.</p> Você também pode entrar em contato <p>por whatsapp ou email.</p>
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color={useColorModeValue("black", 'white')}
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<RiWhatsappFill color="#2a6071" size="20px" />}
                    >
                     (21) 99999-9999
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color={useColorModeValue("black", 'white')}
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<MdIcons.MdEmail color="#2a6071" size="20px" />}
                    >
                      miaudota@email.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color={useColorModeValue("black", 'white')}
                      _hover={{ border: "2px solid #1C6FEB" }}
                      leftIcon={<MdIcons.MdLocationOn color="#2a6071" size="20px" />}
                    >
                      Rio de Janeiro - RJ
                    </Button>
                  </VStack>
                </Box>
                </div>
              </Box>
            </WrapItem>
            <WrapItem>
            <div>
              <Box bg={useColorModeValue("white", "")} borderRadius="lg">
                <Box m={1} color={useColorModeValue("#0B0E3F", "white")}>
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel>Seu nome</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Seu e-mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdIcons.MdOutlineEmail color="gray.800" />}
                        />
                        <Input type="text" size="ml" h="4vh" w="22vw" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Assunto</FormLabel>
                      <select>
                        <option value="null">Escolha um assunto</option>
                        <option value="reclamação">Reclamação</option>
                        <option value="resgate">Resgates</option>
                        <option value="informação">Informação geral</option>
                        <option value="denúncia">Denúncia</option>
                      </select>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Mensagem</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        h="11vh"
                        w="22vw"
                        _hover={{
                          borderRadius: "gray.300",
                        }}
                        placeholder="Sua mensagem aqui"
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        bg="#2a6071"
                        color="white"
                        _hover={{}}
                      >
                        Enviar mensagem
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
              </div>
            </WrapItem>
          </Wrap>
        </Box>
        <img id="catcontact" src="https://i.ibb.co/7rwTVpV/catform.png"/>
      </Box>
    </Flex>
    </ContactForm>
  );
}
