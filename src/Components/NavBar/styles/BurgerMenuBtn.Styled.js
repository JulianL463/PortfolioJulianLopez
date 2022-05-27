import styled from "styled-components";
import BurgerMenuBtn from "../BurgerMenuBtn";
import './BurgerMenuBtn.Anims.css';

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

        animation-fill-mode: forwards;
        animation-duration: 1s;
    }

    div:first-child{
        animation: ${({showMenu}) => (showMenu ? 'toggleTopLine' : 'toggleTopLineReverse')};
    }
    div:not(:first-child):not(:last-child){
        animation: ${({showMenu}) => (showMenu ? 'toggleMidLine' : 'toggleMidLineReverse')};
    }
    div:last-child{
        animation: ${({showMenu}) => (showMenu ? 'toggleBottomLine' : 'toggleBottomLineReverse')};
    }

`

export default StyledBurgerMenuBtn;