import styled from "styled-components";
import LeftCard from "../LeftCard";

const StyledLeftCard = styled(LeftCard)`
    display:flex;
    align-items:center;
    justify-content:center;

    position: relative;

    width: 450px;//512
    height: 600px;//670

    z-index:1;

    padding: 40px 30px;


    border-radius: ${({isOpen})=>isOpen?'3px 0 0 3px':'3px'};

    background: ${props => props.theme.colors.grad.lightReverse};

    transform: ${({ isOpen }) => isOpen ? 'translateX(0%)' : 'translateX(39%)'};


    transition: 1s;

`

export default StyledLeftCard;