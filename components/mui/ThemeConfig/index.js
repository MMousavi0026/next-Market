import {createTheme, lighten} from "@mui/material/styles";
import {Noto_Sans_Arabic} from "next/font/google";

const NotoSansArabic = Noto_Sans_Arabic({
    weight: '400',
    subsets: ['arabic'],
})

const theme = createTheme({
    direction: "rtl",
    components: {
        MuiButton: {
            styleOverrides: {
                root: {borderRadius: "20rem"}
            }
        },
        MuiTypography: {
            defaultProps: {
                variant: "button"
            }
        },
    },
    palette: {
        primary: {
            main: "#122d40",
        },
        secondary: {
            main: "#01e281"
        },
        tertiary: {
            main: "#1c3e56"
        },
        white: {
            main: "#ffffff"
        },
        black: {
            main: "#000"
        },
        inherit: {
            main: "#999999"
        }
    },
    typography: {
        fontFamily: NotoSansArabic.style.fontFamily
    },
})

export default theme;