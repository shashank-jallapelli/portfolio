import React from 'react';
import '../custom.scss';

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
        <main style={alignMainContent}>
            <h1 className="header-font">Under Construction...</h1>
            <div className="img-wrapper">
                <img src={headerImg} alt="under-construction-img" width="600"/>
                <img src={cone} alt="cone" width="55" className="cone-img"/>
            </div>
        </main>
    </div>
  )
}

export default HeaderPage