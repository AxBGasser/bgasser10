import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Children, JSXElementConstructor, ReactElement, ReactFragment, ReactNode, ReactPortal } from "react";

export default function Container(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    return (
        <Flex
            bgColor={useColorModeValue('#FBF8FF', '#1D1D1D')} borderRadius={5} width={'95vw'} h={'fit-content'} p={5} mt={"14vh"} mb={"5vh"}
            direction='column' mx={"auto"} align={'center'} >
            {props.children}
        </Flex>
    )
}