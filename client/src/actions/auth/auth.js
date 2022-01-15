import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./authType";

export const login = ({ id,
    isArabicLang,
    isValidTrans,
    responseMessagestring,
    responseMessageAr,
    responseMessageEn,
    loginId,
    password,
    ipAddress,
    browser,
    rememberMe }) => async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const body = JSON.stringify({
            id,
            isArabicLang,
            isValidTrans,
            responseMessagestring,
            responseMessageAr,
            responseMessageEn,
            loginId,
            password,
            ipAddress,
            browser,
            rememberMe
        });

        try {
            const res = await axios.post(
                "http://a.ldun.com.sa:5002/api/Accounts/sign-in",
                body,
                config
            )
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });

        } catch (err) {
            const errors = err.response.data.errors;
            console.log(errors)

            dispatch({
                type: LOGIN_FAIL,
            });
        }
    };