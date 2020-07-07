import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

//RETURN ERRORS

export const returnErrors = (error) => {
    return {
        type: GET_ERRORS,
        payload: {
            error
        }
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
