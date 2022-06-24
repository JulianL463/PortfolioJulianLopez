import styled from "styled-components";
import RightCard from "../RightCard";

const StyledRightCard = styled(RightCard)`
    display:flex;
    
    z-index:0;

    width: 350px;//384
    height: ${({ isOpen }) => isOpen ? '600px' : '550px'};;

    border-radius:0 3px 3px 0;

    background: ${({ isOpen, theme }) => isOpen ? theme.colors.grad.darkReverse : theme.colors.grad.dark};

    transform: ${({ isOpen }) => isOpen ? 'translateX(0%)' : 'translateX(calc(-50% + 20px))'};

    transition: 1s;

    .info{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;

        
        padding: 40px 10px 40px 30px;
    }
    .Btn{
        width:20px;
        align-self:center;

        display:flex;
        justify-content:center;

        cursor: pointer;
    }
`

export default StyledRightCard;