import React, { useState } from 'react'
import StyledToggleBtn from './styles/ToggleBtn.Styled'

const ToggleBtnContainer = () => {

    const [isActive, setIsActive] = useState(false);
    

    const toggleState = () =>{
        setIsActive(!isActive);
        console.log(isActive);
    }

    return (
        <StyledToggleBtn toggleState={toggleState} isActive={isActive}/>
    )
}

export default ToggleBtnContainer