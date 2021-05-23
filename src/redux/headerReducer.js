const INPUT_CHANGE = 'INPUT_CHANGE';
const CLEAR_INPUT = 'CLEAR_INPUT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const defaultState = {
    inputValue: '',
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
        case CLEAR_INPUT:
            return {
                ...state,
                inputValue: '',
            }
        default: return state;
    }
}

export const inputChange = (text) => ({type: INPUT_CHANGE, text});
export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const clearInput = () => ({type: CLEAR_INPUT});

export default headerReducer;