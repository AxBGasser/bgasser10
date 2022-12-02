import { Badge, Flex, Heading, Image, Text, Tooltip, Tag, AspectRatio } from "@chakra-ui/react";
import Link from "next/link";

export default function Basic_Card_Info() {

    return (
        <Flex px={'3vw'} py={'1vh'} direction='column' mx={"auto"} align={'center'}>
            {/* <Image borderRadius={'full'}
                boxSize='150px'
                objectFit='cover'
                src='https://assets.pinterest.com/ext/embed.html?id=599752875398004296'
                alt='avatar'
            /> */}
            <Image borderRadius={'full'}
                boxSize='150px'
                objectFit='cover'
                src='../images/A2.jpg'
                alt='avatar'
            />
            <Heading fontSize={'2xl'} mt={1} mb={1}>
                Axel Salgado
            </Heading>

            <Text mb={2} fontSize={'small'}>
                <Badge>
                    Web developer
                </Badge>
            </Text>
            <Tooltip label="BGasser10">
                <Link href={'https://github.com/BGasser10'} >
                    <Badge>
                        GitHub
                    </Badge>
                </Link>
            </Tooltip>
        </Flex>
    )

}