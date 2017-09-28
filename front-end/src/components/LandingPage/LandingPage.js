import React from 'react'
import { NavBar } from '../NavBar/NavBar'

export const LandingPage = () => {
  const componentClasses = ['landing-photo'];

  const mouseEnter = () => {
    console.log('mouse in');
    componentClasses.push('hide');
    console.log(componentClasses);
  }

  const mouseLeave = () => {
    console.log('mouse out');
    componentClasses.pop('hide');
    console.log(componentClasses);
  }

  return (
    <section id='landing-page-wrapper'>
      <header>
        <h1>Budee</h1>
        <NavBar></NavBar>
      </header>
      <main id='landing-main'>
        <section id='landing-photo-grid'>
          <img className={componentClasses.join(' ')} src='https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
          <img className='landing-photo img-1-1' src='https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
          <img className='landing-photo img-1-1' src='https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
          <img className='landing-photo bottom-row img-1-1' src='https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
          <img className='landing-photo bottom-row img-1-1' src='https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
          <img className='landing-photo bottom-row img-1-1' src='https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
        </section>
      </main>
    </section>
  )
}
