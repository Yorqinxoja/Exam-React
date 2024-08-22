import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products.slice(6, 11));
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);
  return (
    <>
      <marquee behavior="" direction="left" scrollamount="16">
        <div className="p-[25px]">
          <div className="flex justify-center gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative flex flex-col justify-center items-center bg-gray-100 p-6 h-56 w-56 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:bg-[#3665F3] cursor-pointer"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-24 w-24 object-contain mb-2 translate-y-0 scale-100 group-hover:scale-100  "
                />
                <h3 className="text-sm font-semibold text-center">
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </marquee>

      <div className="product-container flex">
        <i className=" ml-2 text-2xl font-semibold mb-2 text-gray-600 font-sans text-start">
          {t("score_trending_kicks")}
        </i>
        <span className="flex my-[40px] hover:underline text-gray-600 mr-[680px] font-sans text-[24px]">
          <Link to="/Collection">{t("see_all")}</Link>
          <AiOutlineArrowRight className="ml-2 w-4 h-4 my-[8px] transform transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </>
  );
};

export default Products;
