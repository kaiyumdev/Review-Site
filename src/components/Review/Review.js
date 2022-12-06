import React from "react";
import useProducts from "./../../hooks/useProducts";
import './Review.css';

const Review = () => {
  const [products, setProducts] = useProducts([]);
  // const {id, name, review} = products;
  // console.log(products)
  return (
    <div className="review-container">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div className="review">
              <h2>{product.name}</h2>
              <p>{product.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
