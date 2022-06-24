import React from 'react'

const Details = ({className}) => {
  return (
    <div className={className}>    
        <div>
            <h4>Pregunta corta de mi?</h4>
            <p>Frontend Developer con muchas ganas de  resolver problemas que 
            Frontend Developer con muchas.</p>
        </div>
        <div>
            <h4>Pregunta corta de mi?</h4>
            <p>Frontend Developer con muchas ganas de  resolver problemas que 
            Frontend Developer con muchas.</p>
        </div>
        <div>
            <h4>Pregunta corta de mi?</h4>
            <p>Frontend Developer con muchas ganas de  resolver problemas que 
            Frontend Developer con muchas.</p>
        </div>

        <div className='icons'>
            <a href="https://drive.google.com/file/d/12KS9alF2rMVEb1Ri-rgI3zO0yKs3dZn8/view?usp=sharing" target="_blank" rel="noreferrer"><img src="imgs\CVIconWhite.png" alt="CV Download" /></a>
            <a href="https://github.com/JulianL463" target="_blank" rel="noreferrer"><img src="imgs\githubIconWhite.png" alt="github" /></a>
            <a href="https://www.linkedin.com/in/julianlopez2818/" target="_blank" rel="noreferrer"><img src="imgs\LinkedinIconWhite.png" alt="Linkedin" /></a>
        </div>

    </div>
  )
}

export default Details