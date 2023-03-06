import React from "react";
import Radio from "@mui/joy/Radio";

interface Props {
  label: string;
  state: string;
  setState: any;
  value: string;
}

const CustomRadio = ({ label, state, setState, value }: Props) => {
  return (
    <div>
      <Radio
        checked={state === value}
        required
        onChange={setState}
        value={value}
        name="radio-buttons"
        variant="solid"
        label={label}
        slotProps={{ input: { "aria-label": "A" } }}
      />
    </div>
  );
};

export default CustomRadio;
