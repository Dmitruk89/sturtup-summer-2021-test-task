import  { createStore, combineReducers} from 'redux';
import headerReducer from './headerReducer';

const reducers = combineReducers({
    header: headerReducer,
})

const store = createStore(reducers);

export default store;