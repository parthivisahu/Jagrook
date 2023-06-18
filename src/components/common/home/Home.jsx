import React from 'react';
import Hero from './hero/Hero';
import AboutCard from '../../about/AboutCard';
import HAbout from './HAbout';
import Gallery from '../../gallery/Gallery';
import Timeline from '../../timeline/Timeline';



const Home = () => {
  return (
    <div>
        <Hero />
        <AboutCard />
        <Gallery />
        <HAbout />
        <br /> <br /> <br /> <br /> 
        <Timeline />
    </div>
  )
}

export default Home