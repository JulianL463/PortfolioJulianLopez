import { createGlobalStyle } from "styled-components"

const StyledGlobals = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing:border-box;
    }

    body{
        min-height:100vh;
        font-family: "Gothic A1", "Times New Roman";
        color: ${props => props.theme.colors.solid.white};
        background: ${props => props.theme.colors.solid.white};
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        letter-spacing: 0.125em;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p{
        margin:0;
    }

    h2,
    h3,
    h4,
    p{
        text-shadow: 0 0 5px ${props => props.theme.colors.transp.dark};
    }

    h1{
        font-size: ${props => props.theme.font.size.xl};
    }
    h2{
        font-size: ${props => props.theme.font.size.l};
    }

    h1,h2{
        text-transform: uppercase;
    }
    h3, label{
        font-size: ${props => props.theme.font.size.m};
    }
    h2, h3, label{
        font-weight: ${props => props.theme.font.weight.bold};
    }

    h4{
        font-size: ${props => props.theme.font.size.s};
        font-weight: ${props => props.theme.font.weight.bold};
    }

    p{
        font-size: ${props => props.theme.font.size.s};
        font-weight: ${props => props.theme.font.weight.medium};
    }

    ul{
        list-style: none;
        padding:0;
    }

    a, a:visited{
        color:inherit;
        text-decoration:none;
    }
    
    input, button, textarea{
        font-style: inherit;
    }

    img{
        max-width:100%;
        display:block;
    }

    @media (prefers-reduced-motion: reduce){
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    // Utilities //

    .dropShadow{
        box-shadow: 0 0 10px ${props => props.theme.colors.transp.dark};  
    }
    .glow{
        box-shadow: 0 0 30px ${props => props.theme.colors.transp.light};  
    }
    .hideDesktop{
        @media (min-width: 728px) {
            display:none;
        }
    }
    .hideMobile{
        @media (max-width: 728px) {
            display:none;
        }
    }
`

export default StyledGlobals;