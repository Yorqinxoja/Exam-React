import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./category.css";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <>
      <div className="w-[1400px] flex p-8 bg-orange-300">
        <div className="w-1/3 p-8 bg-orange-300 my-[20px] font-[sans-serif] font-[400]">
          <i className="text-[36px] font-[500] text__link">
            {t("super_savings")}
          </i>
          <p className="mt-2 mb-6">{t("discount")}</p>
          <button className="button mb-6 text-black border-black px-8 py-2 flex items-center hover:transition-colors duration-300">
            {t("shop_now")}
            <AiOutlineArrowRight className="ml-2 w-4 h-4 my-[4px] transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="flex w-2/3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-orange-300 p-4 w-1/3 translate-y-0 scale-105 group hover:scale-200"
            >
              <h3 className="text-xl font-bold mb-2 flex">
                {" "}
                Callaway
                <AiOutlineArrowRight className="ml-2 w-4 h-4 my-[7px] transform transition-transform duration-500 group-hover:translate-x-2" />
              </h3>

              <img
                src={product.images[0]}
                alt={product.title}
                className="h-45 w-45 object-cover mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
