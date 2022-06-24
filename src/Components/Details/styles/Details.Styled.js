import styled from "styled-components";
import Details from "../Details";

const StyledDetails = styled(Details)`
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    height:100%;

    /* text-align: justify; */

    

    .icons{
        display:flex;
        justify-content:space-between;

        margin-top: 30px;
        a{
            width:23%;
        }
    }
`

export default StyledDetails;