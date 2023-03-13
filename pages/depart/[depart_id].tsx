import React, { useState } from "react";
import Link from "next/link";
import { BsArrowLeft, BsFacebook, BsInstagram, BsCheck } from "react-icons/bs";
import { FiExternalLink, FiPhone, FiCalendar } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import Rating from "@mui/material/Rating";
import * as Icons from "../../SVG/Icons";
import Image from "next/image";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import { IoIosArrowUp } from "react-icons/io";
import Data from "constants/JSON/Data";
import DialogueWrapper from "components/shared/Dialogue/DialogueWrapper";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const DepartsDetail = () => {
  const router = useRouter();
  const id = router.query.slug as string;

  const FilteredItem = Data.FindCarrier.Departs.filter(
    (item) => item.Id === id
  );
  // for custom add to favourite icon
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FF8501",
    },
    "& .MuiRating-iconHover": {
      color: "#FF8501",
    },
  });
  //  states
  const [IsExpand, SetIsExpand] = useState<null | number>(null);
  const [OpenDialogue, setOpenDialogue] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 lg:px-[10px] py-[20px] pb-32">
      <div className=" w-full max-w-[1200px] flex flex-col justify-center items-center gap-[16px]">
        {/* Navigaet back link here */}
        <div className="flex w-full item-start">
          <Link className="flex  h-[20px] gap-1 " href={"/"}>
            <BsArrowLeft size={20} />
            <p className="font-NunitoSans font-[600] text-[16px] leading-[24px]">
              Retour
            </p>
          </Link>
        </div>
        <div className="w-full flex flex-col lg:grid grid-cols-[1fr,3fr] gap-6 py-6">
          {/* left div here */}
          <div className="w-full flex flex-col items-center justify-start gap-[20px]">
            {/* Company image here */}
            <div className="h-[230px] w-[300px] flex items-center justify-center lg:w-[full] border-[1px] border-grey-cool rounded-[20px] relative">
              <div className="relative h-[200px] w-[200px] ">

              <Image src={FilteredItem[0]?.CompanyImage} alt="" fill />
              
                </div>
                {FilteredItem[0]?.IsVerified && (
                <Icons.VerifiedIcon
                ClassName="w-[122px] absolute top-[8px] -left-1"
                  fill=""
                />
                )}
              <div className=" flex items-center absolute top-2 right-2">
                <StyledRating
                  name="customized-color"
                  defaultValue={0}
                  getLabelText={(value: number) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                  }
                  precision={1}
                  icon={<AiFillHeart size={30} />}
                  max={1}
                  emptyIcon={<AiOutlineHeart size={30} />}
                />
              </div>
            </div>
            {/* Company contact details here */}
            <div className="w-full flex flex-col  justify-center  gap-[20px] border-[1px] border-grey-cool rounded-[8px] p-[10px]">
              <div className="w-full flex justify-between items-center border-b border-b-white-off py-[4px]">
                <p className="font-OpenSans font-[600] text-[16px] leading-[28px] text-brand-main">
                  https://www.mtt-oujda.com
                </p>
                <FiExternalLink size={20} />
              </div>
              <div className="w-full flex justify-between items-center border-b border-b-white-off py-[4px]">
                <p className="font-OpenSans font-[400] text-[16px] leading-[28px]">
                  {FilteredItem[0]?.Phone}
                </p>
                <FiPhone size={20} />
              </div>
              <div className="w-full flex justify-between items-center border-b border-b-white-off py-[4px]">
                <p className="font-OpenSans font-[400] text-[16px] leading-[28px]">
                  {FilteredItem[0]?.Address}
                </p>
                <MdOutlineLocationOn size={20} />
              </div>
              <div className="flex gap-2 items-start">
                <BsFacebook size={20} />
                <BsInstagram size={20} />
              </div>
            </div>
          </div>
          {/* right div here */}
          <div className="w-full  flex  flex-col items-center justify-center gap-[20px] mt-2 lg:mt-24">
            {/* Commpany name and rating here */}
            <div className=" w-full flex flex-col gap-[10px] justify-center">
              <p className="font-OpenSans font-[700] text-black-main text-[28px] leading-[38px]">
                {FilteredItem[0]?.CompanyName}
              </p>
              <div className="flex items-center gap-3">
                <Rating
                  name="half-rating-read"
                  defaultValue={FilteredItem[0]?.Rating}
                  precision={0.5}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "#FF8501",
                    },
                  }}
                />
                <p className=" font-OpenSans font-[400] leading-[16px] text-[10px] text-black-main">
                  {`(${FilteredItem[0]?.Rating} avis)`}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <ContainedCircle
                  onClick={() => setOpenDialogue(true)}
                  Text="Demander un devis"
                  styles="w-[172px] p-[10px] bg-brand-main text-white-main h-[40px] font-OpenSans font-semibold text-[14px] leading-[20px] flex justify-center items-center gap-2 whitespace-nowrap "
                  Icon={<Icons.Speaker ClassName="h-[15px] w-[15px]" fill="" />}
                  rounded="rounded-[8px]"
                />
                <ContainedCircle
                  Text="Voir profil"
                  rounded="rounded-[8px]"
                  styles="bg-white-main text-brand-secondary border-[2px] p-[6px] w-[87px] font-OpenSans font-[600] text-[14px]"
                />
              </div>
            </div>
            {/* information about the departure date and place */}
            <div className="w-full flex flex-col gap-[10px] justify-center">
              <p className="font-NunitoSans font-[600] text-black-main text-[24px] leading-[38px]">
                Informations sur le voyage
              </p>
              <div className="w-full flex flex-col md:grid grid-cols-2 gap-[20px]">
                {/* departure inforamtion here */}
                <div className=" w-full flex flex-col gap-[10px] bg-white-off p-[10px] rounded-[8px]">
                  <p className="font-NunitoSans font-[600] text-[20px] leading-[32px] text-brand-secondary">
                    Départ
                  </p>
                  <div className="w-full flex gap-2 items-center">
                    <FiCalendar size={20} />
                    <p className="font-OpenSans font-[400] tetx-[16px] leading-[28px] text-black-main">
                      Date de départ :{FilteredItem[0]?.SendingDate}
                    </p>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <MdOutlineLocationOn size={20} />
                    <p className="font-OpenSans font-[400] tetx-[16px] leading-[28px] text-black-main">
                      Lieu de ramassage :
                    </p>
                  </div>
                  <div className="flex ml-[20px] flex-col gap-[5px]">
                    <span className="flex gap-2 text-brand-main text-[14px] font-[600] leading-[28px] items-center">
                      <BsCheck size={15} /> Dépot en agence
                    </span>
                    <p className="font-[600] font-OpenSans text-black-off/80 tetx-[14px]">
                      33 Rue du Général Leclerc
                    </p>
                  </div>
                </div>
                {/* Arrival information here */}
                <div className=" w-full flex flex-col gap-[10px] bg-white-off p-[10px] rounded-[8px]">
                  <p className="font-NunitoSans font-[600] text-[20px] leading-[32px] text-brand-secondary">
                    Arrivée
                  </p>
                  <div className="w-full flex gap-2 items-center">
                    <FiCalendar size={20} />
                    <p className="font-OpenSans font-[400] tetx-[16px] leading-[28px] text-black-main">
                      Date d’arrivée :{FilteredItem[0]?.RecievingDate}
                    </p>
                  </div>
                  <div className="w-full flex gap-2 items-center">
                    <MdOutlineLocationOn size={20} />
                    <p className="font-OpenSans font-[400] tetx-[16px] leading-[28px] text-black-main">
                      Lieu de dispatch :
                    </p>
                  </div>
                  <div className="flex ml-[20px] flex-col gap-[5px]">
                    <span className="flex gap-2 text-brand-main text-[14px] font-[600] leading-[28px] items-center">
                      <BsCheck size={15} /> Livraison à domicile possible
                    </span>
                    <span className="flex gap-2 text-brand-main text-[14px] font-[600] leading-[28px] items-center">
                      <BsCheck size={15} /> Livraison à L’agence
                    </span>
                    <p className="font-[600] font-OpenSans text-black-off/80 tetx-[14px]">
                      N°54 Kissariat Dahir, Av. Hassan II
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========> prix portion */}
            <div className="w-full flex flex-col justify-center items-start py-4">
              <p className="w-full flex justify-between items-center text-brand-secondary text-[20px] font-semibold font-NunitoSans bg-[#F6F7F9] px-4 rounded-tl-[20px] rounded-tr-[20px] h-[55px]">
                Prix
                <IoIosArrowUp className="text-[20px] text-black-cool" />
              </p>
              {/* ====> */}
              <div className="w-full flex flex-col border-[1px] border-solid border-white-cool rounded-bl-[20px] rounded-br-[20px]">
                {/* Price per Kilo */}
                <p className="w-full flex justify-between items-center text-brand-secondary text-[16px] font-semibold font-NunitoSans p-4 mt-5">
                  Prix au Kilo
                </p>
                {/* price  + Price is negotiable */}
                <div className="w-full flex justify-between items-center px-4">
                  <p className="text-brand-secondary text-[24px] font-Roboto font-bold">
                    25€{" "}
                  </p>
                  {/* Price is negotiable */}
                  <div className="flex justify-center items-center gap-3 bg-[#E7F0FD] rounded-[8px] p-3">
                    <Icons.ExclimationSign
                      ClassName="w-4 h-4"
                      stroke=""
                      fill=""
                    />
                    <p className="text-[12px] font-semibold font-NunitoSans">
                      Le prix est négociable
                    </p>
                  </div>
                </div>
                {/* =====> Price per piece section */}
                <div className="flex flex-col p-4 mb-4">
                  <p className="w-full text-brand-secondary text-[16px] font-semibold font-NunitoSans mb-3">
                    Prix à la pièce
                  </p>
                  {/* ===> product with price */}
                  <div className="w-full flex flex-col gap-3 px-4">
                    <div className="w-full items-center flex justify-between">
                      <p className=" text-brand-secondary text-[16px] font-semibold font-NunitoSans">
                        Frigo
                      </p>
                      <p className=" text-brand-secondary text-[16px] font-semibold bg-white-main rounded-[8px] py-1 px-4 shadow-md font-NunitoSans">
                        100€
                      </p>
                    </div>
                    <div className="w-full items-center flex justify-between">
                      <p className=" text-brand-secondary text-[16px] font-semibold font-NunitoSans">
                        Frigo
                      </p>
                      <p className=" text-brand-secondary text-[16px] bg-white-main  rounded-[8px] shadow-md py-1 px-4 font-semibold font-NunitoSans">
                        100€
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* =======> Stopover portion */}
            <div className="w-full flex flex-col">
              <p className="w-full flex justify-between items-center text-brand-secondary text-[20px] font-semibold font-NunitoSans bg-[#F6F7F9] px-4 rounded-tl-[20px] rounded-tr-[20px] h-[55px] lg:h-[75px]">
                Escale
              </p>
              {/* ======> grid  */}
              <div className="w-full h-full grid grid-cols-[0.2fr,3fr] justify-center items-start py-6 border-l-[1px] border-r-[1px] border-b-[1px] rounded-b-[20px] border-white-cool md:px-0 px-4">
                {Data.stopOver.stopOverData.map((data, index: number) => {
                  return (
                    <>
                      <div className="flex h-full flex-col justify-start items-center">
                        {Data.stopOver.stopOverData.length === index + 1 ? (
                          <div
                            className={`w-[18px] h-[17px]  border-[2px] ${
                              IsExpand === index
                                ? "border-brand-main"
                                : "border-grey-dark "
                            } rounded-full`}
                          ></div>
                        ) : (
                          <div
                            className={`w-[18px] ${
                              IsExpand === index ? "h-[18px]" : "h-[24px]"
                            }  border-[2px] ${
                              IsExpand === index
                                ? "border-brand-main"
                                : "border-grey-dark "
                            }  rounded-full`}
                          ></div>
                        )}

                        {Data.stopOver.stopOverData.length === index + 1 ? (
                          ""
                        ) : (
                          <div className="h-full border-[1px] border-solid border-grey-dark"></div>
                        )}
                      </div>
                      <div className="flex flex-col justify-center items-start pt-0">
                        {/* ====> title */}
                        <p
                          onClick={() => {
                            const newIndex = index === IsExpand ? null : index;
                            SetIsExpand(newIndex);
                          }}
                          className="cursor-pointer flex justify-center items-center gap-4 text-[18px] text-brand-secondary font-bold font-NunitoSans pl-2"
                        >
                          {data.title}
                          <Icons.ExpandDown
                            ClassName="w-4 h-3"
                            fill="none"
                            stroke=""
                          />
                        </p>
                        {/* desciption */}
                        {IsExpand === index && (
                          <div className="w-full grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-3 justify-center items-start p-4">
                            <div className="flex flex-col">
                              {data.deliveryPoint?.map(
                                (deliveryData, index) => {
                                  return (
                                    <div key={index} className="flex flex-col items-start gap-1 ">
                                      <p className="text-brand-main text-[18px] font-NunitoSans font-semibold">
                                        {deliveryData.title}
                                      </p>
                                      {/* =====> date */}
                                      <div className="flex justify-center items-center gap-1">
                                        {deliveryData.date && (
                                          <Icons.DateIcon
                                            ClassName=""
                                            fill="#240046"
                                            stroke="none"
                                          />
                                        )}
                                        <p className="text-base font-normal font-sans">
                                          {deliveryData.date}
                                        </p>
                                      </div>
                                      {/* ====> address */}
                                      <div className="flex justify-center items-center gap-1">
                                        {deliveryData.address && (
                                          <Icons.Location
                                            ClassName="w-4 h-4"
                                            fill=""
                                            stroke="#240046"
                                          />
                                        )}

                                        <p className="text-base font-normal font-sans">
                                          {deliveryData.address}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                            <div className="flex flex-col">
                              {data.AgencyDeposite?.map(
                                (agencyDeposite, index) => {
                                  return (
                                    <div key={index} className="flex flex-col items-start gap-1">
                                      <p className="text-brand-main text-[18px] font-NunitoSans font-semibold">
                                        {agencyDeposite.title}
                                      </p>

                                      {/* =====> date */}
                                      <div className="flex justify-center items-center gap-1">
                                        {agencyDeposite.date && (
                                          <Icons.DateIcon
                                            ClassName=""
                                            fill="#240046"
                                            stroke="none"
                                          />
                                        )}
                                        <p className="text-base font-normal font-sans">
                                          {agencyDeposite.date}
                                        </p>
                                      </div>
                                      {/* ====> address */}
                                      <div className="flex justify-center items-center gap-1">
                                        {agencyDeposite.address && (
                                          <Icons.Location
                                            ClassName="w-4 h-4"
                                            fill=""
                                            stroke="#240046"
                                          />
                                        )}

                                        <p className="text-base font-normal font-sans">
                                          {agencyDeposite.address}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                            <div className="flex flex-col">
                              {data.homePickUp?.map((homePickUp, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="flex flex-col items-start gap-1"
                                  >
                                    <p className="text-brand-main text-[18px] font-NunitoSans font-semibold">
                                      {homePickUp.title}
                                    </p>

                                    {/* =====> date */}
                                    <div className="flex justify-center items-center gap-1">
                                      {homePickUp.date && (
                                        <Icons.DateIcon
                                          ClassName=""
                                          fill="#240046"
                                          stroke="none"
                                        />
                                      )}
                                      <p className="text-base font-normal font-sans">
                                        {homePickUp.date}
                                      </p>
                                    </div>
                                    {/* ====> address */}
                                    <div className="flex justify-center items-center gap-1">
                                      {homePickUp.address && (
                                        <Icons.Location
                                          ClassName="w-4 h-4"
                                          fill=""
                                          stroke="#240046"
                                        />
                                      )}

                                      <p className="text-base font-normal font-sans">
                                        {homePickUp.address
                                          ? homePickUp.address
                                          : ""}
                                      </p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* ===> bottom border */}
                        <div className="w-[98%] border-b-2 border-white-cool py-1 mb-4 sm:mb-0 sm:py-2"></div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogueWrapper
        styles="w-[300px] md:w-[513px]"
        Title="Demander un devis"
        State={OpenDialogue}
        Event={setOpenDialogue}
      >
        <div className="w-full flex flex-col p-6">
          <p className="text-base font-NunitoSans font-semibold">
            Vous êtes sur le point de demander un devis à l’agence Maghreb
            Tourisme & Transport
          </p>
          {/* =====> cancel + conform button */}
          <div className="w-full flex  gap-2 justify-center md:justify-end items-center pt-8">
            <ContainedCircle
              onClick={() => setOpenDialogue(false)}
              Text="Annuler"
              styles="text-brand-secondary bg-none border-[1px] border-white-cool rounded-[8px] w-[150px]"
            />
            <ContainedCircle
              onClick={() => setOpenDialogue(false)}
              Text="Annuler"
              styles="text-white-main bg-brand-main border-[1px] rounded-[8px] w-[150px]"
            />
          </div>
        </div>
      </DialogueWrapper>
    </div>
  );
};

export default DepartsDetail;
