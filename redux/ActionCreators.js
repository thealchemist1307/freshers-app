import * as ActionTypes from './ActionTypes';
import EVENT from "../shared/event"
import { genTimeBlock } from 'react-native-timetable';

/* COMMENTS START */
export const fetchEvents = () => (dispatch) => {
    return fetch(EVENT)
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error  = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errMess  = new Error(error.message)
            throw errMess;
        })
        .then(response => response.json())
        .then(event => dispatch(addEvents(event)))
        .catch(error => dispatch(eventssFailed(error.message)))
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
    }, 2000); // Simulating an async server call
};
/* COMMENTS END */
