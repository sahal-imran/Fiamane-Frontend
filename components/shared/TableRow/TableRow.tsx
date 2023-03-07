import React from "react";
import Image from "next/image";
import MoreButton from '../Buttons/moreButton'
import Checkbox from '@mui/material/Checkbox';
interface Props {
  Status: string;
  Departure: string;
  Arrival: string;
  DateOfDeparture: string;
  Quote: string;
  Marchandise?: string;
  image?: any;
  Cols?: boolean;
}

const TableRow: React.FC<Props> = ({
  Status,
  Departure,
  Arrival,
  DateOfDeparture,
  Quote,
  image,
  Marchandise,
  Cols,
}: Props) => {
  return (
    <div
      className={`grid w-full items-center ${
        Cols
          ? "grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_1fr_0.5fr]"
          : "grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_0.5fr]"
      } gap-[8px] border-b-[1px] border-b-white-off md:py-[10px] py-[8px] `}
    >
      <div className="flex items-center cursor-pointer justify-center w-full">
      <Checkbox
        sx={{
          color:'#A3ADC2',borderRadius:"6px",
          '&.Mui-checked': {
            color: '#FF8501',
          },
        }}
      />
      </div>
      <div className="flex gap-2 items-center justify-center">
        {image && (
          <div className="relative h-[40px] w-[40px]  ">
            {" "}
            <Image className="rounded-[10px]" src={image} alt="" fill />
          </div>
        )}
        <button className="items-center justify-center text-center text-white-main h-[28px] w-[109px] sm:text-[14px] text-[12px] bg-[#A0C1F8] font-OpenSans font-[400] leading-[24px] rounded-[8px]">
          {Status}
        </button>
      </div>
      {Marchandise && (
        <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
          {Marchandise}
        </p>
      )}

      <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
        {Departure}
      </p>
      <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
        {Arrival}
      </p>
      <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
        {DateOfDeparture}
      </p>
      <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
        {Quote}
      </p>
      <div className="flex items-center justify-center">
        {/* Note : Don't forget to pass your props so you don't get errors at build time  */}
        {/* <MoreButton  /> */}
      </div>
    </div>
  );
};

export default TableRow;
