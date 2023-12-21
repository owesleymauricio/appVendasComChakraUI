import { Layout } from "@/components";
import {
  Box,
  Flex,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";


export default function Home() {
  return (
    <>
      <Flex
       // height="100vh" // Define a altura da tela inteira
       // alignItems="center" // Centraliza verticalmente
        //justifyContent="center" // Centraliza horizontalmente
        //flexDirection={'column'}
      >
        <h1> ola </h1>
        <Layout />
      </Flex>

    </>
  )
}
