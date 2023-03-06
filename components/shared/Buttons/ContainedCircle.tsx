import React from "react";

interface Props {
  Icon?: any;
  Text: string;
  styles?: string;
  rounded?: string;
  onClick?: () => void;
  type?: any;
}

function ContainedCircle({
  Icon,
  Text,
  onClick,
  type,
  rounded = "rounded-[20px]",
  styles = "w-[158px] bg-brand-main text-white-main text-white-main",
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-[40px] font-OpenSans font-semibold text-[14px] leading-[20px] flex justify-center items-center gap-2 ${rounded} ${styles}`}
    >
      {Icon && Icon}
      {Text}
    </button>
  );
}

export default ContainedCircle;
