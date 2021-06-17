import { createStore } from "redux";
import reducer from "./reducer";

function store(state = {}) {
    return createStore(reducer, state);
}

export default store;
