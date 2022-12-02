import { Link, Container, Code, Divider, Skeleton, Stack, Wrap, WrapItem, Flex, Box, SkeletonCircle, SkeletonText, Highlight } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import InfoCard from "../home/info_card"


export default function Experience_Cad(props: any): JSX.Element {

    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        // timer 
        setTimeout(() => {
            setLoading(true)
        }, 1250)

    }, [])

    //  Loading
    if (!isLoading) {
        return (
            <>
                <Stack p={7} boxShadow='xl' width={{ base: '100%', md: '75%', lg: '65%', xl: '65%', '2xl': '69.5%' }} h={'fit-content'}
                    borderRadius={5} px={'5'} pt={'8'}
                    mt={"2"} >
                    <SkeletonText alignSelf={'center'} w={'40%'} mt='0' mb='2' noOfLines={1} skeletonHeight='8' />
                    <Stack my={2} display={'inline-flex'} direction="row" w="100%">
                        <SkeletonText flex={1} alignSelf={'center'} w={'40%'} noOfLines={1} skeletonHeight='6' />
                        <SkeletonText flex={1} alignSelf={'center'} w={'40%'} noOfLines={1} skeletonHeight='6' />
                    </Stack>
                    <SkeletonText flex={0} noOfLines={4} spacing='3' skeletonHeight='3' />
                    <Stack mt={5} display={'inline-flex'} direction="column" w="100%">
                        <SkeletonText flex={1} alignSelf={'center'} w={'40%'} noOfLines={1} skeletonHeight='6' />
                    </Stack>
                </Stack>
                <Stack p={7} boxShadow='xl' width={{ base: '100%', md: '75%', lg: '65%', xl: '65%', '2xl': '69.5%' }} h={'fit-content'}
                    borderRadius={5} px={'5'} pt={'8'}
                    mt={"2"} >
                    <SkeletonText alignSelf={'center'} w={'40%'} mt='0' mb='2' noOfLines={1} skeletonHeight='8' />
                    <Stack my={2} display={'inline-flex'} direction="row" w="100%">
                        <SkeletonText flex={1} alignSelf={'center'} w={'40%'} noOfLines={1} skeletonHeight='6' />
                        <SkeletonText flex={1} alignSelf={'center'} w={'40%'} noOfLines={1} skeletonHeight='6' />
                    </Stack>
                    <SkeletonText flex={0} noOfLines={4} spacing='3' skeletonHeight='3' />
                    <Stack mt={5} display={'inline-flex'} direction="column" w="100%">
                        <SkeletonText flex={1} alignSelf={'center'} w={'40%'} noOfLines={1} skeletonHeight='6' />
                    </Stack>
                </Stack>
            </>
        )
    }

    // Displaying data | Loaded
    if (isLoading) {
        return (
            <>
                {
                    props.data.map((project: { titleProject: string, tabTitle: string, tabContent: string, tabTitle2: string, tabContent2: string, image: string, image2: string, image3: string, url: string }) => (
                        <>
                            <InfoCard title={project.titleProject} show='block' tabDisplay={"block"}
                                tabTitle={project.tabTitle}
                                tabContent={project.tabContent}
                            /*  tabTitle2={project.tabTitle2}
                            tabContent2={project.image} */
                            />
                            <Link display={'none'} href={'#blank'}>
                                <Code>{project.url}</Code>
                            </Link>
                            <Divider mb={10} mt={3} width={{ base: '100%', md: '75%', lg: '65%', xl: '65%', '2xl': '69.5%' }} h={'auto'} />
                        </>
                    ))
                }
            </>
        )
    }
    // Return nothing in case of error
    return <></>
}