"use client";

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Menu,
    Stack,
    Textarea,
    Text
} from "@chakra-ui/react"

import { MenuNav } from "./menu";
import { ReactNode} from "react";


interface LayoutProps{
    titulo?: string;
    children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
   
    return (
        <Flex>
            <MenuNav />

            <Flex
                flexDirection={'column'}
                border={'1px'}
                padding={'10px'}
                borderRadius={'5px'}
                borderColor={'gray'}
                
            >
                <Text fontFamily={'bold'}
                fontSize={'40px'}
                >
                    {props.titulo}
                </Text>
               {props.children}
            </Flex>
        </Flex>
    )
}