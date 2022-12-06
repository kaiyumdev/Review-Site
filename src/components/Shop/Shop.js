import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import "./Shop.css";

const Shop = ({ product }) => {
  const { id, image, name, review } = product;
  return (
    <div className="main-review">
      <div className="review-product">
        <div className="review-img">
          <img src={image} alt={name} />
        </div>
        <div className="review-details">
          <h3>{name}</h3>
          <h3>{review}</h3>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Shop;
