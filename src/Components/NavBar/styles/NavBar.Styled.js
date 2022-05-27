import styled from "styled-components";

export const StyledNav = styled.nav`

    display:flex;
    align-items:center;
    justify-content:space-between;

    position:sticky;
    top:0;
    z-index:10;
    height: 50px;
    padding: 0 10px;

    

    &::before{
        content: '';
        position:absolute;
        top:0;
        left: 0;
        z-index:-1;
        width:100%;
        height:50px;
        background: ${props => props.theme.colors.solid.light};
    }

    .links{
        width: 100%;
        position: absolute;
        
        top: ${({showMenu}) => showMenu ? '49px' : '-200px'};
        left: 0;
        z-index:-2;

        background-color: ${props => props.theme.colors.transp.light};
        backdrop-filter: blur(10px);

        ul{
            display:flex;
            flex-direction: column;
            gap: 2em;

            li{

                text-align:center;
                font-size: ${props => props.theme.font.size.s};
                font-weight: ${props => props.theme.font.weight.bold};
                text-transform: uppercase;
            }
        }

        transition: 0.5s ;
    }

    .slider{
        text-align:right;
    }

    @media (min-width:728px){
        display:flex;
        background: ${props => props.theme.colors.solid.light};
        

        &::before{
            content:'';
            position: static;
            width:auto;
            height:auto;
        } 

        .links{
            position: static;
            width: auto;
            background: none;
            backdrop-filter: none;


            ul{
                flex-direction: row;
            }
        }
    }
`