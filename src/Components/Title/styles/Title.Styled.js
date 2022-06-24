import styled from "styled-components";
import Title from "../Title";

const StyledTitle = styled(Title)`
    position:absolute;
    width:100%;
    text-align:center;
    z-index:-1;

    h1{
        background: ${(props) => props.theme.colors.grad.lightFadeDown};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }
`

export default StyledTitle;