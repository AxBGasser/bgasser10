// ChakraUI
import { useColorModeValue, Flex } from '@chakra-ui/react'
// Components
import Info_About_Me from '../components/home/info_card'
import Basic_Card_Info from '../components/home/basic_card_info'
import Technologies_Knowledge from '../components/home/technologies_knowledge'
import Container from '../components/layout/container'

const technologies = [
  { index: 1, name: 'HTML', image: '/images/html-5.svg' },
  { index: 2, name: 'CSS', image: '/images/css-3.svg' },
  { index: 3, name: 'Tailwind CSS', image: '/images/tailwind-css.svg' },
  { index: 4, name: 'Bootstrap', image: '/images/bootstrap.svg' },
  { index: 5, name: 'NodeJS', image: '/images/nodejs-icon.svg' },
  { index: 6, name: 'MySQL', image: '/images/mysql.svg' },
  { index: 7, name: 'MongoDB', image: '/images/mongodb-icon.svg' }
]

const description = "Hola!, mi nombre es Axel, soy un desarrollador enfocado a web actualmente, he trabajado con HTML, CSS, JS, NodeJs, Bootstrap, TailwindCSS, entre otras tecnologías, ahora mismo estoy aprendiendo NEXTjs, TypeScript y Chakra UI que son las tecnologías con las que realice esta página, mi objetivo es llegar a ser un Desarrollador de Videojuegos ya que son mi pasatiempo (mis juegos favoritos son Nier Automata y RE6)."
const description2 = "Hay cambios, animaciones y proyectos por agregar 😸"
/**
    * @function AboutMe
    * @description Component that shows AboutMe section
    * @returns {JSX.Element} Component 
 */
export default function AboutMe(): JSX.Element {
  return (
    <Container>
      <Basic_Card_Info />
      <Info_About_Me title={"Soy titulo"} showTitle="none" showTabDisplay="none" description={description} description2={description2} />
      <Technologies_Knowledge data={technologies} />
    </Container>
  )
}
