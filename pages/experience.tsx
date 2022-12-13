import { Code, Link, Divider, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Container from "../components/layout/container";
import InfoCard from '../components/home/info_card'
import Experience_Card from "../components/experience/experience_card";

const experiences = [
    {
        titleProject: "Rediseño de una página web",
        tabTitle: "Descripción",
        tabTitle2: "Tecnologias",
        tabContent: "Se llevó a cabo el rediseño de una página web de arquitectura, esta fue la primera página que hice con los conocimientos con los que contaba en ese momento, a pesar de ser un resultado que no me termino de gustar, aprendí bastante de HTML, CSS, JavaScript, librerías de animación como ScrollMagic, carruseles, AWS (CodeCommit, EC2, ECS, CodeStar, CodeBuild, WorkSpaces) gracias a la empresa TWM Solutions que nos proporcionó el acceso a AWS pude aprender bastante con práctica real, al final el diseño se montó en AWS, 3 Meses de trabajo de estadias",
        tabContent2: "...",
        url: ""
    },

]

export default function Experience(props: any): JSX.Element {
    return (
        <Experience_Card data={experiences} />

    )
}