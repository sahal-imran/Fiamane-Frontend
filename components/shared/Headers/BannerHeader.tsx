import React from "react";
interface Props {
  Title?: string;
  Subtitle?: string;
}
const BannerHeader: React.FC<Props> = ({ Title, Subtitle }: Props) => {
  return (
    <div className="h-[300px] w-full relative">
      <div className="h-full w-full absolute bg-black-main/10"></div>
      <div className="h-full w-full text-center  bg-[url(/Assets/Header.png)] bg-cover bg-no-repeat py-[30px] px-[16px] ">
        <p className="text-white-main md:text-[34px] text-[28px] font-[700] font-OpenSans leading-[54px] my-4 ">
          {Title}
        </p>
        <p className="text-white-main md:text-[20px] text-[16px] leading-[34px] font-OpenSans font-[400]">
          {Subtitle && Subtitle}
        </p>
      </div>
    </div>
  );
};

export default BannerHeader;
