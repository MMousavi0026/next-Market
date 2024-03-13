import {ThemeProvider} from "@mui/material/styles";
import {Provider} from "react-redux";
import Head from "next/head";
import store from "@/redux/store";
import theme from "@/components/mui/ThemeConfig";
import {Noto_Sans_Arabic} from 'next/font/google';
import "@/styles/globals.css";

const NotoSansArabic = Noto_Sans_Arabic({
    weight: '400',
    subsets: ['arabic'],
})

export default function App({ Component, pageProps }) {
    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Head>
                    <title>next-market</title>
                    <meta name="description" content="Generated by create next app"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <main className={NotoSansArabic.className}>
                    {
                        Component.getLayout ?
                            Component.getLayout(
                                <Component {...pageProps} />
                            )
                            :
                            <Component {...pageProps} />
                    }
                </main>
            </ThemeProvider>
        </Provider>
    )
}
