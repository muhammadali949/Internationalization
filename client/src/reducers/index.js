import { combineReducers } from "redux";
import auth from "./auth/auth";
import language from "./language/language";



export default combineReducers({
    auth,
    language
});