import  { createStore, combineReducers} from 'redux';
import headerReducer from './headerReducer';
import profileReducer from './profileReducer';

const reducers = combineReducers({
    header: headerReducer,
    profile: profileReducer
})

const store = createStore(reducers);

export default store;