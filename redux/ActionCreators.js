import * as ActionTypes from './ActionTypes';
import EVENT from "../shared/event"
import { genTimeBlock } from 'react-native-timetable';

/* COMMENTS START */
export const fetchEvents = () => (dispatch) => {
        dispatch(addEvents(EVENT))
        
};

export const eventsFailed = (errMess) => ({
    type: ActionTypes.EVENTS_FAILED,
    payload: errMess
});


export const addEvents = (events) => ({
    type: ActionTypes.ADD_EVENTS,
    payload: events
});
export const addEvent = (event) => ({
    type: ActionTypes.ADD_EVENT,
    payload: event
});

export const postEvent = (title,location,startTime,day) => (dispatch) => {

    const newEvent = { title: title,
        startTime: genTimeBlock(day, startTime,0),
        endTime: genTimeBlock(day, startTime+1,0),
        location: location,
         }
         console.warn(newEvent)
    setTimeout(() => {
        dispatch(addEvent(newEvent));
    }, 2000);// Simulating an async server call
};
/* COMMENTS END */
