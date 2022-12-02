import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { Flex, Box, IconButton, Tooltip, useColorMode, useColorModeValue, Button } from "@chakra-ui/react";

export default function ToggleTheme() {

    const toggleColor = useColorMode();

    return (
        <Flex align={'center'} px={1} >
            <AnimatePresence mode="wait" initial={true}>
                <motion.div
                    key={useColorModeValue('#fff', '#ff6767')}
                    initial={{ rotate: 0, scale: 0, opacity: 1 }}
                    animate={{ rotate: 0, scale: 1.2 }}
                    exit={{ rotate: 200, scale: 0, opacity: 0.4 }}
                    transition={{ duration: 0.33 }}
                >
                    <Tooltip label={useColorModeValue('Dark Mode', 'Light Mode')} aria-label="Theme Tooltip" >
                        <IconButton
                            fontSize={'lg'}
                            size={'sm'}
                            color={useColorModeValue('blackAlpha', 'whitesmoke')}
                            rounded={'50px'}
                            w={'fit-content'}
                            h={'100%'}
                            p={"2"}
                            aria-label="Toggle Theme"
                            bgColor={useColorModeValue('whiteAlpha.800', 'blackAlpha')}
                            backdropBlur={'10px'}
                            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                            onClick={toggleColor.colorMode === 'dark' ? toggleColor.toggleColorMode : toggleColor.toggleColorMode}
                        >

                        </IconButton>
                    </Tooltip>
                </motion.div>
            </AnimatePresence >
        </Flex >
    );
}
