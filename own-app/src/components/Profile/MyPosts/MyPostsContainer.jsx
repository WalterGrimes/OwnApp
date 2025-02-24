import React from "react";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  console.log("profileProduct в mapStateToProps:", state.profileProduct);
  return {
    postData: state.profileProduct?.productData || [], // добавляем безопасный доступ
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: () => {
      dispatch({ type: "ADD_PRODUCT", product: "New Product" });
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
