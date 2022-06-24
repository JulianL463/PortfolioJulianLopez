import React from 'react'

const LeftCard = ({className,children, isOpen}) => {
    return (
        <div className={`${className} dropShadow`}>
            {children}
        </div>
    )
}

export default LeftCard