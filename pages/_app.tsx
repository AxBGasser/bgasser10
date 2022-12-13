import React from 'react'
import type { AppProps } from 'next/app'
// ChakraUI
import { ChakraProvider, extendTheme, Container } from '@chakra-ui/react'
// Styles
import css from 'styled-jsx/css'
import styled from '../styles/Home.module.css'
// Components: Layout
import Layout from '../components/layout/layout'
import Navbar from '../components/layout/navbar'
import ContentContainer from '../components/layout/container'
// theme
import theme from '../theme'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={"1920px"}  minW={'0'} >
        <ContentContainer>
          <Navbar />
          <Component {...pageProps} />
        </ContentContainer>
      </Container>
    </ChakraProvider>
  )
}

