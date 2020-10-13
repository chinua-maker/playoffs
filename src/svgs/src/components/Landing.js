import React from 'react';
import LandingSection from './LandingSection';
import { landingObjOne, landingObjTwo, landingObjThree, landingObjFour } from './LandingData';
// import Pricing from '../../Pricing';

function Home() {
  return (
    <>
      <LandingSection {...landingObjOne} />
      <LandingSection {...landingObjThree} />
      <LandingSection {...landingObjTwo} />
      {/* <Pricing /> */}
      <LandingSection {...landingObjFour} />
    </>
  );
}

export default Home;


