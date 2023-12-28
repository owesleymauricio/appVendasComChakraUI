"use client"

import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    ResponsiveValue,
} from "@chakra-ui/react"

import { InputHTMLAttributes } from "react";

interface CommonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>
  {
    onChangeProps?: (value: string) => void;
    value:string
    label:string
    id:string;
    form:string;
    widthClasses?:string;
    size?: ResponsiveValue<string> | undefined;
}

export const InputCommon: React.FC<CommonProps> = ({
 onChangeProps,
 label,
 id,
 form,
 widthClasses,
 value,
 ... props
}: CommonProps) => {
    return (
        <Flex marginTop={'10px'}> {/* Adicionado um Flex para colocar "Sku" e "Name" lado a lado */}
            <FormControl isRequired w={widthClasses} marginRight="2">
                <FormLabel>{label}</FormLabel>
                <Input form={form} 
                    id={id} 
                    value={value}
                    onChange={event => {
                        if(onChangeProps){
                            onChangeProps(event.target.value)
                        }
                    }}
                     {...props}
                     />
            </FormControl>
        </Flex>
    )
}