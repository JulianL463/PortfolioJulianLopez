import React from 'react'

const RightCard = ({children, className, handleClick, isOpen}) => {
    return (
        <div className={`${className} dropShadow`}>
            <div className='info'>
                {children}
            </div>
            {isOpen ? <div className='Btn' onClick={handleClick}><p>&#60;</p></div> : <div className='Btn' onClick={handleClick}><p>&#62;</p></div>}
        </div>
    )
}

export default RightCard