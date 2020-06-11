import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import thunk from 'redux-thunk';
import { events } from './events';
import { AsyncStorage } from 'react-native';


export const ConfigureStore = () => {  
    const config = {
        key: 'root',
        storage:AsyncStorage,
        debug: true
    };

    const store = createStore(
        persistCombineReducers(
            config,
            {
                events
            }
        ),
        applyMiddleware(thunk, logger)
    );
    
    const persistor = persistStore(store);

    return { persistor, store };
};