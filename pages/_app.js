import Layout from "@/components/Layout";
import {ThemeProvider} from "@mui/material/styles";
import {Provider} from "react-redux";
import store from "@/redux/store";
import theme from "@/components/mui/ThemeConfig";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {
                    Component.getLayout ?
                        Component.getLayout(
                            <Component {...pageProps} />
                        )
                        :
                        <Component {...pageProps} />
                }
            </ThemeProvider>
        </Provider>
    )
}
