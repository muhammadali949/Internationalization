import { LANGUAGE, LANGUAGE_TWO } from "./languageType";

export const language = (lang) => async (dispatch) => {

    dispatch({
        type: LANGUAGE,
        payload: lang,

    });

};
