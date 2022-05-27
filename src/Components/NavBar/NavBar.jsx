import React, {useState} from 'react'
import {StyledNav} from './styles/NavBar.Styled';
import StyledBurgerMenuBtn from './styles/BurgerMenuBtn.Styled'
import ToggleBtnContainer from '../ToggleBtn/ToggleBtnContainer';

const NavBar = ({ className }) => {

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = (e) => {
        e.preventDefault();
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

    return (
        <StyledNav className={`${className} dropShadow`} showMenu={showMenu}>
            <StyledBurgerMenuBtn className={'hideDesktop'} openMenu={openMenu} showMenu={showMenu}/>
            <div className='links'>
                <ul>
                    <li><a href="/">Sobre mi</a></li>
                    <li><a href="/">Skills</a></li>
                    <li><a href="/">Proyectos</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </div>
            <ToggleBtnContainer/>
        </StyledNav>
    )
}

export default NavBar