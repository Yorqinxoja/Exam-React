import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="p-4">
        <div className="rounded-md">
          <img src={apple} alt="" />
          <i className="text-2xl font-bold mb-2 my-2">
            Up to 60% off Apple tech
          </i>
          <p>Save on AirPods, iPhones, and more.</p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-md p-4 flex flex-col justify-between"
            >
              <div>
                <Link to={`/single/${product.id}`} className="text-blue-500">
                  {
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="h-64 object-contain transition-transform duration-300 ease-in-out scale-80 hover:scale-90"
                    />
                  }
                </Link>
                <p className="text-[14px] font-[600] text-[red] uppercase">
                  {product.category}
                </p>
                <p className="text-[18px] font-[700] h-[72px]">
                  {product.title}
                </p>
                <p className="text-gray-700">
                  {product.description.length > 50
                    ? `${product.description.substring(0, 50)}...`
                    : product.description}
                </p>
                <p className="text-[18px] font-bold text-[#00ff00]">
                  ${product.price} ✔
                </p>
                <p className="text-[16px] font-[600]">
                  Rating: {product.rating} ⭐⭐⭐⭐⭐
                </p>
                <p className="text-[16px] mt-4">
                  Was:{" "}
                  <del className="text-[16px] text-[#ef7f00]">
                    ${Math.round(product.price + 60)}
                  </del>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
