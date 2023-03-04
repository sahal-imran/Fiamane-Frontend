import React, { useEffect, useState } from "react";
import * as Icons from "SVG/Icons";
import { AiOutlinePlus } from "react-icons/ai";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { Checkbox } from "@mui/material";
import SectionHeader from "components/shared/SectionHeader/SectionHeader";
import TableRow from "components/shared/TableRow/TableRow";
import DepartureInformation from "components/app/Departures/DepartureInformation";

function Index() {
    //state to show Departure information
    const [IsDeparture, SetIsDeparture] = useState<boolean>(false);
    //   array containing the departure data if there is some data
    const [Data, setData] = useState([
        {
            Status: "Publié",
            Departure: "Paris, France",
            Arrival: "Rabat, Maroc",
            DateOfDeparture: " 09/12/2022",
            Quote: " 09/12/2022",
        },
    ]);

    return (
        <div className="w-full  md:h-full min-h-[calc(100vh-70px)] bg-white-off md:p-8 p-4 ">
            {/* Header here  */}
            {!IsDeparture && (
                <>
                    {Data.length > 0 ? (
                        <>
                            <SectionHeader
                                Title="Mes départs"
                                ButtonText="Publier un départ"
                                ButtonFunction={() => {
                                    SetIsDeparture(true);
                                }}
                                Icon={<AiOutlinePlus size={20} />}
                            />
                            <div className="w-full  flex flex-col gap-2 bg-white-main mt-4 rounded-[8px] p-4 ">
                                {/* table header here */}
                                <div className="w-full flex items-center justify-between border-b-[1px] border-b-white-off sm:py-[10px] py-[8px]">
                                    <p className=" w-full font-OpenSans font-[600] sm:text-[18px] text-[14px] text-black-main  leading-[28px]">
                                        Toutes les départs ({Data.length})
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

                                <div className="overflow-auto">
                                    <div className="min-w-[900px]">
                                        {/* Table headings here */}
                                        <div className="grid w-full items-center grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_0.5fr] gap-[8px] border-b-[1px] border-b-white-off md:py-[10px] py-[8px] ">
                                            <div className="flex items-center cursor-pointer justify-center w-full">
                                                <Checkbox
                                                    sx={{
                                                        color: "#A3ADC2",
                                                        borderRadius: "6px",
                                                        "&.Mui-checked": {
                                                            color: "#FF8501",
                                                        },
                                                    }}
                                                />
                                            </div>
                                            <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                                                Statut
                                            </p>
                                            <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                                                Départ
                                            </p>
                                            <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                                                Arrivé
                                            </p>
                                            <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                                                Date de départ
                                            </p>
                                            <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                                                Demandes de devis
                                            </p>
                                        </div>

                                        {/* data  here */}
                                        {Data?.map((item: any, index: number) => {
                                            return (
                                                <TableRow
                                                    key={index}
                                                    Status={item.Status}
                                                    Departure={item.Departure}
                                                    Arrival={item.Arrival}
                                                    DateOfDeparture={item.DateOfDeparture}
                                                    Quote={item.Quote}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <SectionHeader
                                Title="Mes départs"
                                ButtonText="Publier un départ"
                                ButtonFunction={() => {
                                    SetIsDeparture(true);
                                }}
                                Icon={<AiOutlinePlus size={20} />}
                            />
                            <div className="w-full flex flex-col gap-3  items-center justify-center bg-white-main rounded-[8px] mt-4 py-6">
                                {/* Icon here */}
                                <div className=" h-[100px] w-[100px] flex justify-center items-center bg-gradient-to-t from-white-main to-[#F2F2F2] rounded-full p-4 ">
                                    <Icons.LocationIcon
                                        fill=""
                                        stroke=""
                                        ClassName="w-[100px] h-[100px]"
                                    />
                                </div>

                                <p className="text-center sm:text-[18px] text-[14px] text-black-main font-NunitoSans font-[600] leading-[28px] ">
                                    Publier votre premier départ
                                </p>
                                <p className="text-center text-black-main font-OpenSans font-[400] sm:text-[16px] text-[14px] leading-[28px]">
                                    Une fois que vous publiez des départ, ils seront visibles ici.
                                </p>
                                <button
                                    onClick={() => {
                                        SetIsDeparture(true);
                                    }}
                                    className="flex gap-2 items-center justify-center text-brand-main font-NunitoSans font-[600] sm:text-[14px] text-[12px] leading-[20px]"
                                >
                                    {" "}
                                    <AiOutlinePlus size={15} /> Publier un départ
                                </button>
                            </div>
                        </>
                    )}
                </>
            )}

            {IsDeparture && (
                <DepartureInformation NavigateBack={() => SetIsDeparture(false)} />
            )}
        </div>
    );
}
export default Index;
