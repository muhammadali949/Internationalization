import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from "../../actions/auth/authType";
import { SIGN_OUT } from "../../actions/signout/type";


const initialState = {
    token: localStorage.getItem("token"),
    jwtToken: localStorage.getItem("jwtToken"),
    isAuthenticated: !!localStorage.getItem("token"),
    loading: false,
    roleDesc: localStorage.getItem("roleDesc")
};
console.log(initialState)
function auth(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.jwtToken);
            localStorage.setItem("roleDesc", payload.roleDesc);
            return {
                ...state,
                ...payload,
                loading: false,
                isAuthenticated: true,
                token: payload.jwtToken

            };

        case LOGIN_FAIL:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
            };
        case SIGN_OUT:
            localStorage.removeItem("token")
            localStorage.removeItem("roleDesc")
            localStorage.removeItem("jwtToken")
            return {
                token: null,
                isAuthenticated: false,
                loading: false,
                roleDesc: ''
            }
        default:
            return state;
    }
}
export default auth;