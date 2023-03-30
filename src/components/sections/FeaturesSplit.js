import React from 'react';
import classNames from 'classnames';
import { Link , to} from 'react-router-dom';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import GIF from '../../assets/images/About.gif'
import Ted from '../../assets/images/ted3.JPG'
import './FeatureSplit.css'
import SAE from '../../assets/images/SAE.JPG'

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Know About SAE',
  
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id="split-box">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  ABOUT THE AWESOME US
                  </div>
                <h3 className="mt-0 mb-12">
                  What is SAE?
                  </h3>
                <p className="m-0" id="contained">
                SAEINDIA is a strategic alliance partner of SAE International registered in India as an Indian nonprofit engineering and scientific society dedicated to the advancement of the mobility industry in India. SAEINDIA Collegiate Club of NIT Durgapur was conceived in 2007 with an idea to integrate the students of the college into the international fabric of automobile engineering, adhering to the core principles laid down by SAE International. We are a student body composed of enthusiastic individuals, who are always at a constant strife to learn. This strife is the fuel that propels us to ideate, execute, and consequently deliver a dynamic gamut of events, which receive an extensive participation from various institutes.The outputs of our efforts could be appreciated in a better way by discussing various aspects of our club. 


                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={GIF}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  TEDx NIT Durgapur
                  </div>
                <h3 className="mt-0 mb-12">
                  SAE in TEDx
                  </h3>
                <p className="m-0">
                SAE also conducts TEDxNITDurgapur a part of TED along with Literary Circle, a worldwide, grassroots initiative, that aims to provide a platform for a symphony of voices from a plethora of spheres to propagate ingenious ideas and thoughts. / <Link id="tedx-link" className='color-success' to='/ted'>..Know More</Link>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src="https://images.pexels.com/photos/16083696/pexels-photo-16083696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  AAROHAN NIT DURGAPUT
                  </div>
                <h3 className="mt-0 mb-12">
                  SAE IN AAROHAN
                  </h3>
                <p className="m-0">
                SAE is also a part of Team Aavishkar which conducts Aarohan, NIT Durgapur's annual Techno-management fest, which includes all facets of technical and festive enthusiasm.
                 <Link id="Arhn-link" to='/arhn'>
                      ..Know More
                 </Link> </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src="https://images.pexels.com/photos/16083724/pexels-photo-16083724.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;