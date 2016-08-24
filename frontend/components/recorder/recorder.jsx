import React from 'react';

const Recorder = ({ isRecording, tracks, startRecording, stopRecording }) => (
  <div className="button-bar">
    <h4>Record a track</h4>
    <button onClick={startRecording}
            disabled={isRecording ? 'disabled' : ''}>Start</button>
          <button onClick={stopRecording}
            disabled={isRecording ? '' : 'disabled' }>Stop</button>
  </div>
);

export default Recorder;
