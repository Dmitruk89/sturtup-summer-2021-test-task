const TOGGLE_SHOW_EMPTY = 'TOGGLE_SHOW_EMPTY';
const TOGGLE_SHOW_PROFILE = 'TOGGLE_SHOW_PROFILE';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_REPOS = 'SET_USER_REPOS';
const SET_CURRENT_PAGE= 'SET_CURRENT_PAGE';


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
    repositories: [],
    currentPage: 1,
    perPage: 4,
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        default: return state;
    }
}

export const toggleShowEmpty = (bool) => ({type: TOGGLE_SHOW_EMPTY, bool});
export const toggleShowProfile = (bool) => ({type: TOGGLE_SHOW_PROFILE, bool});
export const setUserData = (data) => ({type: SET_USER_DATA, data});
export const setUserRepos = (repos) => ({type: SET_USER_REPOS, repos});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});

export default profileReducer;