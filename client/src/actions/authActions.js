import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';
import { returnErrors } from './errorActions';
//load user from token
export const loadUser = () => (dispatch, getState) => {
    dispatch({
        type: USER_LOADING
    }); //set user to loading state


    axios
        .get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status)); //dispatch to error reducer
            dispatch({
                type: AUTH_ERROR
            })
        });
}

//Set up config/header and token

export const tokenConfig = (getState) => {
     //get the token from current state
     const token = getState().auth.token;

     //headers
     const config = {
         headers: {
             "Content-type": "application/json"
         }
     }

     //if token then add to headers
     if(token) {
         config.headers['x-auth-token'] = token;
     }

     return config;
};

export const register = ({ name, email, password}) => (dispatch) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    //Request body
    const body = JSON.stringify({ name, email, password});

    axios
        .post('/api/users', body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')); //dispatch to error reducer
            dispatch({
                type: REGISTER_FAIL
            })
        });
}

export const login = ({ email, password }) => (dispatch) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    };

    //Request body
    const body = JSON.stringify({ email, password });

    axios
        .post('/api/auth', body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_FAIL
            })
        });
}
export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS
    })
}
