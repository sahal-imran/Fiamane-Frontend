import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 20,
    height: 20,
    boxShadow:
        theme.palette.mode === "dark"
            ? "0 0 0 1px rgb(16 22 26 / 40%)"
            : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
        theme.palette.mode === "dark"
            ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
            : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2
    },
    "input:hover ~ &": {
        backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5"
    },
    "input:disabled ~ &": {
        boxShadow: "none",
        background:
            theme.palette.mode === "dark"
                ? "rgba(57,75,89,.5)"
                : "rgba(206,217,224,.5)"
    }
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#ff8501",
    backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
        display: "block",
        width: 20,
        height: 20,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
        content: '""'
    },
    "input:hover ~ &": {
        backgroundColor: "#ff8501"
    },
    boxShadow: "none"
});


interface props {
    FirstValue: string;
    FirstLabel: string;
    SecondValue: string;
    SecondLabel: string;
    ChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void
    DefaultValue: string
}

export default function RadioGroupButton({ DefaultValue, FirstValue, FirstLabel, SecondValue, SecondLabel, ChangeEvent }: props) {
    return (
        <RadioGroup
            row
            defaultValue={DefaultValue}
            onChange={ChangeEvent}
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
            }}
        >
            <div className="flex justify-center items-center gap-2" >
                <Radio
                    sx={{ padding: 0 }}
                    disableRipple
                    color="default"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                    value={FirstValue}
                />
                <p className="font-OpenSans font-normal text-[16px] leading-[28px] text-black-cool mb-[2px]" >
                    {FirstLabel}
                </p>
            </div>
            <div className="flex justify-center items-center gap-2" >
                <Radio
                    sx={{ padding: 0 }}
                    disableRipple
                    color="default"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                    value={SecondValue}
                />
                <p className="font-OpenSans font-normal text-[16px] leading-[28px] text-black-cool mb-[2px]" >
                    {SecondLabel}
                </p>

            </div>
        </RadioGroup>
    );
}
