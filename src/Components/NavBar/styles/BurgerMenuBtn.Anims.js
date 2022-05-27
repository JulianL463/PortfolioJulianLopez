import {keyframes, css} from "styled-components"

const TopLine = keyframes`
    0% {
        transform: translateY(0px) rotate(0deg);
    }

    30% {
        transform: translateY(11px) rotate(0deg);

    }

    50% {
        transform: translateY(11px) rotate(0deg);

    }

    100% {
        transform: translateY(11px) rotate(45deg);
    }
`
const TopLineReverse = keyframes`
    0% {
        transform: translateY(11px) rotate(45deg);
    }

    30% {
        transform: translateY(11px) rotate(0deg);

    }

    50% {
        transform: translateY(11px) rotate(0deg);

    }

    100% {
        transform: translateY(0) rotate(0deg);
    }
`
const MidLine = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 1;

    }

    60% {
        opacity: 0;
    }

    100% {
        opacity: 0;
    }
`
const MidLineReverse = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    60% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
`


const BottomLine = keyframes`
        0% {
        transform: translateY(0px) rotate(0deg);
    }

    30% {
        transform: translateY(-11px) rotate(0deg);

    }

    50% {
        transform: translateY(-11px) rotate(0deg);

    }

    100% {
        transform: translateY(-11px) rotate(-45deg);
    }

`

const BottomLineReverse = keyframes`
    0% {
        transform: translateY(-11px) rotate(-45deg);
    }

    30% {
        transform: translateY(-11px) rotate(0deg);

    }

    50% {
        transform: translateY(-11px) rotate(0deg);

    }

    100% {
        transform: translateY(0) rotate(0deg);
    }

`
export const AnimTopLine = css`
    ${TopLine} 1s normal forwards;
`
export const AnimTopLineReverse = css`
    ${TopLineReverse} 1s normal forwards;
`
export const AnimMidLine = css`
    ${MidLine} 1s normal forwards;
`
export const AnimMidLineReverse = css`
    ${MidLineReverse} 1s normal forwards;
`
export const AnimBottomLine = css`
    ${BottomLine} 1s normal forwards;
`
export const AnimBottomLineReverse = css`
        ${BottomLineReverse} 1s normal forwards;
`