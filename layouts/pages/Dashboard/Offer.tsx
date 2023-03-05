import React, { useState, useRef } from "react";
import * as Icons from "../../../SVG/Icons";
import { AiOutlinePlus } from "react-icons/ai";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { Checkbox } from "@mui/material";
import SectionHeader from "components/shared/SectionHeader/SectionHeader";
import TableRow from "components/shared/TableRow/TableRow";
import OffersInformation from "components/app/Offers/OffersInformation";

function Offer() {
    // function convertStringToFile(stringData: any, fileName: any, fileType: any) {
    //   const blob = new Blob([stringData], { type: fileType });
    //   const file = new File([blob], fileName, { type: fileType });
    //   return file;
    // }

    //   array containing the Offers data if there is some data
    const [Offers, setOffers] = useState<Array<object>>([
        {
            Status: "Besoin devis",
            Marchandise: "Bagages",
            Departure: "Madrid, Espagne",
            Arrival: "Tanger, Maroc",
            SendingDate: " 09/12/2022",
            Recipient: "Khalil Fiamane",
            Icon: <FiMoreHorizontal size={20} />,
            ButtonFunction: () => { },
            Image: "/Assets/Bags.png",
        },
    ]);
    //  State to display the offers information section

    const [isOffers, setIsOffers] = useState<boolean>(false);

    return (
        <div className="w-full h-full  bg-white-off md:p-8 p-4 ">
            {!isOffers && (
                <React.Fragment>
                    {/* Header here  */}
                    <SectionHeader
                        Title="Mes offres"
                        ButtonText="Publier une offre"
                        ButtonFunction={() => {
                            setIsOffers(true);
                        }}
                        Icon={<AiOutlinePlus size={20} />}
                    />
                    {Offers.length === 0 && (
                        <>
                            <div className="w-full flex flex-col gap-3  items-center justify-center bg-white-main rounded-[8px] mt-4 py-6">
                                {/* Icon here */}
                                <div className=" h-[100px] w-[100px] flex justify-center items-center bg-gradient-to-t from-white-main to-[#F2F2F2] rounded-full p-4 ">
                                    <Icons.PackageTracking
                                        fill=""
                                        stroke=""
                                        ClassName="w-[100px] h-[100px]"
                                    />
                                </div>

                                <p className="text-center sm:text-[18px] text-[14px] text-black-main font-NunitoSans font-[600] leading-[28px] ">
                                    Publier votre premiere offre
                                </p>
                                <p className="text-center text-black-main font-OpenSans font-[400] sm:text-[16px] text-[14px] leading-[28px]">
                                    Une fois que vous publiez des offres, ils seront visibles ici.
                                </p>
                                <button
                                    onClick={() => { }}
                                    className="flex gap-2 items-center justify-center text-brand-main font-NunitoSans font-[600] sm:text-[14px] text-[12px] leading-[20px]"
                                >
                                    {" "}
                                    <AiOutlinePlus size={15} /> Publier une offre
                                </button>
                            </div>
                        </>
                    )}

                    {Offers.length > 0 && (
                        //   if there is some is  data this div will appear
                        <div className="w-full  gap-2 bg-white-main mt-4 rounded-[8px] p-4 ">
                            {/* table header here */}
                            <div className="w-full flex items-center justify-between border-b-[1px] border-b-white-off sm:py-[10px] py-[8px]">
                                <p className=" w-full font-OpenSans font-[600] sm:text-[18px] text-[14px] text-black-main  leading-[28px]">
                                    Toutes les offres ({Offers.length})
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
                                    <div className="grid w-full items-center grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_1fr_0.5fr] gap-[8px] border-b-[1px] border-b-white-off md:py-[10px] py-[8px] ">
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
                                            Destinataire
                                        </p>
                                    </div>

                                    {/* data  here */}
                                    {Offers?.map((item: any, index: number) => {
                                        return (
                                            <TableRow
                                                key={index}
                                                Status={item.Status}
                                                Departure={item.Departure}
                                                Arrival={item.Arrival}
                                                DateOfDeparture={item.SendingDate}
                                                Quote={item.Recipient}
                                                image={item.Image}
                                                Marchandise={item.Marchandise}
                                                Cols={true}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </React.Fragment>
            )}

            {isOffers && (
                <>
                    <OffersInformation NavigateBack={() => setIsOffers(false)} />
                </>
            )}
        </div>
    );
}

export default Offer;
