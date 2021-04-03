import * as React from "react";
import {Helmet} from 'react-helmet';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Contact from '../Components/Contact';

const IndexPage = () => {
  return (
    <div>
      <Helmet>
          <title>Shashank Jallapelli | Web Developer</title>
      </Helmet>
      <Navbar />
      <Hero />
      <Contact />
    </div>
  )
}

export default IndexPage;