import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  label?: string;
  inptLabel?: string;
  state?: any;
  setState?: any;
  selectData: any;
}

const CustomSelect = ({
  label,
  inptLabel,
  state,
  setState,
  selectData,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label ? (
        <label
          className="text-[16px] font-sans text-black-cool font-normal leading-[24px]"
          htmlFor={label}
        >
          {label}
        </label>
      ) : (
        ""
      )}

      <FormControl>
        <Select
          id={state}
          name={label}
          value={state}
          onChange={setState}
          displayEmpty
          className="mySelect"
          required
        >
          {inptLabel && (
            <>
              <MenuItem value="" disabled>
                <InputLabel className="text-base font-normal font-sans text-white-moreDark">
                  {inptLabel}
                </InputLabel>
              </MenuItem>
            </>
          )}
          {selectData.map((opt: any, index: number) => {
            return (
              <MenuItem key={index} value={opt.value}>
                {opt.option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
