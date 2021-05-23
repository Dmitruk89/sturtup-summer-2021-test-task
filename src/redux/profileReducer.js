const TOGGLE_SHOW_EMPTY = 'TOGGLE_SHOW_EMPTY';
const TOGGLE_SHOW_PROFILE = 'TOGGLE_SHOW_PROFILE';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_REPOS = 'SET_USER_REPOS';


const defaultState = {
    showProfile: false,
    showEmpty: false,
    hasRepos: false,
    reposCount: null,
    profile: {
        avatar: null,
        fullName: null,
        linkName: null,
        linkUrl: null,
        followers: null,
        following: null,
        repos: null,
    },
    repositories: []
}

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_EMPTY:
            return {
                ...state,
                showEmpty: action.bool,
            }
        case TOGGLE_SHOW_PROFILE:
            return {
                ...state,
                showProfile: action.bool,
            }
        case SET_USER_DATA:
            return {
                ...state,
                profile: {...action.data},
            }
        case SET_USER_REPOS:
            return {
                ...state,
                repositories: [...action.repos],
            }
        default: return state;
    }
}

export const toggleShowEmpty = (bool) => ({type: TOGGLE_SHOW_EMPTY, bool});
export const toggleShowProfile = (bool) => ({type: TOGGLE_SHOW_PROFILE, bool});
export const setUserData = (data) => ({type: SET_USER_DATA, data})
export const setUserRepos = (repos) => ({type: SET_USER_REPOS, repos})

export default profileReducer;