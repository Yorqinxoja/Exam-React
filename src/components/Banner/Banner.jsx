import React from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-[14px] parent-container flex items-center p-4 bg-white ">
        <a href="#" className="text-gray-800 hover:underline font-semibold">
          {t("home")}
        </a>
        <div className="link-container flex gap-8 ">
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("♥ Saved")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("motors")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("electronics")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("collectibles")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("home_garden")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("fashion")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("toys")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("sporting_goods")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("business_industrial")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("jewelry_watches")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("ebay_live")}
          </a>
          <a
            href="#"
            className="text-[14px] text-[#555555] font-[500] hover:underline"
          >
            {t("refurbished")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
