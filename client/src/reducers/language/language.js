import { LANGUAGE, LANGUAGE_TWO } from "../../actions/language/languageType";



const initialState = {
    isArabicLang: false
};
function language(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LANGUAGE:
            return {
                ...state,
                isArabicLang: payload
            };
        default:
            return state;
    }
}
export default language;