import { createAction } from "@reduxjs/toolkit";
import {
    getUsersRequest,
    deleteUserRequest,
    editUserRequest,
    createUserRequest,
} from "../../../api/requests";
import * as constants from "./constants";

const getUsersAction = createAction(constants.GET_USERS);
const editUserAction = createAction(constants.EDIT_USER);
const deleteUserAction = createAction(constants.DELETE_USER);

export const getUsers = () => {
    return (dispatch) => {
        getUsersRequest().then((response) => {
            dispatch(getUsersAction(response));
        });
    };
};

export const deleteUser = (userId) => {
    return (dispatch) => {
        deleteUserRequest(userId).then((response) => {
            if (response.status === "success") {
                dispatch(deleteUserAction(userId));
            }
        });
    };
};

export const editUser = (userId, newUser) => {
    return (dispatch) => {
        editUserRequest(userId, newUser).then((response) => {
            if (response.status === "success") {
                dispatch(editUserAction({ userId, newUser }));
            }
        });
    };
};

export const createUser = (newUser) => {
    return (dispatch) => {
        createUserRequest(newUser).then((response) => {
            if (response.status === "success") {
                getUsersRequest().then((response) =>
                    dispatch(getUsersAction(response))
                );
            }
        });
    };
};
