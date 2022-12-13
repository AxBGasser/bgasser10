import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import {
    Button, Flex, Link, Modal, ModalBody, ModalContent, ModalOverlay,
    useColorModeValue, useDisclosure, Heading, IconButton, Tooltip
} from "@chakra-ui/react"
import React from "react"
import ToggleTheme from "./theme";

const aboutMe = "About Me"
const experience = "Experience"

export default function Menu() {
    const BackdropOverlay = () => (
        <ModalOverlay
            bg='transparent'
            backdropFilter='blur(30px)'
        />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<BackdropOverlay />)

    return (
        <Flex align={'center'} px={1} >

            <Tooltip label={'Menu'} aria-label="Menu" >

                <Button
                    fontSize={'lg'}
                    size={'sm'}
                    color={useColorModeValue('blackAlpha', 'whitesmoke')}
                    rounded={'50px'}
                    w={'fit-content'}
                    h={'100%'}
                    p={"3"}
                    /*  h={{ sm: '100%', md: 'auto', lg: '110%', xl: '90%' }} */
                    aria-label="Toggle Theme"
                    bgColor={useColorModeValue('whiteAlpha.800', 'blackAlpha')}
                    backdropBlur={'10px'}
                    onClick={() => {
                        setOverlay(<BackdropOverlay />)
                        onOpen()
                    }}
                >
                    <HamburgerIcon />
                </Button>
            </Tooltip>

            <Flex className="drawer_menu">
                <Modal isCentered isOpen={isOpen} onClose={onClose} size={'full'} >
                    {overlay}
                    <ModalContent bgColor={'transparent'} boxShadow={'undefined'} >
                        <Flex position={'fixed'} right={{ base: 3, md: 7, lg: 20 }} top={{ base: 3, md: 7, lg: 16 }}>
                            <ToggleTheme />
                        </Flex>
                        <ModalBody bgColor={'transparent'} display="inline-flex" alignItems="center">
                            <Flex w={'100%'} direction={'column'} textAlign={'center'} justifyContent={'center'}
                                gap={{ base: 5, sm: 7, md: 9, lg: 11, xl: 13 }} margin={'0 auto'} >
                                <Link href='/' bgColor={'transparent'}>
                                    <Heading color={useColorModeValue('#181818', '#F2ECFF')}
                                        fontSize={{ sm: 'sm', md: 'md', lg: 'lg', xl: '4xl' }}
                                    >
                                        Inicio
                                    </Heading>
                                </Link>
                               {/*  <Link href='/experience' bgColor={'transparent'} title={experience} >
                                    <Heading color={useColorModeValue('#181818', '#F2ECFF')}
                                        fontSize={{ sm: 'md', md: 'md', lg: 'lg', xl: '4xl' }}>
                                        Experiencia
                                    </Heading>
                                </Link> */}
                                {/* <Link href='/more' bgColor={'transparent'}>
                                    <Heading color={useColorModeValue('#181818', '#F2ECFF')}
                                        fontSize={{ sm: 'sm', md: 'md', lg: 'lg', xl: '4xl' }}>
                                        More
                                    </Heading>
                                </Link> */}

                                <Flex align={'center'} px={1} alignSelf={'center'} >
                                    <Tooltip label={'Close Menu'} aria-label="Close Menu" >
                                        <IconButton
                                            bgColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
                                            _hover={{ backgroundColor: useColorModeValue('whiteAlpha.800', 'blackAlpha.800') }}
                                            backdropBlur={'10px'}
                                            onClick={onClose}
                                            borderRadius={'5px'}
                                            size={{ base: 'sm', sm: 'sm', lg: 'md' }}
                                            fontSize={'xl'}
                                            w={'100%'}
                                            h={'fit-content'}
                                            alignSelf={'center'}
                                            icon={< CloseIcon />}
                                            aria-label={"Close Menu"}                                >
                                        </IconButton>
                                    </Tooltip>
                                </Flex >
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Flex>

        </Flex>
    )
}