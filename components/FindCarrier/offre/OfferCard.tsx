import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import Link from "next/link";

interface Props {
  Title: string;
  Route: string;
  Date: string;
  Address: string;
  Pic: string;
}

const OfferCard: React.FC<Props> = ({
  Title,
  Route,
  Date,
  Address,
  Pic,
}: Props) => {
  return (
    <div className="w-full flex justify-between bg-white-main shadow-xl rounded-[20px] border p-[20px]">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <Image
            className="object-cover rounded-[10px] -z-2"
            src={Pic}
            alt=""
            // fill
            width={98}
            height={108}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-OpenSans font-[600] text-[18px] leading-[28px]">
            {Title}
          </p>
          <div className="flex gap-[11px] items-center ">
            <GrLocation size={15} />
            <p className="text-[12px] leading-[20px] font-[400]">{Address}</p>
          </div>
          <div className="flex gap-[11px] items-center">
            <FiCalendar size={15} />
            <p className=" text-[12px] leading-[20px] font-[400]">{Date}</p>
          </div>
        </div>
      </div>

      <Link
        href={Route}
        className="flex items-center justify-center font-OpenSans font-[600] leading-[24px] gap-0 sm:gap-2  whitespace-nowrap text-[16px] text-brand-main -mt-24"
      >
        Voir plus
        <BsArrowRight size={20} />
      </Link>
    </div>
  );
};

export default OfferCard;
