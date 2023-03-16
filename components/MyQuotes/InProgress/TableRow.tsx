import React from "react";
import Image from "next/image";
import {HiOutlineArrowRight} from 'react-icons/hi'
interface Props {
  Status: string;
  Departure: string;
  Arrival: string;
  DateOfDeparture: string;
  Marchandise?: string;
  image: string;
  PublisherImage: string;
  PublisherName: string;
  OnClick?:any;
}

const TableRow: React.FC<Props> = ({
  Status,
  Departure,
  Arrival,
  DateOfDeparture,
  PublisherImage,
  PublisherName,
  image,
  OnClick,
  Marchandise,
}: Props) => {
  return (
    <div
      className={`grid w-full items-center grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[8px] border-b-[1px] border-b-white-off md:py-[10px] py-[8px] `}
    >
      <div className="flex gap-4 items-center justify-center">
        {image && (
          <div className="relative h-[48px] w-[50px]  ">
            {" "}
            <Image className="rounded-[10px]" src={image} alt="" fill />
          </div>
        )}
        <button className={`items-center text-center justify-center  text-white-main h-[28px] w-[109px] sm:text-[14px] text-[12px] ${Status === 'Accepté' ? 'bg-[#1DAF4E]': Status==='en attente  '?'bg-[#25AAA2] ':'bg-[#4166BF]'} font-OpenSans font-[400] leading-[24px] rounded-[8px]`}>
          {Status}
        </button>
      </div>
      {Marchandise && (
        <p className="w-full items-center text-center justify-center  text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
          {Marchandise}
        </p>
      )}

      <p className="w-full items-center text-center justify-center  text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
        {Departure}
      </p>
      <p className="w-full items-center text-center justify-center  text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
        {Arrival}
      </p>
      <p className="w-full items-center text-center justify-center  text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
        {DateOfDeparture}
      </p>
      <div className="w-full flex items-center justify-center gap-2">
        <div className="w-[32px] h-[32px] rounded-full relative">
          <Image src={PublisherImage} alt="" fill />
        </div>
        <p className="text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
          {PublisherName}
        </p>
      </div>
      <button onClick={OnClick} className="flex gap-2 items-center justify-center font-OpenSans font-[600] text-brand-main text-[14px] leading-[20px]">
      Voir plus
      <HiOutlineArrowRight size={20}/>
      </button>
    </div>
  );
};

export default TableRow;
