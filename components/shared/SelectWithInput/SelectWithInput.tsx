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
          className="px-2 h-[50px] border-[1px] rounded-l-[8px] border-solid border-white-cool outline-none"
          type="number"
          value={priceState}
          onChange={setPriceState}
          required
          id=""
          name=""
        />
        {/* ========> select box */}
        {/* <select
          className="px-2 text-base font-sans text-black-main outline-none border-[1px] rounded-r-[8px] border-solid border-white-cool h-[50px]"
          name=""
          id=""
        >
          {PricePerKgData.map((opt, index) => {
            return (
              <option key={index} value={opt.value}>
                {opt.name}
              </option>
            );
          })}
        </select> */}
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
