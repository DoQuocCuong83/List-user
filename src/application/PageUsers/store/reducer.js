import { createReducer } from "@reduxjs/toolkit";
import * as constants from "./constants";

const initialState = {
    userIds: [],
    usersById: {},
};

const usersReducer = createReducer(initialState, {
    [constants.GET_USERS]: (state, action) => {
        const userIds = action.payload.map((item) => item.id);
        const usersById = {};
        action.payload.forEach((item) => {
            usersById[item.id] = item;
        });
        state.userIds = userIds;
        state.usersById = usersById;
    },
    [constants.EDIT_USER]: (state, action) => {
        state.usersById[action.payload.userId] = action.payload.newUser;
    },
    [constants.DELETE_USER]: (state, action) => {
        delete state.usersById[action.payload];
    },
});

export default usersReducer;
