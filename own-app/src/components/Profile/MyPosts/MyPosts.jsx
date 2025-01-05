import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

//  let newProduct = React.createRef();
 
 let addProduct = () => {
  // let product = newProduct.current.value;
   alert('you added new product')
}
  return (
    <div>
      <div>My items</div>
      <div>
        <button onClick={ addProduct} >Buy product</button>
      </div>
      <div className={s.posts}>
        {props.postData.map((post, index) => (
          <Post 
            key={index}
            rating={post.rating} 
            ratingStatus={post.ratingStatus} 
            comment={post.comment} 
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
