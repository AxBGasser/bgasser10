import {
    Heading, Container, Code, Link, Divider, Card, CardBody, Text, CardHeader, Stack, Box, Flex,
    Badge,

} from "@chakra-ui/react";

const Experience = () => {
    return (
        <Container>
            <Box mb={3} textAlign='center'>
                <Heading>Experiencia</Heading>
                <Badge colorScheme='green' variant='solid' >
                    5 Meses
                </Badge>
            </Box>
            <Card w='100%' bgColor='transparent' >
                <CardHeader p='4'>
                    <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' w='100%'  >
                        <Box flex={1} h='auto' my={1}>
                            <Text fontWeight={800} >
                                Rediseño de una pagina web
                            </Text>
                        </Box>
                        <Box w='fit-content' h='auto' textAlign={{ base: 'center', md: 'right' }} >
                            <Text>
                                TWM Solutions
                            </Text>
                            <Text>
                                3 Meses
                            </Text>
                        </Box>
                    </Flex>
                </CardHeader>
                <Divider mb={1} mt={0} h={'auto'} />
                <CardBody p='4'>
                    <Text fontWeight={300} my={1}>
                        Se realizo un rediseño de una página web de arquitectura, esta fue la primera página que hice, a pesar de ser un resultado que no me termino de gustar,
                        aprendí bastante de HTML, CSS, JavaScript, ScrollMagic (libreria de animacion) y Carruseles,

                    </Text>
                    <Text fontWeight={300} my={1}>
                        La empresa TWM Solutions nos proporcionó el acceso a Amazon Web Services y gracias a ello aprendi bastante de algunos servicios
                        (CodeCommit, EC2, ECS, CodeStar, CodeBuild, WorkSpaces,CLI, etc.), al final el diseño se montó en AWS.
                    </Text>
                </CardBody>
            </Card>
            <Divider mb={10} mt={3} h={'auto'} />
            {/*
             * SEGUNDA CARD  
             */}
            {/* <Card w='100%' bgColor='transparent' >
                <CardHeader p='4'>
                    <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' w='100%'  >
                        <Box flex={1} h='auto' my={1}>
                            <Text fontWeight={800} >
                                Creacion de modulos
                            </Text>
                        </Box>
                        <Box w='fit-content' h='auto' textAlign={{ base: 'center', md: 'right' }} >
                            <Text>
                                1 Mes y 2 semanas
                            </Text>
                        </Box>
                    </Flex>
                </CardHeader>
                <Divider mb={1} mt={0} h={'auto'} />
                <CardBody p='4'>
                    <Text fontWeight={300} my={1}>
                        Se realizo un modulo 
                        Se realizo un rediseño de una página web de arquitectura, esta fue la primera página que hice, a pesar de ser un resultado que no me termino de gustar,
                        aprendí bastante de HTML, CSS, JavaScript, ScrollMagic (libreria de animacion) y Carruseles,

                    </Text>
                    <Text fontWeight={300} my={1}>
                        La empresa TWM Solutions nos proporcionó el acceso a Amazon Web Services y gracias a ello aprendi bastante de algunos servicios
                        (CodeCommit, EC2, ECS, CodeStar, CodeBuild, WorkSpaces,CLI, etc.), al final el diseño se montó en AWS.
                    </Text>
                </CardBody>
            </Card>
            <Divider mb={10} mt={3} h={'auto'} /> */}
        </Container>

    )
}

export default Experience
