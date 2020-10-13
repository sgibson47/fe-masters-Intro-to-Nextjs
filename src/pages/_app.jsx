import React from 'react'
import '../styles/global.css'
import {ThemeProvider} from 'theme-ui'
import theme from '../../theme'


export default function App ({ Component, pageProps}){
    console.log(theme);

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}