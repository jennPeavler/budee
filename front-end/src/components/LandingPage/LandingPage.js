import React from 'react';
import { NavBar } from '../NavBar/NavBar';

export const LandingPage = () => {
  const componentClasses = ['landing-photo'];

  const mouseEnter = () => {
    console.log('mouse in');
    componentClasses.push('hide');
    console.log(componentClasses);
  };

  const mouseLeave = () => {
    console.log('mouse out');
    componentClasses.pop('hide');
    console.log(componentClasses);
  };

  return (
    <section id="landing-page-wrapper">
      <header>
        <h1>Budee</h1>
        <NavBar />
      </header>
      <main id="landing-main">
        <section id="landing-photo-grid">
          <div className="landing-photo-container photo-container-bg-1">
            <div className="landing-photo-hidden-text-wrapper">
              <p className="landing-photo-hidden-text">look around!</p>
            </div>
            <img
              className={componentClasses.join(' ')}
              src="https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            />
          </div>
          <div className="landing-photo-container photo-container-bg-2">
            <div className="landing-photo-hidden-text-wrapper">
              <p className="landing-photo-hidden-text">jump jump!</p>
            </div>
            <img
              className={componentClasses.join(' ')}
              src="https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            />
          </div>
          <div className="landing-photo-container photo-container-bg-3">
            <div className="landing-photo-hidden-text-wrapper">
              <p className="landing-photo-hidden-text">huge stuff!</p>
            </div>
            <img
              className={componentClasses.join(' ')}
              src="https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            />
          </div>
          <div className="landing-photo-container photo-container-bg-4">
            <div className="landing-photo-hidden-text-wrapper">
              <p className="landing-photo-hidden-text">hey thats my mom!</p>
            </div>
            <img
              className={componentClasses.join(' ')}
              src="https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            />
          </div>
          <div className="landing-photo-container photo-container-bg-5">
            <div className="landing-photo-hidden-text-wrapper">
              <p className="landing-photo-hidden-text">dear gawd!</p>
            </div>
            <img
              className={componentClasses.join(' ')}
              src="https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            />
          </div>
          <div className="landing-photo-container photo-container-bg-6">
            <div className="landing-photo-hidden-text-wrapper">
              <p className="landing-photo-hidden-text">
                if there was a large amount of text it would look like this good
                sah!
              </p>
            </div>
            <img
              className={componentClasses.join(' ')}
              src="https://i.pinimg.com/736x/6a/62/3c/6a623c5f97c61f1b3bd3f3cd3cea9023--rainbow-heart-rainbow-magic.jpg"
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            />
          </div>
        </section>
      </main>
    </section>
  );
};
