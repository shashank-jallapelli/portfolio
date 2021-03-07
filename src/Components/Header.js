import React from 'react';
import '../custom.scss';
import {Helmet} from 'react-helmet';

import headerImg from '../images/under-construction.svg';
import cone from '../images/cone.svg';

let alignMainContent = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

const HeaderPage = () => {
  return (
    <div className="container">
      <Helmet>
          <title>Shashank Jallapelli | Web Developer</title>
      </Helmet>
      <main style={alignMainContent}>
          <h1 className="header-font">Under Construction...</h1>
          <div className="img-wrapper">
              <img src={headerImg} alt="under-construction-img" width="600"/>
              <div className="work-in-progress">
                <p>Work in progress...</p>
                <img src={cone} alt="cone" width="55" className="cone-img"/>
              </div>
          </div>
      </main>
    </div>
  )
}

export default HeaderPage