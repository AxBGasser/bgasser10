import { ChevronRightIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Center, Text, Show, Box, Container } from "@chakra-ui/react";
import Menu from "../buttons/menu";

export default function Navbar() {
    return (
        <Box px={"2.5vw"} py={1.5} position={'fixed'} left={0} bottom={0} width={'100vw'} display={'inline-flex'}
            backdropFilter='auto'
            backgroundColor={'blackAlpha.100'}
            backdropBlur={'10px'}
            zIndex={2}
        >
            {/* Left */}
            <Flex
                textAlign={'left'}
                w={'auto'}
                p={0}
                m={0}
                flexGrow={0}
            >
                <Heading>
                    Axel BG
                </Heading>
            </Flex>
            {/* Right */}
            <Flex
                gap={1}
                px={3}
                flexGrow={1}
                justifyContent={'flex-end'}
            >
                <Menu />
            </Flex >
        </Box >
    )
}