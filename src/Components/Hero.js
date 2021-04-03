import * as React from "react";
import '../stylesheets/common/custom.scss';
import '../stylesheets/hero.scss';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="main-content">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-10 col-xs-12">
                    <h1>Hello! I am Shashank Jallapelli</h1>
                    <p className="text-large">
                        A FrontEnd Developer who makes interactive UI that run across platforms & devices.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;