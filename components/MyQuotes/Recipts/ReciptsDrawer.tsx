import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoIosArrowBack } from "react-icons/io";
import * as Icons from "../../../SVG/Icons";
import ProductCard from "./ProductCard";
import Data from "constants/JSON/Data";

interface Props {
  isOPen: boolean;
  handleOpen: any;
}

function ReciptsDrawer({ isOPen, handleOpen }: Props) {
  const [Buttons, setButtons] = useState({
    estimate: true,
    message: false,
    accept: false,
  });

  return (
    <div className="">
      <Drawer
        open={isOPen}
        onClose={handleOpen}
        className="drawer Drawer-Scroll"
        direction="right"
        style={{
          width:"65%",
          height: "100%",
          overflow: "auto",
          borderTopLeftRadius: "10px"
        }}
      >
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-3 justify-center items-start p-3 md:p-6 md:py-6 py-8">
            {/* ====> back Icon + title */}
            <div className="flex justify-center gap-6 items-center">
              <IoIosArrowBack onClick={handleOpen} className="text-[26px] text-brand-secoundary cursor-pointer" />
              <p className="text-[18px] text-black-main font-sans font-semibold whitespace-nowrap">
                Bagages
              </p>
            </div>
            {/* =====> location */}
            <div className="flex justify-center items-center gap-1 pl-12">
              <Icons.Location ClassName="w-4 h-4" fill="#240046" stroke="" />
              <p className="text-[12px] font-sans text-black-main whitespace-nowrap">
                De Madrid à Tanger
              </p>
            </div>
            {/* ===> date */}
            <div className="flex justify-center items-center gap-1 pl-12">
              <Icons.DateIcon ClassName="w-4 h-4" fill="#240046" stroke="" />
              <p className="text-[12px] font-sans text-black-main">
                Date prévue d’envoi vendredi, 09 Dec
              </p>
            </div>
            {/* ======> buttons */}
            <div className="w-full h-[44px] rounded-[8px] grid grid-cols-3 bg-grey-cool p-[2px] my-4">
              {/* 1) Estimate button */}
              <button
                onClick={() =>
                  setButtons({
                    estimate: !Buttons.estimate,
                    message: false,
                    accept: false,
                  })
                }
                className={`w-full h-full flex justify-center items-center text-base font-sans font-semibold ${Buttons.estimate
                  ? " text-brand-main bg-white-main rounded-[8px]"
                  : "text-[#7A7A7A] bg-transparent"
                  }`}
              >
                Devis
              </button>
              {/* 2) Messages button */}
              <button
                onClick={() =>
                  setButtons({
                    message: !Buttons.message,
                    estimate: false,
                    accept: false,
                  })
                }
                className={`w-full h-full flex justify-center items-center text-base font-sans font-semibold ${Buttons.message
                  ? " text-brand-main bg-white-main rounded-[8px]"
                  : "text-[#7A7A7A] bg-transparent"
                  }`}
              >
                Messages
              </button>
              {/* 3) Accepts */}
              <button
                onClick={() =>
                  setButtons({
                    accept: !Buttons.accept,
                    message: false,
                    estimate: false,
                  })
                }
                className={`w-full h-full flex justify-center items-center text-base font-sans font-semibold ${Buttons.accept
                  ? " text-brand-main bg-white-main rounded-[8px]"
                  : "text-[#7A7A7A] bg-transparent"
                  }`}
              >
                Acceptés
              </button>
            </div>
            {/* =====> when estimate button true */}
            {Buttons.estimate && (
              <div className="w-full flex justify-center items-center flex-col gap-4">
                {Data.MyQuotesData.reciptsData[0].subProducts.map(
                  (pro, index) => {
                    return (
                      <>
                        <ProductCard data={pro} />
                        {index <
                          Data.MyQuotesData.reciptsData[0].subProducts.length -
                          1 && (
                            <div className="w-full border-b-[1px] border-white-cool"></div>
                          )}
                      </>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default ReciptsDrawer;
