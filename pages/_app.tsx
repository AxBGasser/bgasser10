import React from 'react'
import type { AppProps } from 'next/app'
// ChakraUI
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode as modeColor, StyleFunctionProps } from '@chakra-ui/theme-tools'
// Styles
import css from 'styled-jsx/css'
import styled from '../styles/Home.module.css'
// Components: Layout
import Layout from '../components/layout/layout'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: false,
}
const fonts = {
  heading: `'comfortaa', sans-serif`,
  body: `'comfortaa', sans-serif`,
}
const components = {
  Link: {
    baseStyle: (props: Record<string, any> | StyleFunctionProps) => ({
      color: modeColor('#181818', '#F2ECFF')(props),
    })
  },
  Heading: {
    baseStyle: (props: Record<string, any> | StyleFunctionProps) => ({
      color: modeColor('#181818', '#F2ECFF')(props),
      _hover: {
        textDecoration: 'none',
      },
    })
  }

}
const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: modeColor('#181818', '#F2ECFF')(props),
      bg: modeColor('#F2ECFF', '#181818')(props),
    },
    a: {
      color: modeColor('#181818', '#F2ECFF')(props),
      _hover: {
        textDecoration: 'underline',
      },
    },
    p: {
      color: modeColor('#181818', '#F2ECFF')(props),
      _hover: {
        textDecoration: 'none',
      },
    },
    h1: {
      color: modeColor('#F2ECFF', '#ffffff')(props),
      _hover: {
        textDecoration: 'underline',
      },
    },
    h2: {
      color: modeColor('#F2ECFF', '#ffffff')(props),
      _hover: {
        textDecoration: 'underline',
      },
    },
  }),
}

const theme = extendTheme({ config, fonts, styles, components })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

