import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Textarea
} from "@chakra-ui/react"


export const Layout: React.FC = () => {
    return (
        <Flex>
            {/*aqui vai ficar o menu*/}

            <Flex
                flexDirection={'column'}
                border={'1px'}
                padding={'10px'}
                borderRadius={'5px'}
                borderColor={'gray'}
            >
                <Flex marginTop={'10px'}> {/* Adicionado um Flex para colocar "Sku" e "Name" lado a lado */}
                    <FormControl  isRequired w={'300px'} marginRight="2">
                        <FormLabel>Sku:</FormLabel>
                        <Input placeholder='sku' />
                    </FormControl>

                    <FormControl  w={'300px'} isRequired>
                        <FormLabel>Name:</FormLabel>
                        <Input placeholder='name' />
                    </FormControl>
                </Flex>

                <FormControl marginTop={'20px'} isRequired textAlign={'center'}>
                    <FormLabel>Price:</FormLabel>
                    <Input placeholder='price' w={'610px'} />
                </FormControl>

                <FormControl marginTop={'20px'} isRequired textAlign={'center'}>
                    <FormLabel>Description:</FormLabel>
                    <Textarea placeholder='Digite sobre o produto' />
                </FormControl>

                <Stack 
                direction='row' 
                spacing={4} 
                align='center'
                marginTop={'20px'}>
                    <Button colorScheme='teal' variant='solid'>
                        Submit
                    </Button>
                    <Button colorScheme='teal' variant='outline'>
                        Back
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    )
}