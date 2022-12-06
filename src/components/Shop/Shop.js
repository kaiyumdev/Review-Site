import React from 'react';
import './Shop.css';

const Shop = ({product}) => {
    const {id, name, review} = product;
    return (
        <div className='main-review'>
            <div className="review-product">
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{review}</h3>
            </div>
        </div>
    );
};

export default Shop;