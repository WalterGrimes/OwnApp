const ADD_PRODUCT = "ADD_PRODUCT";

const initialState = {
  profileProduct: {
    productData: [
      { rating: "Most popular", ratingStatus: "4.6 stars", comment: "I like this protein" },
      { rating: "Best value", ratingStatus: "2.0 stars", comment: "Guys, that's not a protein(" },
      { rating: "New release", ratingStatus: "5.0 stars", comment: "Amazing product!" },
      { rating: "Budget option", ratingStatus: "3.5 stars", comment: "Good for the price." },
    ], 
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      if (!action.product || typeof action.product !== 'string') {
        console.error("Invalid product data!");
        return state;
      }

      const newProduct = {
        id: state.profileProduct.productData.length + 1,
        rating: "Unrated",
        ratingStatus: "No stars yet",
        comment: action.product,
      };
      return {
        ...state,
        profileProduct: {
          ...state.profileProduct,
          productData: [...state.profileProduct.productData, newProduct],
        },
      };
    default:
      return state;
  }
};

export const addProductAC = (product) => ({ type: ADD_PRODUCT, product });

export default profileReducer;
