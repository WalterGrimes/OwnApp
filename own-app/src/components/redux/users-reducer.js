const SHOW = "SHOW";
const HIDE = "HIDE";
const SET_USERS = "SET_USERS";
const initialState = {
  users: [
    { 
      id: 1, 
      userName: "Andrew", 
      userStatus: "He is a six foot five...", 
      city: "Los Angeles", 
      isShown: false,
      userPhoto: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" // Красная роза
    },
    { 
      id: 2, 
      userName: "Mark334", 
      userStatus: "Just a chill guy", 
      city: "Chicago", 
      isShown: false,
      userPhoto: "https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg" // Белая лилия
    },
    { 
      id: 3, 
      userName: "Ellizzz", 
      userStatus: "Tuco Salamanka", 
      city: "Albuquerque", 
      isShown: false,
      userPhoto: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg" // Поле подсолнухов
    },
    { 
      id: 4, 
      userName: "Maga00", 
      userStatus: "Bro", 
      city: "Moscow", 
      isShown: false,
      userPhoto: "https://images.pexels.com/photos/593966/pexels-photo-593966.jpeg" // Фиолетовая орхидея
    },
  ],
  products: [
    { id: 101, name: "Whey Protein" },
    { id: 102, name: "Creatine Monohydrate" },
    { id: 103, name: "BCAA" },
  ],
  purchases: [
    { userId: 2, productId: 101 }, // Mark334 купил Whey Protein
    { userId: 4, productId: 102 }, // Maga00 купил Creatine Monohydrate
  ],
};






const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case SHOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, isShown: true }
          }
          return u;
        })
      }
    case HIDE:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, isShown: false }
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }

    default:
      return state;
  }
};


export const showUsersItemAC = (userId) => ({ type: SHOW, userId })
export const hideUsersItemAC = (userId) => ({ type: HIDE, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;
