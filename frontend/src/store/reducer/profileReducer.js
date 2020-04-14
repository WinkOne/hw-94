import {FETCH_USER_SUCCESS} from "../action/profileAction";


const initialState = {
    user: null
};

const profileReducer = (state = initialState, action) => {
    if (action.type === FETCH_USER_SUCCESS){
        return {...state, user: action.response}
    }
    return state;
};

export default profileReducer;