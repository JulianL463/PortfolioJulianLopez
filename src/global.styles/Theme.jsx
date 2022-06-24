import React from "react";
import { ThemeProvider } from 'styled-components';

const white = '255, 255, 255';
const light = '142, 185, 250';
const mid = '96, 135, 192';
const dark = '58, 67, 82';

const theme = {
    colors: {
        solid: {
            white: `rgb(${white})`,
            light: `rgb(${light})`,
            mid: `rgb(${mid})`,
            dark: `rgb(${dark})`
        },
        transp: {
            white: `rgba(${white}, 0.7)`,
            light: `rgba(${light}, 0.7)`,
            mid: `rgba(${mid}, 0.7)`,
            dark: `rgba(${dark}, 0.7)`
        },
        grad: {
            light: `linear-gradient(0deg, rgb(${mid}) 80%, rgba(${light}) 20%)`,
            lightReverse: `linear-gradient(180deg, rgb(${mid}) 20%, rgba(${light}) 80%)`,
            lightFadeDown:`linear-gradient(0deg, rgba(0,0,0,0) 15%, rgba(${light}) 100%)`,
            dark: `linear-gradient(0deg, rgb(${dark}) 0%, rgba(${mid}) 90%)`,
            darkReverse: `linear-gradient(180deg, rgb(${dark}) 0%, rgba(${mid}) 90%)`,
        }
    },
    font: {
        size: {
            s: '0.95rem',
            m: '1.2rem',
            l: '2rem',
            xl: '15rem'
        },
        weight: {
            medium: '500',
            bold: '700',
        }
    }
};

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
}

export default Theme;