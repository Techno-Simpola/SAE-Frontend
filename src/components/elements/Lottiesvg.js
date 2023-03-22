import React from 'react';
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

className Svg extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener('load', function (e) {
      // 4. configure the interactivity library
      create({
        player: '#firstLottie',
        actions: [
          {
            visibility: [0, 1],
            type: '',
            frames: [0, 100],
          },
        ],
      });
    });
  }
  render() {
    return (
      <div className="App">
        <div style={{ height: '400px' }}></div>
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          controls
          mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_fdxsy2co.json"
          style={{ width: '320px' }}
        ></lottie-player>
      </div>
    );
  }
}

export default Svg;