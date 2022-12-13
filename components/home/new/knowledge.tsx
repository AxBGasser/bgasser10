import React from 'react'
import {
    Heading, Container, Flex, Text, Image, Wrap, WrapItem, Tooltip, Stack, Grid, GridItem, SimpleGrid, Box,
    AccordionItem, AccordionPanel, Accordion, AccordionButton, AccordionIcon,
} from "@chakra-ui/react";

const other = [
    { name: 'PHP Framework - CodeIgniter', image: '/icons/codeigniter-plain.svg', color: '#EE4323' },
]
const FCSS = [
    { name: 'Tailwind CSS', image: '/icons/tailwindcss-plain.svg', color: '#38b2ac' },
    { name: 'Bootstrap', image: '/icons/bootstrap-plain.svg', color: '#7952b3' },
]
const WL = [
    { name: 'HTML', image: '/icons/html5-plain.svg', color: '#E44D26' },
    { name: 'CSS', image: '/icons/css3-plain.svg', color: '#1572B6' },
    { name: 'Javascript', image: '/icons/javascript-plain.svg', color: '#F0DB4F' },

]
const RE = [
    { name: 'Runtime Enviroment - NodeJS', image: '/icons/nodejs-plain.svg', color: '#83CD29' },
    { name: 'Framework - VueJS', image: '/icons/vuejs-original.svg', color: '#41b883' },
    { name: 'Infraestructure web application - Express', image: '/icons/express-original.svg', color: '#000' },
    { name: 'Template System - Handlebars', image: '/icons/handlebars-original.svg', color: '#000' },
]
const DB = [
    { name: 'MongoDB', image: '/icons/mongodb-plain.svg', color: '#4FAA41' },
    { name: 'SQL', image: '/icons/microsoftsqlserver-plain.svg', color: '#000' },
    { name: 'MySQL', image: '/icons/mysql-plain.svg', color: '#00618A' },
    { name: 'SQLite', image: '/icons/sqlite-original.svg', color: '#003956' }
]

const Knowledge = () => {
    return (
        <Container mt={5} mb={20} >
            <Accordion allowMultiple>
                <AccordionItem mt={3} >
                    <Heading>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='center'>
                                Desarrollo Web
                            </Box>
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        <Wrap justify={"center"} align={'center'} spacing={4} direction={"row"} my={3} >
                            {
                                WL.map((item, index) => {
                                    return (
                                        <WrapItem key={index}>
                                            <Tooltip w={'auto'} h={6} aria-label='A tooltip' textAlign={'center'} label={item.name} bgColor={item.color} color="whitesmoke">
                                                <Image src={item.image} alt={item.name} boxSize={59} />
                                            </Tooltip>
                                        </WrapItem >
                                    )
                                })
                            }
                        </Wrap>
                        <Heading textAlign='center' size='small'>Frameworks CSS</Heading>
                        <Wrap justify={"center"} align={'center'} spacing={4} direction={"row"} mb={5} >
                            {
                                FCSS.map((item, index) => {
                                    return (
                                        <WrapItem key={index}>
                                            <Tooltip w={'auto'} h={6} aria-label='A tooltip' textAlign={'center'} label={item.name} bgColor={item.color} color="whitesmoke">
                                                <Image src={item.image} alt={item.name} boxSize={59} />
                                            </Tooltip>
                                        </WrapItem >
                                    )
                                })
                            }
                        </Wrap>
                        <Heading textAlign='center' size='small'>Runtime Enviroment</Heading>
                        <Wrap justify={"center"} align={'center'} spacing={4} direction={"row"} my={3} >
                            {
                                RE.map((item, index) => {
                                    return (
                                        <WrapItem key={index}>
                                            <Tooltip w={'auto'} h={6} aria-label='A tooltip' textAlign={'center'} label={item.name} bgColor={item.color} color="whitesmoke">
                                                <Image src={item.image} alt={item.name} boxSize={59} />
                                            </Tooltip>
                                        </WrapItem >
                                    )
                                })
                            }
                        </Wrap>
                        <Heading textAlign='center' size='small'>Otros</Heading>
                        <Wrap justify={"center"} align={'center'} spacing={4} direction={"row"} mb={5} >
                            {
                                other.map((item, index) => {
                                    return (
                                        <WrapItem key={index}>
                                            <Tooltip w={'auto'} h={6} aria-label='A tooltip' textAlign={'center'} label={item.name} bgColor={item.color} color="whitesmoke">
                                                <Image src={item.image} alt={item.name} boxSize={59} />
                                            </Tooltip>
                                        </WrapItem >
                                    )
                                })
                            }
                        </Wrap>
                    </AccordionPanel>
                </AccordionItem>
                {/* BASES DE DATOS */}
                <AccordionItem mb={3}>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='center'>
                            Bases de datos
                        </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {/* <Heading textAlign='center' size='md'>Bases de datos</Heading> */}
                        <Wrap justify={"center"} align={'center'} spacing={4} direction={"row"} my={6} >
                            {
                                DB.map((item, index) => {
                                    return (
                                        <WrapItem key={index}>
                                            <Tooltip w={'auto'} h={6} aria-label='A tooltip' textAlign={'center'} label={item.name} bgColor={item.color} color="whitesmoke">
                                                <Image src={item.image} alt={item.name} boxSize={59} />
                                            </Tooltip>
                                        </WrapItem >
                                    )
                                })
                            }
                        </Wrap>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>
    )
}

export default Knowledge

