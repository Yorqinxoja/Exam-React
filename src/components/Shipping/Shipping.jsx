import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

const Shipping = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div className="flex flex-wrap justify-center cursor-pointer">
      {products.slice(0, 5).map((product) => (
        <div key={product.id} className="p-4 m-2 max-w-xs border rounded">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[200px] h-[200px] object-cover"
          />
          <i className="text-xl font-semibold mt-2">{product.title}</i>
          <h2 className="text-xl font-semibold mt-2">{product.category}</h2>
          <div className="text-red-500">
            {product.discountPercentage > 0 && (
              <span className="pr-2">20% off: WHOLEHOME20</span>
            )}
          </div>
          <div className="text-gray-700">
            <i className="text-lg font-bold">${product.price}</i>
            <i className="line-through ml-2">
              $
              {Math.round(
                product.price +
                  (product.discountPercentage / 100) * product.price
              )}
            </i>
            <i className="ml-2">
              {Math.floor(product.discountPercentage)}% OFF
            </i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shipping;
