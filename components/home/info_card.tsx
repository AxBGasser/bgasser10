// ChakraUI
import { Flex, Heading, Highlight, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";


/**
    * @function Info_AboutMe
    * @description Component that shows the summary information of the user
    * @returns {JSX.Element} Component
*/

export default function InfoCard(props: any | undefined): JSX.Element {
    return (
        <Flex width={{ base: '100%', md: '75%', lg: '65%', xl: '65%', '2xl': '69.5%' }} h={'auto'} borderRadius={5} px={'5'} py={'2'}
            mt={"1"} direction='column' mx={"auto"} align={'center'} >

            <Heading display={props.showTitle} as='h3' size='md' my={3}>{props.title}</Heading>
            <Text fontSize={"md"} textAlign="center">
                {props.description}
            </Text>
            <Text fontSize={"sm"} mt={2} textAlign="center">
                {props.description2}
            </Text>

            <Tabs isFitted variant='enclosed' display={props.showTabDisplay} width={"100%"}>
                <TabList mb='1em'>
                    <Tab >{props.tabTitle}</Tab>
                    {/*  <Tab >{props.tabTitle2}</Tab> */}
                </TabList>
                <TabPanels>
                    <TabPanel textAlign={'center'}>
                        {/*    <Highlight query={[
                            'AWS', 'HTML', 'CSS', 'ScrollMagic', 'JavaScript', 'CodeCommit', 'EC2', 'ECS', 'CodeStar',
                            'CodeBuild', 'WorkSpaces', 'NodeJs', 'Express', 'React', 'NextJs', 'TypeScript', 'ChakraUI',
                            'MongoDB', 'Mongoose', 'Docker', 'Git', 'GitHub', 'Jira', 'Trello', 'Microsoft Teams', 'Zoom',
                            'Google Meet', 'Cordova', 'TailwindCSS', 'Bootstrap', 'vueJs', 'django', 'C#', 'Python'

                        ]}
                            styles={{
                                px: '1', py: '0.4', rounded: 'full', color: useColorModeValue('#fff', '#181818'),
                                bg: useColorModeValue('#1d1d1d', '#F2ECFF')
                            }}
                        > */}
                        <Text>

                            {props.tabContent}
                        </Text>
                        {/* </Highlight> */}
                    </TabPanel>
                    {/* <TabPanel textAlign={'center'}>
                        {props.tabContent2}
                    </TabPanel> */}
                </TabPanels>
            </Tabs>

        </Flex >

    )

}