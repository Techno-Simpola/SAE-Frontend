import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import '.././../assets/scss/style.scss';


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

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

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
   <>
   
    <section
      {...props}
      className={outerClasses}
    >
    
      <div className="container-sm">
        <div className={innerClasses}>

          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video=""
              
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src="https://i3.ytimg.com/vi/yXN0HLjVojg/hqdefault.jpg"
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>


          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/yXN0HLjVojg"
            videoTag="iframe" />
        </div>
      </div>
    </section>
    </>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;