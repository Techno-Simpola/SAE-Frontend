import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import ButtonGroup from '../elements/ButtonGroup';
// import Button from '../elements/Button';
import '@lottiefiles/lottie-player';
// import Svg from '../elements/Lottiesvg';



const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {  

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content" style={{ textAlign: "center"}}>
           
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" style={{ fontSize: "48px", fontWeight: "bolder", color: "#CA3435" }} data-reveal-delay="400">
                SAENITD
                </p>
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;