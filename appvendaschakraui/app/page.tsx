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
        height="100vh" // Define a altura da tela inteira
        alignItems="center" // Centraliza verticalmente
        justifyContent="center" // Centraliza horizontalmente
        flexDirection={'column'}
      >
        
        <Flex> {/* Adicionado um Flex para colocar "Sku" e "Name" lado a lado */}
          <FormControl isRequired w={'300px'} marginRight="2">
            <FormLabel>Sku:</FormLabel>
            <Input placeholder='sku' />
          </FormControl>

          <FormControl w={'300px'} isRequired>
            <FormLabel>Name:</FormLabel>
            <Input placeholder='name' />
          </FormControl>
        </Flex>

        <FormControl isRequired textAlign={'center'}>
          <FormLabel>Price:</FormLabel>
          <Input placeholder='price' w={'700px'} />
        </FormControl>
      </Flex>

    </>
  )
}
