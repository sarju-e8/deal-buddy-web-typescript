import { createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { common } from "@mui/material/colors";

declare module "@mui/material/styles" {

    interface Theme {
        customBackgroundColor: {
            transparentBlack: string;
            imageBlurBgColor: String;
        }
    }

    interface ThemeOptions {
        customBackgroundColor?: {
            transparentBlack?: string;
            imageBlurBgColor?: string;
        }
    }

    interface Theme {
        buttonGradient: {
            greenGradient: string;
            yellowGradient: string;
        }
    }

    interface ThemeOptions {
        buttonGradient?: {
            greenGradient?: string;
            yellowGradient?: string;
        }
    }

    interface TypographyVariants {
        cardSubtitle: React.CSSProperties;
        paragraph: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        cardSubtitle: React.CSSProperties;
        paragraph?: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        cardSubtitle: true;
        h1: true;

    }
}

export const theme = createTheme({
    customBackgroundColor: {
        transparentBlack: "#00000080",
        imageBlurBgColor: "red",
    },
    palette: {

        primary: {
            main: "#00c86d",
            dark: "#309868",
            // contrastText:""
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
            // 600: "#a8a8a8",
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

    buttonGradient: {
        greenGradient: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)",
        yellowGradient: "linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)",
    },

    typography: {
        fontFamily: "Open Sans",
        // offer and deal image 
        h1: {
            fontSize: "36px",
            fontWeight: 700,
            lineHeight: "44px",
        },
        // main find the best deal title
        h2: {
            // md: "40px",
            fontSize: "30px",
            fontWeight: 600,
            lineHeight: "38px",
        },
        // popular sales common component titles
        h3: {
            fontSize: "26px",
            fontWeight: 700,
            lineHeight: "31.2px",
        },
        // join the deals email subscribe 
        h4: {
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: 600,
        },
        // footer links title and top category title
        h5: {
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "28px",
        },
        // popular card/sales images title Hyper Drive
        h6: {
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "22.4px",
        },
        button: {
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "19.6px",
        },
        subtitle1: {
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19.6px",
        },
        body1: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "19.6px",
        },
        body2: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "19.6px",
        },
        cardSubtitle: {
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "28px",
        },
        paragraph: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "25.2px",
        },

    }


})