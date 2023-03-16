import React, { useState, useRef } from "react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import TableRow from "../InProgress/TableRow";

import SentDrawer from "./SentDrawer";
function Sent() {
  //   satate for Drawer
  const [OpenDrawer, setOpenDrawer] = useState(false);

  // staate to send data dynamically to drawer
  const [FilterdItem, SetFilterdItem] = useState<Array<object>>([{}]);
  // function to filter the data
  const FilterItem = (Item: any) => {
    let FilterdData = Sent.filter((x: any) => x.Id === Item.Id);
    SetFilterdItem(FilterdData);
  };
  //   array containing the Offers data if there is some data
  const [Sent, SetSent] = useState<Array<object>>([
    {
      Id: 1,
      Status: "Devis envoyé",
      Marchandise: "Carton",
      Departure: "Paris, France",
      Arrival: "Rabat, Maroc",
      ArrivalDate: "10 Dec",
      Price: "20 €",
      Detail:
        "Lorem ipsum dolor sit amet consectetur. Id non placerat eget donec. Praesent lacus vitae commodo egestas turpis. Luctus ullamcorper tortor vel consectetur ut. Feugiat ultricies in tristique metus integer.",
      Messege: [],
      SendingDate: " 10/12/2022",
      Image: "/Assets/Carton.png",
      PublisherName: "Riad B.",
      PublisherImage: "/Assets/Ellipse 5.png",
    },
  ]);
  return (
    <div>
      <div className="w-full  gap-2 bg-white-main mt-4 rounded-[8px] p-4 ">
        {/* table header here */}
        <div className="w-full flex flex-row justify-between md:flex-col md:justify-center lg:flex-row items-center lg:justify-between border-b-[1px] border-b-white-off gap-4 sm:py-[10px] py-[8px]">
          <p className=" w-full font-OpenSans font-[600] sm:text-[18px] text-start md:text-center lg:text-start  text-[14px] text-black-main  leading-[28px]">
            Tout les devis envoyés{`(${Sent.length})`}
          </p>
          <div className="flex  justify-between items-center gap-2">
            <div className="sm:w-[262px] h-[40px] rounded-[8px] w-full sm:grid sm:grid-cols-[calc(100%-44px)_44px] hidden overflow-hidden border-white-off border-[1px]">
              <input
                className="bg-transparent outline-none border-none px-3 text-[#B3B3B3] text-[14px] font-OpenSans"
                placeholder="Rechercher..."
                type="text"
              />
              <button className=" h-full w-full flex items-center justify-center  bg-brand-main text-white-main">
                <BiSearch size={20} />
              </button>
            </div>

            <button className="flex w-[94px] h-[40px] gap-1 items-center justify-center text-black-main text-[14px] font-OpenSans font-[600] leading-[20px] border-[1px] border-white-off rounded-[8px]">
              <BiFilterAlt size={20} />
              <p>Filter</p>
            </button>
          </div>
        </div>

        <div className=" overflow-x-auto">
          <div className="min-w-[940px]">
            {/* Table headings here */}
            <div className="grid w-full items-center grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[8px] border-b-[1px] border-b-white-off md:py-[10px] py-[8px] ">
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Statut
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Marchandise
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Départ
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Arrivé
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Date d’envoi
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Publié par
              </p>
            </div>

            {/* data  here */}
            {Sent?.map((item: any, index: number) => {
              return (
                <TableRow
                  key={index}
                  Status={item.Status}
                  Departure={item.Departure}
                  Arrival={item.Arrival}
                  DateOfDeparture={item.SendingDate}
                  image={item.Image}
                  Marchandise={item.Marchandise}
                  PublisherImage={item.PublisherImage}
                  PublisherName={item.PublisherName}
                  OnClick={() => {
                    FilterItem(item);
                    setOpenDrawer(true);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <SentDrawer
        isOPen={OpenDrawer}
        handleOpen={() => setOpenDrawer(false)}
        item={FilterdItem[0]}
      />
    </div>
  );
}

export default Sent;
