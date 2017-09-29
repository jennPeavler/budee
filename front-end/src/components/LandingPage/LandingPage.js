import React from 'react';
import { NavBar } from '../NavBar/NavBar';

export const LandingPage = () => {
  return (
    <section id='landing-page-wrapper'>
      <header>
        <h1>Budee</h1>
        <NavBar />
      </header>
      <main id='landing-main'>
        <section id='landing-photo-grid'>
          <div className='landing-photo-container photo-container-bg-1'>
            <div className='landing-photo-hidden-text-wrapper'>
              <p className='landing-photo-hidden-text'>look around!</p>
            </div>
            <img
              className='landing-photo'
              src={require('../../assets/images/photo-grid/smoke-image-1.png')}
            />
          </div>
          <div className='landing-photo-container photo-container-bg-2'>
            <div className='landing-photo-hidden-text-wrapper'>
              <p className='landing-photo-hidden-text'>jump jump!</p>
            </div>
            <img
              className='landing-photo'
              src={require('../../assets/images/photo-grid/smoke-image-2.png')}
            />
          </div>
          <div className='landing-photo-container photo-container-bg-3'>
            <div className='landing-photo-hidden-text-wrapper'>
              <p className='landing-photo-hidden-text'>huge stuff!</p>
            </div>
            <img
              className='landing-photo'
              src={require('../../assets/images/photo-grid/smoke-image-3.png')}
            />
          </div>
          <div className='landing-photo-container photo-container-bg-4'>
            <div className='landing-photo-hidden-text-wrapper'>
              <p className='landing-photo-hidden-text'>hey thats my mom!</p>
            </div>
            <img
              className='landing-photo'
              src={require('../../assets/images/photo-grid/smoke-image-4.png')}
            />
          </div>
          <div className='landing-photo-container photo-container-bg-5'>
            <div className='landing-photo-hidden-text-wrapper'>
              <p className='landing-photo-hidden-text'>dear gawd!</p>
            </div>
            <img
              className='landing-photo'
              src={require('../../assets/images/photo-grid/smoke-image-5.png')}
            />
          </div>
          <div className='landing-photo-container photo-container-bg-6'>
            <div className='landing-photo-hidden-text-wrapper'>
              <p className='landing-photo-hidden-text'>
                if there was a large amount of text it would look like this good
                sah!
              </p>
            </div>
            <img
              className='landing-photo'
              src={require('../../assets/images/photo-grid/smoke-image-6.png')}
            />
          </div>
        </section>
      </main>
    </section>
  );
};
