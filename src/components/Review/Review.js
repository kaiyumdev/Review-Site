import React from "react";
import useProducts from "./../../hooks/useProducts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import './Review.css';

const Review = () => {
  const [products, setProducts] = useProducts([]);
  return (
    <div className="review-container">
      {products.map((product) => {
        return (
          <div key={product.id}>
             <div className="review-product">
        <div className="review-img">
          <img src={product.image} />
        </div>
        <div className="review-details">
          <h3>{product.name}</h3>
          <h3>{product.review}</h3>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
      </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
