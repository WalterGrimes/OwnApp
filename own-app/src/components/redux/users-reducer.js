const SHOW = "SHOW";
const HIDE = "HIDE";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_ALL_USERS_COUNT = "SET_ALL_USERS_COUNT";
const SET_THAT_FETCHING = "SET_THAT_FETCHING"; // Исправил пробел в названии
const TOGGLE_IS_SHOWING = " TOGGLE_IS_SHOWING";

const initialState = {
  users: [
    {
      id: 1,
      userName: "Andrew",
      userStatus: "He is a six foot five...",
      city: "Los Angeles",
      isShown: false,
      userPhoto: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
    },
    {
      id: 2,
      userName: "Mark334",
      userStatus: "Just a chill guy",
      city: "Chicago",
      isShown: false,
      userPhoto: "https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg"
    },
    {
      id: 3,
      userName: "Ellizzz",
      userStatus: "Tuco Salamanca",
      city: "Albuquerque",
      isShown: false,
      userPhoto: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg"
    },
    {
      id: 4,
      userName: "Maga00",
      userStatus: "Bro",
      city: "Moscow",
      isShown: false,
      userPhoto: "https://images.pexels.com/photos/593966/pexels-photo-593966.jpeg"
    },
  ],
  products: [
    { id: 101, name: "Whey Protein" },
    { id: 102, name: "Creatine Monohydrate" },
    { id: 103, name: "BCAA" },
  ],
  purchases: [
    { userId: 2, productId: 101 },
    { userId: 4, productId: 102 },
  ],
  pageSize: 5,
  allUsersCount: 0,
  currentPage: 5,
  isFetching: false,// По умолчанию лучше `false`, иначе будет показывать прелоадер сразу
  showingInProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.userId ? { ...user, isShown: true } : user
        )
      };

    case HIDE:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.userId ? { ...user, isShown: false } : user
        )
      };

    case SET_USERS:
      return {
        ...state,
        users: Array.isArray(action.users) ? action.users : [] // Гарантия, что users - массив
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

    case SET_ALL_USERS_COUNT:
      console.log("Обновляем allUsersCount:", action.allUsersCount);
      return {
        ...state,
        allUsersCount: action.allUsersCount
      };

    case SET_THAT_FETCHING:
      console.log("Обновляем isFetching:", action.isFetching);
      return {
        ...state,
        isFetching: action.isFetching // Исправлено `isThatFetching` → `isFetching`
      };

    case "TOGGLE_IS_SHOWING":
      return {
        ...state,
        showingInProgress: action.isFetching
          ? [...state.showingInProgress, action.userId]
          : state.showingInProgress.filter(id => id !== action.userId)
      };

    default:
      return state;
  }
};

// Action Creators
export const showUsersItemAC = (userId) => ({ type: SHOW, userId });
export const hideUsersItemAC = (userId) => ({ type: HIDE, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setPageAC = (currentPage) => ({ type: SET_PAGE, currentPage });
export const setAllUsersCountAC = (allUsersCount) => ({ type: SET_ALL_USERS_COUNT, allUsersCount });
export const setThatFetchingAC = (isFetching) => ({ type: SET_THAT_FETCHING, isFetching });
export const toggleIsShowing = (isFetching, userId) => ({ type: TOGGLE_IS_SHOWING, isFetching, userId });


export default usersReducer;
