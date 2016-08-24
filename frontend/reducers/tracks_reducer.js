import {TracksConstants} from '../actions/tracks_actions.js';
import  merge  from 'lodash/merge';

let curTrackId = 0;

const tracksReducer = (state = {}, action) => {
  switch (action.type) {
    case TracksConstants.START_RECORDING:
      curTrackId++;
      let newObj = {};

      let newTrack = {
        id: curTrackId,
        name: `Track ${curTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };

      newObj[curTrackId] = newTrack;
      return merge({}, state, newObj);
    case TracksConstants.STOP_RECORDING:
      let currTrack = merge({}, state[curTrackId]);

      currTrack.roll.push({
        notes: [],
        timeSlice: action.timeNow - state[curTrackId].timeStart
      });
      let newState2 = merge({}, state, {curTrackId: currTrack});
      console.log(newState2);
      return newState2;
    case TracksConstants.ADD_NOTES:
      let currTrack2 = merge({}, state[curTrackId]);
      console.log("t1");
      console.log(currTrack2);

      currTrack2.roll.push({
        notes: action.notes,
        timeSlice: action.timeNow - state[curTrackId].timeStart
      });

      let newObj2 = {};
      newObj2[curTrackId] = currTrack2;

      console.log("t2");
      console.log(newObj2);
      return merge({}, state, newObj2);
    default:
      return state;
  }
};

export default tracksReducer;
