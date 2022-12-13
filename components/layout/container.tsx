import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Children, JSXElementConstructor, ReactElement, ReactFragment, ReactNode, ReactPortal } from "react";

export default function Container(props: { children: ReactNode }) {
    return (
        <Flex bgColor={useColorModeValue('#FBF8FF', '#1D1D1D')} borderRadius={5} width={'100%'} h={'100%'} direction='column' align={'center'}>
            {props.children}
        </Flex >
    )
}