import React from "react";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  let addProduct = () => {
    props.store.dispatch({ type: 'ADD_PRODUCT', product: "New Product" });
  }
  

  return (
    <MyPosts addProduct={addProduct} 
    postData={props.store.getState().profileProduct.productData}
     dispatch={props.store.dispatch} />

  );
};

export default MyPostsContainer;