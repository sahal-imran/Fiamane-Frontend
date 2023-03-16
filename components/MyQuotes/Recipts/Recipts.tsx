import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import * as Icons from "../../../SVG/Icons";
import ReciptsDrawer from "./ReciptsDrawer";
import Data from "../../../constants/JSON/Data";

function Recipts() {
  const [ToggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleDrawer = () => {
    setToggleDrawer(!ToggleDrawer);
  };

  return (
    <div className="w-full flex min-h-full flex-col gap-2 bg-white-main mt-4 rounded-[8px] p-4">
      {/* ====> table header here */}
      <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-2 sm:justify-between border-b-[1px] border-b-white-off sm:py-[10px] py-[8px]">
        <p className=" w-full text-center sm:text-left font-OpenSans font-[600] sm:text-[18px] text-[14px] text-black-main  leading-[28px]">
          Tout les devis reçus
        </p>
        <div className="flex  justify-between items-center gap-2">
          <div className="sm:w-[262px] h-[40px] rounded-[8px] w-full grid grid-cols-[calc(100%-44px)_44px]  overflow-hidden border-white-off border-[1px]">
            <input
              className="bg-transparent outline-none border-none px-3 text-[#B3B3B3] text-[14px] font-OpenSans"
              placeholder="Rechercher..."
              type="text"
            />
            <button className=" h-full w-full flex items-center justify-center  bg-brand-main text-white-main">
              <BiSearch size={20} />
            </button>
          </div>
        </div>
      </div>
      {/* ======> table row */}
      {Data.MyQuotesData.reciptsData.map((data: any, index: number) => {
        return (
          <div
            key={index}
            className="flex w-full gap-16 xl:gap-0 justify-between items-center px-2 xl:px-6 py-2 overflow-auto"
          >
            {/* ======> product image + title + location + address */}
            <div className="flex gap-6 justify-start items-center">
              <div className="w-[80px] xl:w-[100px] h-[60px] xl:h-[106px] relative">
                <Image
                  // src="/Assets/Bags.png"
                  src={data.img}
                  fill
                  className="cover"
                  alt=""
                ></Image>
              </div>
              <div className="flex flex-col gap-2 justify-center items-start">
                <p className="text-[18px] text-black-main font-sans font-semibold whitespace-nowrap">
                  {/* Bagages */}
                  {data.title}
                </p>
                {/* ===> address */}
                <div className="flex justify-center items-center gap-1">
                  <Icons.Location
                    ClassName="w-4 h-4"
                    fill="#240046"
                    stroke=""
                  />
                  <p className="text-[12px] font-sans text-black-main whitespace-nowrap">
                    {/* De Madrid à Tanger */}
                    {data.location}
                  </p>
                </div>
                {/* ===> date */}
                <div className="flex justify-center items-center gap-1">
                  <Icons.DateIcon
                    ClassName="w-4 h-4"
                    fill="#240046"
                    stroke=""
                  />
                  <p className="text-[12px] font-sans text-black-main">
                    {/* Date prévue d’envoi vendredi, 09 Dec */}
                    {data.date}
                  </p>
                </div>
              </div>
            </div>
            {/* =====> Estimate + messages + accepts here */}
            <div className="flex gap-10 xl:gap-20 justify-center items-center">
              {/* 1) estimate */}
              <div className="flex justify-start items-center flex-col gap-1">
                <p className="text-[14px] font-semibold font-sans">
                  {data.devis}
                </p>
                <p className="text-[14px] font-semibold font-sans text-[#7A7A7A]">
                  Devis
                </p>
              </div>
              {/* 2) messages */}
              <div className="flex justify-start items-center flex-col gap-1">
                <p className="text-[14px] font-semibold font-sans">
                  {data.messages}
                </p>
                <p className="text-[14px] font-semibold font-sans text-[#7A7A7A]">
                  Messages
                </p>
              </div>
              {/* 3)  Accepts */}
              <div className="flex justify-start items-center flex-col gap-1">
                <p className="text-[14px] font-semibold font-sans">
                  {data.accepts}
                </p>
                <p className="text-[14px] font-semibold font-sans text-[#7A7A7A]">
                  Acceptés
                </p>
              </div>
              {/* ====> button */}
              <button
                onClick={() => handleToggleDrawer()}
                className="flex justify-center items-center gap-2"
              >
                <p className="text-[16px] text-brand-main font-NunitoSans font-semibold whitespace-nowrap">
                  Voir plus
                </p>
                <BsArrowRight className="text-[22px] text-brand-main" />
              </button>
            </div>
          </div>
        );
      })}
      <ReciptsDrawer isOPen={ToggleDrawer} handleOpen={handleToggleDrawer} />
    </div>
  );
}

export default Recipts;
