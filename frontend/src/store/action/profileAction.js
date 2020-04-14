import {push} from "connected-react-router";
import axiosApi from "../../axios-api";
import {registerUserFailure, registerUserRequest, registerUserSuccess} from "./usersActions";


export const FETCH_USER_REQUEST = 'FETCH_ARTIST_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_ARTIST_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_ARTIST_ERROR';

export const fetchUserRequest = () => {
    return {type: FETCH_USER_REQUEST}
};

export const fetchUserSuccess = (response) => {
    return {type: FETCH_USER_SUCCESS, response}
};

export const fetchUserError = () => {
    return {type: FETCH_USER_ERROR}
};


export const pushProfile = (id) => {
    return async dispatch => {
        dispatch(push('/profile/' + id));
    }
}
export const getProfileUser = () => {
    return dispatch => {
        dispatch(fetchUserRequest());
        return axiosApi.get('/user').then(response => {
            dispatch(fetchUserSuccess(response.data));
        }, error => {
            dispatch(fetchUserError(error));
        });
    }
};

export const editUser = (id, data) => {
    return async dispatch => {
        try {
            dispatch(registerUserRequest());
            await axiosApi.put('/users/' + id, data);
            dispatch(registerUserSuccess());
            dispatch(getProfileUser())
            dispatch(push('/profile'));
        } catch (error) {
            if (error.response) {
                dispatch(registerUserFailure(error.response.data));
            } else {
                dispatch(registerUserFailure({global: 'Network error or no internet'}));
            }
        }
    }
}