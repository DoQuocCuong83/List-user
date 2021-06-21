import { combineReducers } from "redux";
import usersReducer from "../application/PageUsers/store/reducer";


export default combineReducers({
    users: usersReducer,
});
