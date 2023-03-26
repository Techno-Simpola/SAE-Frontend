import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Lastpart from '../components/sections/Lastpart';
// import Timeline from '../components/sections/Timeline';
import Faculty from '../components/sections/Faculty';
import OffB from '../components/sections/OffB';
// import Cta from '../components/sections/Cta';
import {Baja} from '../components/sections/Baja'
import { Cryptech } from '../components/sections/Cryptech';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Testimonial topDivider />
      <Faculty />
      {/* <OffB /> */}
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/* <Timeline /> */}
      {/* <FeaturesTiles /> */}
      <Baja/>
      <Cryptech/>
      <Lastpart/>
    </>
  );
}

export default Home;