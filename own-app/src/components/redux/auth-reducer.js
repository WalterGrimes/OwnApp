import { authAPI } from "../../API/API";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    default:
      return state;
  }
};

// Action creator для установки данных пользователя
export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login },
});

// Async action creator для получения данных авторизации
export const getAuth = () => {
  return (dispatch) => {
    return authAPI
      .getAuth()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          dispatch(setAuthUserData(id, email, login)); // Сохраняем данные в state
        }
      })
      .catch((err) => {
        console.error("Ошибка авторизации:", err);
      });
  };
};

export default authReducer;
