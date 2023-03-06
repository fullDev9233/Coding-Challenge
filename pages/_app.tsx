import * as React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'

import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

import createEmotionCache from '../utils/createEmotionCache'
import theme from '../styles/theme'

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(theme)

const poppins = Poppins({
    weight: ['300', '400', '500', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--Poppins',
})

const MyApp = (props: MyAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <div className={poppins.variable}>
                    <Component {...pageProps} />
                </div>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MyApp
