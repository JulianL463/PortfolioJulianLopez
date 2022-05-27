import styled from "styled-components";
import Title from "../Title";

const StyledTitle = styled(Title)`
    position:absolute;
    width:100%;
    text-align:center;

    h1{
        background: linear-gradient(0deg, rgba(0,0,0,0) 15%, rgba(142, 185, 250) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; 
    }
`

export default StyledTitle;