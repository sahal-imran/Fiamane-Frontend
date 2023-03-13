import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import * as Icons from "../../SVG/Icons";
import { styled } from "@mui/material/styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BiMessageAlt } from "react-icons/bi";
import Rating from "@mui/material/Rating";

interface Props {
  Route: string;
  IsVerified: boolean;
  CompanyName: string;
  CompanyImage: string;
  rating: number;
  Reviews: string;
  Address: string;
  CompanyMessege: string;
}
const AnnuaireCard: React.FC<Props> = ({
  Route,
  IsVerified,
  rating,
  Reviews,
  CompanyImage,
  CompanyName,
  Address,
  CompanyMessege,
}: Props) => {
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
    <div className="w-full md:min-w-[636px]">
      <div className="w-full h-full flex flex-col gap-[10px] rounded-[20px] border border-white-off shadow-lg relative p-[20px] ">
        {IsVerified && (
          <div className="absolute top-[8px] -left-1 md:-left-4 z-10">
            <Icons.VerifiedIcon ClassName="h-[25px] max-w-[80px] md:max-w-[125px]" />
          </div>
        )}

        <div className="w-full flex sm:flex-row flex-col gap-[20px]">
          {/* left section here */}

          <div className="w-full h-[180px] sm:w-[200px] sm:h-[140px] flex items-center justify-center sm:border-[2px] sm:border-[#F2F2F2] relative rounded-[10px] p-1">
            <div className="h-[60%] w-full relative">
              <Image src={CompanyImage} alt="" fill />
            </div>
            <div className=" flex items-center absolute top-1 right-1">
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

          {/* right section here */}
          <div className=" w-full   flex flex-col items-center  gap-[10px]">
            {/* Company name and rating here */}
            <div className="w-full flex  items-center gap-[20px]">
              <p className="text-[20px] text-black-main font-NunitoSans font-[600] leading-[28px]">
                {CompanyName}
              </p>
              <div className="flex items-center justify-center gap-3">
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={1}
                  readOnly
                  emptyIcon={
                    <Icons.EmptyIcon ClassName="w-5 h-5" fill="" stroke="" />
                  }
                  icon={
                    <Icons.FillIcon ClassName="w-5 h-5" fill="" stroke="" />
                  }
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "#FF8501",
                      mr: "3px",
                    },
                  }}
                />
                <p className=" font-OpenSans font-[400] leading-[16px] text-[10px] text-black-main">
                  {`(${Reviews}avis)`}
                </p>
              </div>
            </div>
            {/* Features here */}
            <div className="w-full flex sm:flex-row flex-col items-center  gap-[10px]">
              <p className="font-[600] sm:w-[153px] text-center w-full font-OpenSans text-black-main text-[12px] leading-[16px] bg-white-off rounded-[6px] p-[6px]">
                Transport international
              </p>
              <p className="font-[600] sm:w-[76px] text-center w-full font-OpenSans text-black-main text-[12px] leading-[16px] bg-white-off rounded-[6px] p-[6px]">
                Logistique
              </p>
              <p className="font-[600] sm:w-[98px] text-center w-full font-OpenSans text-black-main text-[12px] leading-[16px] bg-white-off rounded-[6px] p-[6px]">
                Import export
              </p>
            </div>
            {/* Address here */}
            <div className="w-full flex items-center gap-[10px]">
              <MdLocationOn className="text-[#E31C1C]" size={20} />
              <p className="font-NunitoSans font-[500] text-blak-main text-[12px] leading-[20px]">
                {Address}Lotissement Boumara, 520, Oujda, Maroc
              </p>
            </div>
            {/* company messege here */}
            <div className="w-full flex items-center gap-[10px]">
              <Icons.MessageIcon
                ClassName="h-[40px] w-[40px]"
                stroke=""
                fill=""
              />
              <p className="font-NunitoSans font-[400] text-blak-main text-[12px] leading-[20px]">
                {CompanyMessege}
                Urna, purus ac eleifend quisque magna. Odio fermentum,
                suspendisse cursus rhoncus. Metus parturient fringilla viverra
                proin.... Lire plus
              </p>
            </div>
          </div>
        </div>
        {/* view more link here */}
        <Link
          className="flex items-center justify-center gap-1 mt-2 sm:mt-0 absolute md:top-1 top-0 md:right-3 right-0"
          href={Route}
        >
          <p className="text-brand-main whitespace-nowrap text-[16px] leading-[24px] font-[600] font-NunitoSans">
            Voir plus
          </p>
          <BsArrowRight className="text-brand-main" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default AnnuaireCard;
