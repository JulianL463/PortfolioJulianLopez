import React, {useState} from 'react'
import StyledLeftCard from './styles/LeftCard.Styled';
import StyledRightCard from './styles/RightCard.Styled';

const CardsContainer = ({className, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <div className={className}>
            {children && <>
                <StyledLeftCard isOpen={isOpen}>{children[0]}</StyledLeftCard>
                <StyledRightCard handleClick={handleClick} isOpen={isOpen}>{children[1]}</StyledRightCard>
            </>}
        </div>
    )
}

export default CardsContainer