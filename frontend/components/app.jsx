import React from 'react';
import SynthContainer from './synth/synth_container.jsx';
import RecorderContainer from './recorder/recorder_container.jsx';

const App = () => (
  <div className="synth_container">
    <SynthContainer />
    <RecorderContainer />
  </div>

);


export default App;
