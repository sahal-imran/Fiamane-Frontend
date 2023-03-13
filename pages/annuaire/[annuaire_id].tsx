import React, { useState } from "react";
import Link from "next/link";
import { BsArrowLeft, BsFacebook, BsInstagram, BsCheck } from "react-icons/bs";
import { FiExternalLink, FiPhone, FiCalendar } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import Rating from "@mui/material/Rating";
import * as Icons from "../../SVG/Icons";
import Image from "next/image";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import Data from "constants/JSON/Data";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Review from "components/Annuaire/Review";
import ClaimAccount from "components/Annuaire/ClaimAccount";
const AnnuaireDetail = () => {
  const router = useRouter();
  const id = router.query.slug as string;

  const FilteredItem = Data.Annuaire.Agences.filter((item) => item.id === id);
  // state to display claim account component
  const [IsClaimAccount, SetIsClaimAccount] = useState<boolean>(false);
  // for custom add to favourite icon
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FF8501",
    },
    "& .MuiRating-iconEmpty": {
      color: "#FF8501",
    },
    "& .MuiRating-iconHover": {
      color: "#FF8501",
    },
  });

  return (
    <div className="w-full flex flex-col justify-center items-center pt-[20px]">
      <div className=" w-full max-w-[1200px] flex  justify-center items-center px-4 lg:px-[10px]  gap-[16px] pb-32">
        {IsClaimAccount && <ClaimAccount SetState={SetIsClaimAccount} />}
        {!IsClaimAccount && (
          <div className="w-full">
            {/* Navigaet back link here */}
            <div className="flex flex-col w-full item-start">
              <Link className="flex  h-[20px] gap-1 " href={"/annuaire"}>
                <BsArrowLeft size={20} />
                <p className="font-NunitoSans font-[600] text-[16px] leading-[24px]">
                  Retour
                </p>
              </Link>
              <div className="w-full flex flex-col lg:grid grid-cols-[1.3fr,3fr] gap-2 md:gap-8 py-6">
                {/* left div here */}
                <div className="w-full flex flex-col items-center justify-start gap-[20px]">
                  {/* Company image here */}
                  <div className="h-[230px] w-full flex items-center justify-center lg:w-[full] border-[1px] border-grey-cool rounded-[20px] relative">
                    <div className="relative h-[160px] lg:h-[180px] w-[200px] ">
                      <Image src={FilteredItem[0]?.CompanyImage} alt="" fill />
                    </div>
                    {FilteredItem[0]?.IsVerified && (
                      <Icons.VerifiedIcon
                        ClassName="w-[122px] absolute top-[8px] -left-2"
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
                  {/* ========> Photo gallery */}
                  <div className="w-full flex flex-col justify-center items-center">
                    <div className="flex w-full items-center justify-between">
                      <p className="text-[18px] font-NunitoSans font-semibold text-black-main">
                        Galerie des photos
                      </p>
                      <p className="text-[14px] font-semibold font-NunitoSans text-brand-main cursor-pointer">
                        Voir plus
                      </p>
                    </div>
                    {/* ====>  gallery images */}
                    <div className="w-full grid grid-cols-3 gap-3 justify-center items-center py-4">
                      {FilteredItem[0]?.Gallery.map(
                        (item: any, index: number) => {
                          return (
                            <div key={index} className="w-full h-[115px] md:h-[170px] lg:h-[115px] relative">
                              <Image
                                key={index}
                                src={item}
                                fill
                                className="cover rounded-[8px]"
                                alt={item}
                              ></Image>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
                {/* right div here */}
                <div className="w-full  flex  flex-col items-center justify-center gap-[20px] mt-2 lg:mt-24">
                  {/* Commpany name and rating here */}
                  <div className=" w-full flex flex-col gap-[10px] justify-center items-center sm:items-start">
                    <p className="font-OpenSans font-[700] text-black-main text-[28px] leading-[38px]">
                      {FilteredItem[0]?.CompanyName}
                    </p>
                    <div className="flex items-center gap-3">
                      <Rating
                        name="half-rating-read"
                        defaultValue={FilteredItem[0]?.Rating}
                        precision={1}
                        readOnly
                        emptyIcon={
                          <Icons.EmptyIcon
                            ClassName="w-5 h-5"
                            fill=""
                            stroke=""
                          />
                        }
                        icon={
                          <Icons.FillIcon
                            ClassName="w-5 h-5"
                            fill=""
                            stroke=""
                          />
                        }
                        sx={{
                          "& .MuiRating-iconFilled": {
                            color: "#FF8501",
                            mr: "3px",
                          },
                        }}
                      />
                      <p className=" font-OpenSans font-[400] leading-[16px] text-[10px] text-black-main">
                        {`(${FilteredItem[0]?.Reviews} avis)`}
                      </p>
                    </div>
                    {/* ====> Buttons */}
                    <div className="flex w-[80%] sm:flex-row flex-col justify-center sm:justify-start items-center gap-4">
                      <ContainedCircle
                        Text="Demander un devis"
                        styles="w-full sm:w-[172px] h-[40px] bg-brand-main text-white-main h-[40px] font-OpenSans font-semibold text-[14px] leading-[20px] flex justify-center items-center gap-2 whitespace-nowrap "
                        Icon={
                          <Icons.Speaker
                            ClassName="h-[15px] w-[15px]"
                            fill=""
                          />
                        }
                        onClick={() => SetIsClaimAccount(true)}
                        rounded="rounded-[8px]"
                      />
                      <ContainedCircle
                        Text="Envoyer un message"
                        rounded="rounded-[8px]"
                        Icon={
                          <Icons.MessageIcon ClassName="" stroke="" fill="" />
                        }
                        styles="bg-white-main text-brand-secondary border-[2px] h-[40px] w-full sm:w-[180px] font-OpenSans font-[600] text-[14px]"
                      />
                    </div>
                  </div>
                  {/* =======> In regards to here */}
                  <div className="w-full flex flex-col gap-3 items-start justify-center">
                    <p className="text-[18px] font-NunitoSans font-semibold text-black-main">
                      A propos
                    </p>
                    <p className="text-base font-sans text-black-main font-normal leading-[28px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Venenatis, ut ipsum volutpat orci ultricies pellentesque.
                      Dolor massa duis in sem tellus vitae vitae. Velit blandit
                      gravida ac morbi sit sed viverra elit.{" "}
                    </p>
                    {/* =====> Features */}
                    <div className="flex justify-center items-center gap-2">
                      {Features.map((fea, index) => {
                        return (
                          <p
                            key={index}
                            className=" text-[12px] sm:text-[14px] font-Roboto font-[500] text-brand-secondary bg-[#F6F7F9] p-2 rounded-[8px]"
                          >
                            {fea.name}
                          </p>
                        );
                      })}
                    </div>
                    {/* =====> bottom border */}
                    <div className="w-full border-b-[1px] border-white-cool"></div>
                  </div>
                  {/* =====> Lega Information here */}
                  <div className="w-full flex flex-col gap-3 items-start justify-center">
                    <p className="text-[18px] font-NunitoSans font-semibold text-black-main">
                      Information juridique
                    </p>
                    <ul className="list-disc px-8">
                      {Data.LegalInformation.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="text-base font-normal font-sans leading-[28px]"
                          >
                            {item.information}
                          </li>
                        );
                      })}
                    </ul>
                    {/* =====> bottom border */}
                    <div className="w-full border-b-[1px] border-white-cool"></div>
                  </div>
                  {/* ====> Recommended Reviews section */}
                  <div className="w-full flex flex-col gap-6">
                    {FilteredItem[0]?.Clients.map(
                      (item: any, index: number) => {
                        return <Review key={index} item={item} />;
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnuaireDetail;

const Features = [
  {
    name: "Transport international",
  },
  {
    name: "Logistique",
  },
  {
    name: "Import export",
  },
];
