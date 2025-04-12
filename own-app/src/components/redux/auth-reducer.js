import { authAPI } from "../../API/API";

const SET_USER_DATA = "SET_USER_DATA";


const initialState = {
  email: null,
  userid: null,
  login: null,
  isAuth: false,
  photo:null
  // isFetching: false // По умолчанию лучше `false`, иначе будет показывать прелоадер сразу
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  } 
};

// Action Creators
export const setUsersData = (email,login,userId,photo=null) => ({ type: SET_USER_DATA, data: userId,email,login,photo })


export const getAuth = () => {
  return (dispatch) => {
    return authAPI.getAuth()
      .then(response => {
        if (response.data.resultCode === 0) {
          return response.data.data; // {id, email, login}
        }
        return Promise.reject(response.data.messages[0] || "Auth failed");
      });
  };
};


export default authReducer;
