import { ScriptProps } from 'next/script';
import React from 'react';
// components/layout.js
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }: ScriptProps) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            {/* <Footer /> */}
        </>
    )
}