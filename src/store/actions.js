import {
    getUsersRequest,
    deleteUserRequest,
    editUserRequest,
    createUserRequest,
} from "../api/requests";

export const getUsersAction = (users) => ({
    type: "GET_USERS",
    payload: users,
});

export const deleteUserAction = (userId) => ({
    type: "DELETE_USER",
    payload: userId,
});

export const editUserAction = (userId, newUser) => ({
    type: "EDIT_USER",
    userId: userId,
    newUser: newUser,
});

export const getUsers = (dispatch) => {
    getUsersRequest().then((response) => {
        dispatch(getUsersAction(response));
    });
};

export const deleteUser = (userId, dispatch) => {
    deleteUserRequest(userId).then((response) => {
        if (response.status === "success") {
            dispatch(deleteUserAction(userId));
        }
    });
};

export const editUser = (userId, newUser, dispatch) => {
    editUserRequest(userId, newUser).then((response) => {
        if (response.status === "success") {
            dispatch(editUserAction(userId, newUser));
        }
    });
};

export const createUser = (newUser, dispatch) => {
    createUserRequest(newUser).then((response) => {
        if (response.status === "success") {
            getUsersRequest()
            .then(response => dispatch(getUsersAction(response)));
        }
    });
};
