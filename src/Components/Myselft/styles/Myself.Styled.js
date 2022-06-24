import styled from "styled-components";
import Myself from "../Myself";

const StyledMyself = styled(Myself)`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;

    height:100%;

    img{
        width:70%;
        border-radius: 50%;

        border: 2px solid white;

        -webkit-filter: drop-shadow(0px 0px 13px ${props => props.theme.colors.transp.white});
        filter: drop-shadow(0px 0px 13px ${props => props.theme.colors.transp.white});
    }

    p{
        text-align:center;
    }
`

export default StyledMyself;