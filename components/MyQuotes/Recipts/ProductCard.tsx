import React from "react";
import * as Icons from "../../../SVG/Icons";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";

interface Props {
  data: any;
}

function ProductCard({ data }: Props) {
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
    <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between items-start py-4">
      <div className="flex justify-center md:flex-row flex-col items-center md:gap-2 gap-3 md:items-start">
        {/* ====> product image */}
        <div className="w-[140px] h-[110px] border-[2px] border-[#F2F2F2] relative rounded-[8px]">
          <Image src={data.img} fill className="cover" alt=""></Image>

          <Icons.VerifiedIcon
            ClassName="w-full absolute -left-2 top-0"
            fill=""
            stroke=""
          />
        </div>
        {/* =====> product title + rating + price + commit */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <p className="text-[18px] font-sans text-black-main font-semibold">
            {data.title}
          </p>
          <div className="flex items-center justify-center gap-1">
            <Rating
              name="half-rating-read"
              defaultValue={data.rating}
              precision={1}
              readOnly
              emptyIcon={
                <Icons.EmptyIcon ClassName="w-3 h-3" fill="" stroke="" />
              }
              icon={<Icons.FillIcon ClassName="w-3 h-3" fill="" stroke="" />}
              sx={{
                "& .MuiRating-iconFilled": {
                  color: "#FF8501",
                  mr: "3px",
                },
              }}
            />
            <p className=" font-OpenSans font-[400] leading-[16px] text-[10px] text-black-main">
              {`(4 avis)`}
            </p>
          </div>
          {/* price */}
          <div className="flex justify-center items-center gap-1 mt-2">
            <Icons.MoneyIcon ClassName="" fill="none" stroke="" />
            <p>{data.price}</p>
          </div>
          {/* commit */}
          <div className="flex justify-center items-center gap-1">
            <Icons.MessageIcon ClassName="" fill="none" stroke="" />
            <p>{data.message}</p>
          </div>
        </div>
      </div>
      {/* ===> message + cancel and accept button */}
      <div className="flex justify-center items-center gap-3">
        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-white-cool cursor-pointer">
          <Icons.MessageIcon2 ClassName="w-[16px] h-[17px]" fill="" stroke="" />
        </div>
        {/* ==> buttons */}
        <div className="flex justify-center items-center gap-3">
          {/* cancel button */}
          <ContainedCircle
            Text="Decliner"
            styles="w-[100px] bg-none text-[14px] font-sans font-semibold text-brand-secoundary border-[1px] border-white-cool rounded-[20px]"
          />
          {/* Accept button */}
          <ContainedCircle
            Text="Accepter"
            styles="w-[160px] bg-brand-main text-[14px] font-sans font-semibold text-white-main rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
