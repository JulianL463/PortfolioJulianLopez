import styled from "styled-components";
import BurgerMenuBtn from "../BurgerMenuBtn";
import {
    AnimBottomLine,
    AnimBottomLineReverse,
    AnimTopLine,
    AnimTopLineReverse,
    AnimMidLine,
    AnimMidLineReverse 
} from "./BurgerMenuBtn.Anims";

const StyledBurgerMenuBtn = styled(BurgerMenuBtn)`

    display:flex;
    flex-direction:column;
    justify-content: space-between;

    height: 25px;
    aspect-ratio: 1.2;

    div{
        height:3px;
        width:100%;

        background-color: ${props => props.theme.colors.solid.white};
        transform-origin: center;
    }

    div:first-child{
        animation: ${({showMenu}) => (showMenu ? AnimTopLine : AnimTopLineReverse)};
    }
    div:not(:first-child):not(:last-child){
        animation: ${({showMenu}) => (showMenu ? AnimMidLine : AnimMidLineReverse)};
    }
    div:last-child{
        animation: ${({showMenu}) => (showMenu ? AnimBottomLine : AnimBottomLineReverse)};
    }

`

export default StyledBurgerMenuBtn;