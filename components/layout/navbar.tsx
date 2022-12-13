import { ChevronRightIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Center, Text, Show, Box, Container } from "@chakra-ui/react";
import Link from "next/link";
import ToggleTheme from "../buttons/theme";
import Menu from "../buttons/menu";

export default function Navbar() {
    return (
        <Box py={2} px={5} position={'sticky'} left={0} top={0} width={'100%'} display={'inline-flex'}
            backdropFilter='auto'
            backgroundColor={'blackAlpha.100'}
            backdropBlur={'10px'}
            zIndex={2} >
            <Flex flexGrow={1} justifyContent={'flex-end'}>
                <ToggleTheme />
                <Menu />
            </Flex >
        </Box >
    )
}