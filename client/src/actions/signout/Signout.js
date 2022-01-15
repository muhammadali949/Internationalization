import { SIGN_OUT } from "./type";

export const signout = () => async (dispatch) => {
    dispatch({
        type: SIGN_OUT,
    });

};