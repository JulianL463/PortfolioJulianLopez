import React from 'react'

const BurgerMenuBtn = ({className, openMenu}) => {
  return (
    <div className={className} onClick={openMenu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default BurgerMenuBtn