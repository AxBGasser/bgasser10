import { ScriptProps } from 'next/script';
import React from 'react';
// components/layout.js
import Navbar from './navbar'
import Footer from './footer'
import { Container } from "@chakra-ui/react";

export default function Layout({ children }: ScriptProps) {
    return (
        <>
            {/* <Navbar /> */}
            {children}
            {/* <Footer /> */}
        </>
    )
}