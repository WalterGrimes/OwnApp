import React from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../redux/StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        console.log("postData в MyPostsContainer:", store.getState().profileProduct.productData);

        const addProduct = () => {
          store.dispatch({ type: "ADD_PRODUCT", product: "New Product" });
        };

        return (
          <MyPosts
            addProduct={addProduct}
            postData={store.getState().profileProduct.productData}
            dispatch={store.dispatch}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
