import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "b41f7840-c3b4-49f4-a1a0-52bb59d4ebaf",
  },
});

export const authAPI = {
  getAuth() {
    return instance
      .get(`auth/me`)
      .then((response) => {
        return response.data; // Возвращаем весь ответ, не только data
      });
  },

  getAuthUsersProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`profile/${userId}`)
      .then((response) => {
        console.log("API Response:", response.data);
        return response;
      })
      .catch((error) => {
        console.error("API Error:", error);
        throw error;
      });
  },
};

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  hideUsersProduct(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  showUsersProduct(id) {
    console.log("Запрос на сервер для userID:", id);
    return instance
      .post(`follow/${id}`, {})
      .then((response) => {
        console.log("Ответ от сервера:", response.data);
        return response.data;
      })
      .catch((error) => {
        console.error("Ошибка в API:", error);
      });
  },
};
