"use client";

import { Layout, InputCommon } from "@/components";
import { Button, Flex, FormControl, FormLabel, Input, Stack, Textarea, useAccordion } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react"
import { useState } from "react";
import { useProdutoService } from "@/app/services";
import { Produto } from "@/app/models/produtos";


export const RegistrationProduct: React.FC = () => {

    const service = useProdutoService();

    const [sku, setSku] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const handleSubmit = () => {
        const numberPrice = parseFloat(price);

        const products: Produto = {
            sku: sku,
            nameProduto: name,
            price: numberPrice,
            descricao: desc
        }
        service.salvar(products).then(produtoResposta => 
            console.log(produtoResposta))
    }

    return (
        <ChakraProvider>
            <Flex margin={'50px 10px 10px 10px'}>
                <Layout titulo="Produtos">

                    <Flex marginTop={'10px'}> {/* Adicionado um Flex para colocar "Sku" e "Name" lado a lado */}

                        <InputCommon label="SKU"
                            id="inputSku"
                            form="inputSku"
                            placeholder="digite o SKU aqui"
                            widthClasses="300px"
                            value={sku}
                            onChangeProps={setSku}
                        />

                        <InputCommon label="NAME"
                            id="inputName"
                            form="inputName"
                            placeholder="digite o Name aqui"
                            widthClasses="300px"
                            value={name}
                            onChangeProps={setName}
                        />

                    </Flex>

                    <InputCommon label="PRICE"
                        id="inputPrice"
                        form="inputPrice"
                        placeholder="digite o Price aqui"
                        value={price}
                        onChangeProps={setPrice}
                    />


                    <FormControl marginTop={'20px'} isRequired textAlign={'center'}>
                        <FormLabel>Description:</FormLabel>
                        <Textarea form="inputDesc"
                            id="inputDesc"
                            onChange={event => setDesc(event.target.value)}
                            placeholder='Digite sobre o produto' />
                    </FormControl>

                    <Stack
                        direction='row'
                        spacing={4}
                        align='center'
                        marginTop={'20px'}>
                        <Button
                            onClick={handleSubmit}
                            colorScheme='teal' variant='solid'>
                            Submit
                        </Button>
                        <Button colorScheme='teal' variant='outline'>
                            Back
                        </Button>
                    </Stack>
                </Layout>
            </Flex>
        </ChakraProvider>
    )
}