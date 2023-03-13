import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import * as Icons from "../../../SVG/Icons";

interface Props {
  Route: string;
  IsVerified: boolean;
  CompanyImage: string;
  SendingPlace: string;
  SendingDate: string;
  RecievingDate: string;
  RecievingPlace: string;
  SendingMode: string;
}
const DepartCard: React.FC<Props> = ({
  Route,
  SendingDate,
  SendingMode,
  SendingPlace,
  RecievingDate,
  RecievingPlace,
  CompanyImage,
  IsVerified,
}) => {
  return (
    <div className="w-full">
      <div className="w-full md:min-w-[705px]">
        <div className="w-full h-full flex flex-col gap-[10px] rounded-[20px] border border-white-off shadow-lg relative pt-[35px] pb-[10px] px-[10px]">
          {IsVerified && (
            <div className="absolute top-[8px] -left-1 md:-left-4">
              <Icons.VerifiedIcon ClassName="h-[25px] max-w-[80px] md:max-w-[125px]" />
            </div>
          )}
          {/* top section here */}
          <div className="w-full flex md:grid grid-cols-[2fr,1fr,2fr] border-b border-b-white-off p-2">
            {/* image and sender div here */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center ">
              <div className="h-[32px] w-[65px] relative">
                <Image src={CompanyImage} alt="" fill />
              </div>

              <div className="w-full flex flex-col items-center justify-center text-center gap-0 sm:gap-[5px]">
                <p className="font-OpenSans font-[400] md:text-[16px] text-[12px] text-black-main leading-[24px] ">
                  {SendingPlace}
                </p>
                <p className="font-OpenSans font-[600] text-[10px] text-[#4D4D4D]">
                  {SendingDate}
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center text-center gap-0 sm:gap-[5px] ">
              <Icons.LongArrowRight
                ClassName="w-[60px] sm:w-[118px]"
                fill="none"
              />
              <p className="font-OpenSans font-[400] text-[10px] text-[#4D4D4D]">
                {SendingMode}
              </p>
            </div>

            <div className=" w-full flex flex-col md:flex-row item-center justify-center">
              <div className="w-full flex flex-col items-center justify-center text-center gap-0 sm:gap-[5px]">
                <p className="font-OpenSans font-[400] md:text-[16px] text-[12px] text-black-main leading-[24px] ">
                  {RecievingPlace}
                </p>
                <p className="font-OpenSans font-[600] text-[10px] text-[#4D4D4D]">
                  {RecievingDate}
                </p>
              </div>
              <Link
                className="flex items-center justify-center gap-1 mt-2 sm:mt-0"
                href={Route}
              >
                <p className="text-brand-main whitespace-nowrap text-[14px] leading-[24px] font-[600] font-OpenSans">
                  Voir plus
                </p>
                <BsArrowRight className="text-brand-main" size={20} />
              </Link>
            </div>
          </div>
          {/* Bottom section here */}
          <div className="w-full flex items-center justify-end text-right">
            <p className="font-OpenSans text-black-main">
              <span className="font-[600] text-[18px] ">2€</span>/
              <span className="font-[400] text-[12px]">Kilo</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartCard;
