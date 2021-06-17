const stateDefault = {
    userIds: [],
    usersById: {},
};

const reducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "GET_USERS":
            const userIds = action.payload.map((item) => item.id);
            const usersById = {};
            action.payload.forEach((item) => {
                usersById[item.id] = item;
            });
            return {
                ...state,
                userIds: userIds,
                usersById: usersById,
            };
        case "DELETE_USER":
            delete state.usersById[action.payload];
            return {
                ...state,
            };
        case "EDIT_USER":
            state.usersById[action.userId] = action.newUser;
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;
