import React from "react";
import ContainedCircle from "../Buttons/ContainedCircle";
import { AiOutlinePlus } from "react-icons/ai";
interface Props {
  Title: string;
  Icon?: any;
  ButtonText: string;
  ButtonFunction: () => void;
}

const SectionHeader: React.FC<Props> = ({
  Title,
  Icon,
  ButtonFunction,
  ButtonText,
}: Props) => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-black-main sm:text-[34px] text-[28px] leading-[54px] font-NunitoSans font-[600]">
        {Title}
      </p>
      <ContainedCircle
        Icon={Icon}
        Text={ButtonText}
        onClick={ButtonFunction}
        styles="sm:w-[185px] h-[40px] w-[158px] sm:text-[14px] text-[12px] bg-brand-main text-white-main font-NunitoSans font-[600]   "
      />
    </div>
  );
};

export default SectionHeader;
