import React, { useState } from "react";
import Image from "next/image";
import * as Icons from "../../SVG/Icons";
import { BsThreeDots } from "react-icons/bs";
import Rating from "@mui/material/Rating";

interface Props {
  item: {
    Name: string;
    Picture: string;
    Address: string;
    Rating: number;
    Date: string;
    Review: string;
  };
}
const Review: React.FC<Props> = ({ item }: Props) => {
  // states
  const [InputsValue, setInputsValue] = useState({
    useFull: false,
  });

  return (
    <div className="w-full flex flex-col justify-center items-start">
      <p className="text-[18px] font-NunitoSans font-semibold text-black-main">
        Avis recommandés
      </p>
      <div className="w-full flex flex-col py-4 gap-6 items-start">
        {/* ====> image + name + address */}
        <div className="w-full flex justify-between items-start">
          <div className="flex justify-center items-center gap-3">
            <div className="w-[60px] h-[60px] flex justify-center items-center relative">
              <Image
                src={item.Picture}
                fill
                className="full rounded-full"
                alt="profile-image"
              ></Image>
            </div>
            <div className="flex flex-col gap-1">
              {/* ===> name */}
              <p className="text-base font-NunitoSans font-semibold text-brand-secondary">
                {item.Name}
              </p>
              <p className="text-[12px] font-sans font-normal text-[#7A7A7A]">
                {item.Address}
              </p>
            </div>
          </div>
          <BsThreeDots className="text-[24px] text-brand-secondary cursor-pointer" />
        </div>
        {/* =====> rating + date */}
        <div className="flex justify-center items-center gap-4">
          <Rating
            name="half-rating-read"
            defaultValue={item.Rating}
            precision={1}
            readOnly
            emptyIcon={
              <Icons.EmptyIcon ClassName="w-5 h-5" fill="" stroke="" />
            }
            icon={<Icons.FillIcon ClassName="w-5 h-5" fill="" stroke="" />}
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#FF8501",
                mr: "3px",
              },
            }}
          />
          {/* ==> date */}
          <p className="text-[#7A7A7A] font-normal text-[14px] font-sans">
            {item.Date}
          </p>
        </div>
        {/* ====> review */}
        <p className="text-base font-sans font-normal leading-[28px] text-black-main">
          {item.Review}
        </p>
        {/* =====> use full button */}
        <div
          onClick={() =>
            setInputsValue({
              ...InputsValue,
              useFull: !InputsValue.useFull,
            })
          }
          className="flex gap-2 justify-center items-center w-[86px] h-[40px] shadow-lg border-[1px] border-white-cool rounded-[8px] cursor-pointer select-none"
        >
          <Icons.Light
            ClassName=""
            fill={`${InputsValue.useFull ? "#FF8501" : "#1A1A1A"}`}
            stroke=""
          />
          <p className="text-[14px] font-semibold font-NunitoSans text-brand-secondary">
            Utile
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
