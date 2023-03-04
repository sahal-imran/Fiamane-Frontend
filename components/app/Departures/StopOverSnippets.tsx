import React from "react";
import { BsThreeDots } from "react-icons/bs";
import MoreButton from "components/shared/Buttons/moreButton";
interface Props {
  country?: string;
  date?: string;
  address?: string;
}

const StopOverSnippets = ({ country, date, address }: Props) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-start p-4">
      {/* => country */}
      <div className="w-full flex justify-between items-center mb-3">
        <p>{country}</p>
        <MoreButton />
      </div>
      {/* =====> date */}
      <div className="w-full flex justify-between items-center">
        <p className="text-[12px] font-sans font-normal leading-[20px]">
          Date approximative
        </p>
        <p className="text-[12px] font-sans font-normal leading-[20px]">
          {date}
        </p>
      </div>
      {/* ======> Address */}
      <div className="w-full flex justify-between items-center">
        <p className="text-[12px] font-sans font-normal leading-[20px]">
          Adresse
        </p>
        <p className="text-[12px] font-sans font-normal leading-[20px]">
          {address}
        </p>
      </div>
    </div>
  );
};

export default StopOverSnippets;
