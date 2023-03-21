import React from "react";
import CustomSelect from "../Select/Select";

interface Props {
  priceState?: string;
  setPriceState?: any;
  unitState?: string;
  setUnitState?: any;
  label?: any;
  selectData?: any;
}

const SelectWithInput = ({
  priceState,
  setPriceState,
  unitState,
  setUnitState,
  label,
  selectData,
}: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2">
      {label && (
        <label
          htmlFor=""
          className="text-[16px] font-sans text-black-cool font-normal leading-[24px]"
        >
          {label}
        </label>
      )}
      <div className="w-full grid justify-center items-center grid-cols-[3fr,1fr]">
        {/* ======> input */}
        <input
          className="px-2 h-[50px] border-[1px] border-r-[0px] rounded-l-[8px] border-white-cool outline-none "
          type="number"
          value={priceState}
          onChange={setPriceState}
          required
          id=""
          name=""
        />
        {/* ========> select box */}

        <CustomSelect
          state={unitState}
          setState={setUnitState}
          inptLabel="Euro"
          selectData={selectData}
        />
      </div>
    </div>
  );
};

export default SelectWithInput;