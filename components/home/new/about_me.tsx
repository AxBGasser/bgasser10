import {
    Flex, Heading, Badge, Tooltip, Image, Text, Stack, Box, Link, Button, Container

} from "@chakra-ui/react"

import Github from '../../icon_components/social/github'
import Linkedin from '../../icon_components/social/linkedin'
// import Container from "./../layout/container";

export default function AboutMe() {
    return (
        <>
            <Container py={1} my={5}>
                <Flex direction={'column'} alignItems='center' gap={2}>
                    <Image
                        borderRadius={'full'}
                        boxSize='190px'
                        objectFit='cover'
                        src='../images/A2.jpg'
                        alt='A2 by GUWEIZ from Nier Automata'
                    />
                    <Heading as={'h5'} size={'lg'} fontWeight={600}>
                        Axel Salgado
                    </Heading>
                    <Badge>Web developer</Badge>
                    <Flex gap={2}>
                        <Github />
                        <Linkedin />
                    </Flex>
                </Flex>
            </Container>
            <Container py={0} my={4}>
                <Text textAlign='center'>
                    Soy Desarrollador Web, trabajo con HTML, CSS, Javascript, Bootstrap, TailwindCSS, NodeJS, entre otras tecnologías.
                    Ahora mismo estoy aprendiendo ReactJS, Typescript, NextJS y ChakraUI
                </Text>
            </Container>
        </>
    )
}
