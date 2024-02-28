import {createTheme, lighten} from "@mui/material/styles";

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
                variant: "span"
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
    }
})

export default theme;