const INPUT_CHANGE = 'INPUT_CHANGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const defaultState = {
    inputValue: 'test',
    isFetching: false
}

const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching,
            }
        case INPUT_CHANGE:
            return {
                ...state,
                inputValue: action.text,
            }
        default: return state;
    }
}

export const inputChange = (text) => ({type: INPUT_CHANGE, text});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});

export default headerReducer;