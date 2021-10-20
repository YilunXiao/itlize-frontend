import axios from "axios";

import * as actionTypes from './actionTypes';

// starting an auth request (login/signup)
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

// auth successful
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

// auth failed
export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

// logout
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

// force logout after specified expiration time passes
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

// login/signup using username and password
export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());

        // url for login
        let url = `http://localhost:8080/users/login?userName=${username}&password=${password}`;

        //  post request to get auth token
        axios.post(url)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', `${response.data}`);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                // dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFailed(err.response.data.error));
            });
    };
};

//
export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

// check if currently logged in (token exists and token not expired)
export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};