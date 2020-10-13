import React from 'react';
import './LandingSection.css';
// import Accordion from "./Accordion"

function LandingSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'landing__hero-section' : 'landing__hero-section darkBg'}
      >
        <div className='landing_containers'>
          <div
            className='row landing__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='landing__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'landing__hero-subtitle'
                      : 'landing__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='landing__hero-img-wrapper'>
                <img src={img} alt={alt} className='landing__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Accordion /> */}
    </>
  );
}

export default LandingSection;
