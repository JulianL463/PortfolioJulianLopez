import styled from "styled-components";
import ToggleBtn from "../ToggleBtn";

const StyledToggleBtn = styled(ToggleBtn)`

    cursor:pointer;

    display: flex;
    gap:5px;
    align-items: center;

    

    div{
        height:25px;
        aspect-ratio:2;
        border-radius: 25px;
        background-color: ${porps => porps.theme.colors.solid.white};
        box-shadow: 0 4px 4px ${props => props.theme.colors.transp.dark} inset;



        div{
            position:relative;

            height:100%;
            width: ${({isActive}) => (isActive ? '100%' : 'calc(100%/2)')};

            border-radius: 12px;
            background-color: ${porps => porps.theme.colors.solid.mid};

            &::before{
                content:"";
                position:absolute;
                right:0;
                height:100%;
                aspect-ratio:1;
                border: 1px solid ${porps => porps.theme.colors.solid.light};
                border-radius: 50%;
                background-color: ${porps => porps.theme.colors.solid.white};
            } 

            transition: 0.5s;
        }
        
    }
`
export default StyledToggleBtn;