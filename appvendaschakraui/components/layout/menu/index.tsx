"use client"; // This is a client component 

import { Link } from '@chakra-ui/react'

import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Flex
} from "@chakra-ui/react"
import React from "react"


export const MenuNav: React.FC = () => {


    return (
        <Flex marginRight={'10px'} flexDirection={'column'}
       
        >
            <MenuItem href='/' label='Home' />
            <MenuItem href='/' label='Cadastro' />
            <MenuItem href='/' label='Config' />
        </Flex>
    )

}

interface MenuProps {
    href?: string;
    label: string;
}

const MenuItem: React.FC<MenuProps> = ({
    label
}: MenuProps) => {

    return (
        <Flex suppressHydrationWarning={true}
        border={'1px'}
        borderRadius={'5px'}
        borderColor={'gray'}
        padding={'10px'}
        width={'100px'}
        margin={'8px auto'}
        flexDirection={'column'}
        >
        <Link
            href={label} >
            {label}
        </Link>
        </Flex>
    )

}