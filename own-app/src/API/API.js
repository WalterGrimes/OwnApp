import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0", // Используем baseURL
    headers: {
        'API-KEY': 'b41f7840-c3b4-49f4-a1a0-52bb59d4ebaf',
    }
});

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance
            .get(`/users?page=${pageNumber}&count=${pageSize}`) // Убираем baseUrl, он уже в instance
            .then(response => response.data);
    }
};
