import axiosInstance from "./config";

export const getUsersRequest = () => {
    return axiosInstance.get("https://60c9be7b772a760017204445.mockapi.io/user");
}

export const createUserRequest = (newUser) => {
    return axiosInstance.post("https://60c9be7b772a760017204445.mockapi.io/user", {
        name: newUser.name,
        male: newUser.male,
    });
}

export const editUserRequest = (userId, newUser) => {
    return axiosInstance.put("https://60c9be7b772a760017204445.mockapi.io/user/" + userId, {
        name: newUser.name,
        male: newUser.male,
    });
}

export const deleteUserRequest = (userId) => {
    return axiosInstance.delete("https://60c9be7b772a760017204445.mockapi.io/user/" + userId);
}
