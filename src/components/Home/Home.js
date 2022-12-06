import React, { useEffect, useState } from "react";
import Shop from "../Shop/Shop";
import "./Home.css";
import useProducts from '../../hooks/useProducts';

const Home = () => {
  const [products, setProducts] = useProducts([]);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("fakeData.json")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);
  return (
    <section>
      <h1>This is home town</h1>
      <div className="container">
        <div className="text-container">
          <h1>This is largest online Shop</h1>
          <p>
            That is a amazing online shop there i'm always shopping my beautiful
            dresses. Every time i'm very happy to shopping that place & end of
            the day i'm saying that was amazing experience for both of us.
          </p>
          <button>Review Live</button>
        </div>
        <div className="image-container">
          <img src={require("../Images/bike.png")} />
        </div>
      </div>
      <div className="products-container">
        <h1>That's All Reviewer</h1>
        <div className="product">
          {products.slice(0, 3).map((product) => (
            <Shop key={product.id} product={product}></Shop>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
