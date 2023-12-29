import { createTheme } from "@mui/material";
import { common } from "@mui/material/colors";

declare module "@mui/material/styles" {

    interface Theme {
        customColor: {
            danger: string;
        }
    }

    interface ThemeOptions {
        status?: {
            danger?: string;
        }
    }
}

export const theme = createTheme({
    status: {
        danger: "red",
    },
    palette: {

        primary: {
            main: "#00c86d",
            dark: "#309868",
        },
        secondary: {
            main: "#fff400",
            light: "#fff000",
        },
        common: {
            black: "#000",
            white: "#fff",
        },
        error: {
            main: "#ff0000",
        },
        grey: {
            300: "#f0f0f0",
            400: "#ededed",
            500: "#a9a9a9",
        },
        background: {
            default: "#e3faed",
            paper: "rgba(67, 223, 154, .05)",
        },
        text: {
            primary: "#00c86d",
            secondary: "#00000080",
            disabled: "rgba(0, 0, 0)",
        },
    },

    typography: {
        fontFamily: "Open Sans",
        h1: {
            xlFont: "36px",
            fontWeight: 700,
            xlLine: "44px",
        },
        h2: {
            xlFont: "30px",
            fontWeight: 600,
            xlLine: "38px",
        },
        h3: {
            xlFont: "26px",
            fontWeight: 700,
            xlLine: "31.2px",
        },
        h4: {
            xlFont: "24px",
            xlLine: "600",
            fontWeight: 600,
        },
        h5: {
            xlFont: "18px",
            fontWeight: 700,
            xlLine: "28px",
        },
        h6: {
            xlFont: "16px",
            fontWeight: 500,
            xlLine: "22.4px",
        },
        button: {
            xlFont: "14px",
            fontWeight: 500,
            xlLine: "19.6px",
        },

    }
})