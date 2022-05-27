import React from 'react'

const ToggleBtn = ({ className, toggleState }) => {
    return (
        <div className={className} onClick={toggleState}>
            <h4>ES</h4>
            <div>
                <div></div>
            </div>
            <h4>EN</h4>
        </div>
    )
}

export default ToggleBtn;