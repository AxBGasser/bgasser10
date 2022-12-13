// ChakraUI
import { Tooltip, Image, Stack, Wrap, WrapItem, Skeleton, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";

/**
    * @function Techs
    * @description Component that shows technologies knowledge 
    * @returns {JSX.Element} Component
*/
//
export default function Technologies_Knowledge(props: any): JSX.Element {
    const [isLoading, setLoading] = useState(false)
    const startMode = "(rbg(240, 240, 240) ,rgb(125,125,125)"
    const endMode = "UseColorModeValue((rgb(180,180,180), rgb(180, 180, 180))"

    useEffect(() => {
        // timer 
        setTimeout(() => {
            setLoading(true)
        }, 1550)

    }, [])

    // Loading
    if (!isLoading) {
        return (
            <Stack  w={'50%'} h={'fit-content'} p={3} my={"3"} mx={{ base: 'auto', md: "25%" }} gap={5} >
                <Wrap justify={"center"} align={'center'} spacing={4} direction={"row"} >
                    <Skeleton height={50} w={50} >
                        {props.data.map((tech: { index: number, name: string, image: string }) => (
                            <WrapItem key={tech.index} >
                                <Image src={tech.image} alt="image" width={25} />
                            </WrapItem >
                        ))}
                    </Skeleton>
                    <Skeleton height={50} w={50} >
                        {props.data.map((tech: { index: number, name: string, image: string }) => (
                            < WrapItem key={tech.index}>
                                <Image src={tech.image} alt="image" width={25} />
                            </WrapItem >
                        ))}
                    </Skeleton>
                    <Skeleton height={50} w={50} >
                        {props.data.map((tech: { index: number, name: string; image: string }) => (
                            < WrapItem key={tech.index}>
                                <Image src={tech.image} alt="image" width={25} />
                            </WrapItem >
                        ))}
                    </Skeleton>
                </Wrap>
            </Stack >
        )
    }
    // False by default
    // Displaying data | Loaded
    if (isLoading) {
        return (
            <Stack id={'#Knowledge'} w={'50'} h={'fit-content'} p={3} my={"3"} mx={{ md: "20%", lg: "35%", xl: "40%", xxl: "40%" }} gap={5} >
                <Wrap justify={"center"} align={'center'} spacing={4} direction={"row"} >
                    {props.data.map((tech: { index: number, name: string, image: string }) => (
                        <WrapItem key={tech.index}>
                            <Tooltip w={'auto'} h={6} aria-label='A tooltip' textAlign={'center'} label={tech.name} bgColor={'rgb(126, 19, 248)'} color="whitesmoke">
                                <Image src={tech.image} alt={tech.name} boxSize={59} />
                            </Tooltip>
                        </WrapItem >
                    ))}
                </Wrap>
            </Stack >
        )
    }
    // Return nothing in case of error
    return <>Hola</>
}
