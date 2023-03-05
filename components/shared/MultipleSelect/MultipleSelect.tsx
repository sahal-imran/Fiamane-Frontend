import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";

interface Props {
  selectData: any;
  state?: any;
  setState?: any;
}

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect = ({ selectData, state, setState }: Props) => {
  const theme = useTheme();

  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className="text-[16px] font-sans text-black-cool font-normal leading-[24px]"
        htmlFor="commodityBill"
      >
        content
      </label>

      <FormControl>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={state}
          onChange={setState}
          input={<OutlinedInput sx={{ display: "flex" }} />}
        >
          {state.length === 1 && (
            <MenuItem
              sx={{
                display: "flex",
                height: "48px",
                margin: "8px",
                border: "2px solid #e6e6e6",
                borderRadius: "8px",
              }}
              value=""
              disabled
            >
              <InputLabel className="text-base font-normal font-sans text-white-moreDark">
                MultipleSelect
              </InputLabel>
            </MenuItem>
          )}

          {selectData.map((name: any, index:number) => (
            <MenuItem
            key={index}
              sx={{
                display: "flex",
                height: "48px",
                margin: "8px",
                border: "2px solid #e6e6e6",
                borderRadius: "8px",
              }}
              className="multipleSelect"
              value={name.label}
            >
              <div className="flex gap-2 justify-center items-center">
                <Image
                  src={name.icon}
                  alt={name.label}
                  width={25}
                  height={25}
                />
                <span>{name.label}</span>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
