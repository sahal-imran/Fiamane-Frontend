import React from "react";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Props {
  label: string;
  state?: any;
  Set_State?: any;
}
const ToggleSwitch: React.FC<Props> = ({ label, state, Set_State }: Props) => {
  // ======> ios material ui switch style
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      inputProps={{ "aria-label": "controlled" }}
      {...props}
    />
  ))(({ theme }: any) => ({
    width: 40,
    height: 24,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: "2px",
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#FF8501",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 20,
      height: 20,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <div>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} />}
        label={label}
        checked={state}
        onChange={(e: any) => Set_State(e.target.checked)}
      />
    </div>
  );
};

export default ToggleSwitch;
