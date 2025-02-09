// news-reducer.js
const initialState = {
    articles: [],
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      // обработка различных типов действий
      default:
        return state;
    }
  };
  
  export default newsReducer;
  