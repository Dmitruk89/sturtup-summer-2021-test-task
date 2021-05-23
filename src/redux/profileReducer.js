const TOGGLE_HAS_USER = 'TOGGLE_HAS_USER';
const TOGGLE_SHOW_PROFILE = 'TOGGLE_SHOW_PROFILE';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_REPOS = 'SET_USER_REPOS';


const defaultState = {
    showProfile: false,
    hasUser: false,
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
        case TOGGLE_HAS_USER:
            return {
                ...state,
                hasUser: !state.hasUser,
            }
        case TOGGLE_SHOW_PROFILE:
            return {
                ...state,
                showProfile: !state.showProfile,
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

export const toggleHasUser = () => ({type: TOGGLE_HAS_USER});
export const toggleShowProfile = () => ({type: TOGGLE_SHOW_PROFILE});
export const setUserData = (data) => ({type: SET_USER_DATA, data})
export const setUserRepos = (repos) => ({type: SET_USER_REPOS, repos})

export default profileReducer;