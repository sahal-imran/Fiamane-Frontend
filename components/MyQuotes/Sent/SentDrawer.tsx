import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoIosArrowBack } from "react-icons/io";
import * as Icons from "../../../SVG/Icons";
import Image from "next/image";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";

interface Props {
  isOPen: boolean;
  handleOpen: any;
  item: any;
}

function SentDrawer({ isOPen, handleOpen, item }: Props) {
  const [Buttons, setButtons] = useState({
    Proposed: true,
    Message: false,
  });

  return (
    <div className="">
      <Drawer
        style={{ width: "40%", borderTopLeftRadius: "10px" }}
        open={isOPen}
        onClose={handleOpen}
        className="drawer"
        direction="right"
      >
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col gap-3 justify-center items-start p-6">
            {/* ====> back Icon + title */}
            <div className="flex w-full justify-between  items-center">
              <div className="flex w-full items-center gap-2">
                <IoIosArrowBack
                  onClick={handleOpen}
                  className="text-[26px] text-brand-secoundary cursor-pointer"
                />
                <p className="text-[18px] text-black-main font-sans font-semibold whitespace-nowrap">
                  {item.Marchandise}
                </p>
              </div>
              <button
                className={`items-center text-center justify-center  text-white-main h-[28px] w-[120px] sm:text-[14px] text-[12px] ${
                  item.Status === "Accepté"
                    ? "bg-[#1DAF4E]"
                    : item.Status === "en attente  "
                    ? "bg-[#25AAA2] "
                    : "bg-[#4166BF]"
                } font-OpenSans font-[400] leading-[24px]  rounded-[8px]`}
              >
                {item.Status}
              </button>
            </div>
            {/* =====> location */}
            <div className="flex justify-center items-center gap-1 pl-12">
              <Icons.Location ClassName="w-4 h-4" fill="#240046" stroke="" />
              <p className="text-[12px] font-sans text-black-main whitespace-nowrap">
                {item.Departure}
              </p>
            </div>
            {/* ===> date */}
            <div className="flex justify-center items-center gap-1 pl-12">
              <Icons.DateIcon ClassName="w-4 h-4" fill="#240046" stroke="" />
              <p className="text-[12px] font-sans text-black-main">
                Date prévue d’envoi samedi,{item.ArrivalDate}
              </p>
            </div>
            {/* ======> buttons */}
            <div className="w-full flex rounded-[8px] bg-white-off p-[2px]">
              <button
                onClick={() => setButtons({ Message: false, Proposed: true })}
                className={`flex w-full items-center justify-center font-OpenSans font-[600] text-[16px] leading-[24px] py-[8px] px-[12px]${
                  Buttons.Proposed
                    ? " bg-white-main text-brand-main"
                    : "bg-white-off text-[#7A7A7A]"
                }  rounded-[8px] `}
              >
                Devis proposé
              </button>
              <button
                onClick={() => setButtons({ Proposed: false, Message: true })}
                className={`flex w-full items-center justify-center font-OpenSans font-[600] text-[#7A7A7A] text-[16px] leading-[24px] py-[8px] px-[12px] ${
                  Buttons.Message
                    ? "bg-white-main text-brand-main"
                    : "bg-white-off text-[#7A7A7A]"
                } rounded-[8px] `}
              >
                Messages {`(${item.Messege?.length})`}
              </button>
            </div>

            {Buttons.Proposed && (
              <div className="w-full flex flex-col gap-[10px] justify-center">
                {/* prix here */}
                <div className="w-full flex flex-col gap-2">
                  <p className="font-OpenSans font-[400] text-[14px] leading-[24px] text-[#7A7A7A]">
                    Prix proposé
                  </p>
                  <p className="font-OpenSans font-[600] text-[16px] leading-[24px] text-black-main">
                    {item.Price}
                  </p>
                </div>
                {/* Supplemntry information here */}
                <div className="w-full flex flex-col gap-2">
                  <p className="font-OpenSans font-[400] text-[14px] leading-[24px] text-[#7A7A7A]">
                    Information suplimentaires
                  </p>
                  <p className="font-OpenSans font-[400] text-black-main tetx-[16px] leading-[24px]">
                    {item.Detail}
                  </p>
                </div>
                <div className="w-full flex justify-end gap-2">
<ContainedCircle Text="Modifier" />
<ContainedCircle Text="Annuler" styles="w-[158px] bg-white-main text-black-main border-[2px] border-white-off" />
                </div>
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SentDrawer;
