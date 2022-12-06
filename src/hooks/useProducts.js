import { useState, useEffect } from 'react';
const useProducts =() =>{
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("fakeData.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);
    return [products, setProducts]

}
export default useProducts;