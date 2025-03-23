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

export default authReducer;
