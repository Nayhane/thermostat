import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers';

const persistConfig = {
    key: 'data',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const enhancer = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(persistedReducer, enhancer)
export const persistor = persistStore(store)