import React, { useState } from "react";
import * as Icons from "../../../SVG/Icons";

interface Props {
  states: {
    oneBtn: boolean;
    secBtn: boolean;
    thirdBtn: boolean;
    cheaper: boolean;
    faster: boolean;
    verifiedByFiamane: boolean;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      oneBtn: boolean;
      secBtn: boolean;
      thirdBtn: boolean;
      cheaper: boolean;
      faster: boolean;
      verifiedByFiamane: boolean;
    }>
  >;
}

const DepartHandler: React.FC<Props> = ({ states, setState }: Props) => {
  // ======> states
  // const [Buttons, setButtons] = useState({
  //   oneBtn: true,
  //   secBtn: false,
  //   thirdBtn: false,
  //   cheaper: true,
  //   faster: true,
  //   verifiedByFiamane: false,
  // });

  return (
    <div className="w-full m-auto flex flex-col">
      {/* =======> top header */}
      <div className="w-full flex flex-col gap-4 bg-white-main -mt-10 shadow-lg">
        {/* ===> The earlier + 7 days + 10 days button  */}
        <div className="w-full grid grid-cols-3 bg-white-main border-b-[1px] border-white-cool">
          {/* ====> one button */}
          <button
            onClick={() => {
              setState({
                ...states,
                oneBtn: true,
                secBtn: false,
                thirdBtn: false,
              });
            }}
            className={`w-full text-[14px] md:text-base font-semibold font-sans ${
              states.oneBtn
                ? "bg-brand-main text-white-main"
                : "bg-white-main text-black-main"
            }  py-4 rounded-tl-[20px]`}
          >
            Le plus tôt
          </button>
          {/* ======> 2nd button */}
          <button
            onClick={() => {
              setState({
                ...states,
                oneBtn: false,
                secBtn: true,
                thirdBtn: false,
              });
            }}
            className={`w-full text-[14px] md:text-base font-semibold font-sans ${
              states.secBtn
                ? "bg-brand-main text-white-main"
                : "bg-white-main text-black-main"
            }`}
          >
            Le plus tôt
          </button>
          {/* =====> 3rd button */}
          <button
            onClick={() => {
              setState({
                ...states,
                oneBtn: false,
                secBtn: false,
                thirdBtn: true,
              });
            }}
            className={`w-full text-[14px] md:text-base font-semibold font-sans  ${
              states.thirdBtn
                ? "bg-brand-main text-white-main"
                : "bg-white-main text-black-main"
            } py-4 rounded-tr-[20px]`}
          >
            Le plus tôt
          </button>
        </div>
        {/* ==== Features*/}
        <div className="w-full flex md:flex-row flex-col justify-start items-center gap-4 p-5">
          {/* 1 cheaper */}
          <button
            onClick={() =>
              setState({
                ...states,
                cheaper: !states.cheaper,
              })
            }
            className={`flex justify-center items-center gap-3  ${
              states.cheaper && "border-[2px] border-brand-secondary"
            }  bg-[#F3F5F7]  py-4 w-full md:w-[160px] rounded-full`}
          >
            <Icons.SignalIcon fill="" ClassName="" stroke="" />
            <p className="text-base font-semibold text-brand-secondary font-Roboto">
              Moins cher
            </p>
          </button>
          {/* 2  Faster */}
          <button
            onClick={() =>
              setState({
                ...states,
                faster: !states.faster,
              })
            }
            className={`flex justify-center items-center gap-3  bg-[#F3F5F7] ${
              states.faster && "border-[2px] border-brand-secondary"
            }  py-4 w-full md:w-[160px] rounded-full`}
          >
            <Icons.SignalIcon fill="" ClassName="" stroke="" />
            <p className="text-base font-semibold text-brand-secondary font-Roboto">
              Plus rapide
            </p>
          </button>
          {/* 3  Verified by Fiamane */}
          <button
            onClick={() =>
              setState({
                ...states,
                verifiedByFiamane: !states.verifiedByFiamane,
              })
            }
            className={`flex justify-center items-center gap-3  bg-[#F3F5F7] ${
              states.verifiedByFiamane && "border-[2px] border-brand-secondary"
            }  py-4 w-full md:w-[220px] rounded-full`}
          >
            <Icons.AwardIcon fill="" ClassName="" stroke="" />
            <p className="text-base font-semibold  text-brand-secondary font-Roboto">
              Vérifié par Fiamane
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartHandler;
