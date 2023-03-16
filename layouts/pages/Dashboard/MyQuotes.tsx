import React, { useState } from "react";
import SectionHeader from "components/shared/SectionHeader/SectionHeader";
import * as Icons from "../../../SVG/Icons";
import { AiOutlinePlus } from "react-icons/ai";
import Recipts from "components/MyQuotes/Recipts/Recipts";
import Sent from "components/MyQuotes/Sent/Sent";
import InProgress from "components/MyQuotes/InProgress/InProgress";
import Completed from "components/MyQuotes/Completed/Completed";

function MyQuotes() {
  const [tabs, setTabs] = useState({
    receipts: true,
    sent: false,
    inProgress: false,
    completed: false,
  });

  const MyQuotesData = [
    {
      img: "/Assets/Bags.png",
      title: "Bagages",
      location: "De Madrid à Tanger",
      date: "Date prévue d’envoi vendredi, 09 Dec",
      devis: "2",
      messages: "0",
      accepts: "0",
    },
  ];

  return (
    <div className="w-full md:h-full min-h-[calc(100vh-70px)] bg-white-off md:p-8 p-4">
      {/* ===> top-header */}
      <SectionHeader Title="Mes devis" ButtonFunction={() => {}} />
      {MyQuotesData.length === 0 ? (
        <div className="w-full flex flex-col gap-3  items-center justify-center bg-white-main rounded-[8px] mt-4 py-6">
          {/* Icon here */}
          <div className=" h-[100px] w-[100px] flex justify-center items-center bg-gradient-to-t from-white-main to-[#F2F2F2] rounded-full p-4 ">
            <Icons.HandShakIcon
              fill=""
              stroke=""
              ClassName="w-[100px] h-[100px]"
            />
          </div>

          <p className="text-center sm:text-[18px] text-[14px] text-black-main font-NunitoSans font-[600] leading-[28px] ">
            Vos devis apparaîtront ici.
          </p>
          <p className="text-center text-black-main font-OpenSans font-[400] sm:text-[16px] text-[14px] leading-[28px]">
            Commencer par publier des offres pour recevoir des devis de
            transporteurs
          </p>
          <button className="flex gap-2 items-center justify-center text-brand-main font-NunitoSans font-[600] sm:text-[14px] text-[12px] leading-[20px]">
            {" "}
            <AiOutlinePlus size={15} /> Voir mes offres
          </button>
        </div>
      ) : (
        <>
          {/* =====> tabs */}
          <div className="w-full flex gap-6 md:gap-0 justify-start h-[60px] border-b-[2px] border-white-cool mt-6 overflow-x-auto overflow-y-hidden">
            {/*  1) Recipts */}
            <p
              onClick={() =>
                setTabs({
                  receipts: !tabs.receipts,
                  inProgress: false,
                  sent: false,
                  completed: false,
                })
              }
              className={`text-[16px]  ${tabs.receipts
                  ? "text-brand-main after:bg-brand-main after:w-full"
                  : "text-black-cool hover:text-brand-main hover:after:bg-brand-main hover:after:w-full"
                }  flex w-[120px] justify-center items-center font-semibold font-sans cursor-pointer select-none relative after:content-[""] after:h-[3px] after:absolute after:bottom-[-1px] after:transition-all after:duration-300 after:ease-linear
              hover:after:content-[""] hover:after:h-[3px] hover:after:absolute hover:after:bottom-[-1px] hover:after:transition-all hover:after:duration-300 hover:after:ease-linear whitespace-nowrap
          `}
            >
              Reçus
            </p>
            {/*  2)  sent */}
            <p
              onClick={() =>
                setTabs({
                  sent: !tabs.sent,
                  inProgress: false,
                  receipts: false,
                  completed: false,
                })
              }
              className={`text-[16px]  ${tabs.sent
                  ? "text-brand-main after:bg-brand-main after:w-full"
                  : "text-black-cool hover:text-brand-main hover:after:bg-brand-main hover:after:w-full"
                }  flex w-[120px] justify-center items-center font-semibold font-sans cursor-pointer select-none relative after:content-[""] after:h-[3px]  after:absolute after:bottom-[-1px] after:transition-all after:duration-300 after:ease-linear
              hover:after:content-[""] hover:after:h-[3px] hover:after:absolute hover:after:bottom-[-1px] hover:after:transition-all hover:after:duration-300 hover:after:ease-linear whitespace-nowrap
          `}
            >
              Envoyés
            </p>
            {/*  3)  in progress */}
            <p
              onClick={() =>
                setTabs({
                  inProgress: !tabs.inProgress,
                  sent: false,
                  receipts: false,
                  completed: false,
                })
              }
              className={`text-[16px]  ${tabs.inProgress
                  ? "text-brand-main after:bg-brand-main after:w-full"
                  : "text-black-cool hover:text-brand-main hover:after:bg-brand-main hover:after:w-full"
                }  flex w-[120px] justify-center items-center font-semibold font-sans cursor-pointer select-none relative after:content-[""] after:h-[3px]  after:absolute after:bottom-[-1px] after:transition-all after:duration-300 after:ease-linear
              hover:after:content-[""] hover:after:h-[3px] hover:after:absolute hover:after:bottom-[-1px] hover:after:transition-all hover:after:duration-300 hover:after:ease-linear whitespace-nowrap
          `}
            >
              En cours
            </p>
            {/*  4)  completed */}
            <p
              onClick={() =>
                setTabs({
                  completed: !tabs.completed,
                  sent: false,
                  inProgress: false,
                  receipts: false,
                })
              }
              className={`text-[16px]  ${tabs.completed
                  ? "text-brand-main after:bg-brand-main after:w-full"
                  : "text-black-cool hover:text-brand-main hover:after:bg-brand-main hover:after:w-full"
                }  flex w-[120px] justify-center items-center font-semibold font-sans cursor-pointer select-none relative after:content-[""] after:h-[3px]  after:absolute after:bottom-[-1px] after:transition-all after:duration-300 after:ease-linear
              hover:after:content-[""] hover:after:h-[3px] hover:after:absolute hover:after:bottom-[-1px] hover:after:transition-all hover:after:duration-300 hover:after:ease-linear whitespace-nowrap
          `}
            >
              Complétés
            </p>
          </div>
          {/* ======> Recipts component */}
          {tabs.receipts && (
            <div>
              <Recipts />
            </div>
          )}
          {/* =====> sent component */}
          {tabs.sent && <Sent />}

          {/* =====> In progress component */}
          {tabs.inProgress && <InProgress />}
          {/* =====> Completed component */}
          {tabs.completed && <Completed />}
        </>
      )}
    </div>
  );
}

export default MyQuotes;
