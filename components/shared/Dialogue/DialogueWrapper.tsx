import React, { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import * as Icons from "../../../SVG/Icons";

interface Props {
  children?: ReactNode;
  Title: string;
  styles?: string;
  State: boolean;
  Event: (e: boolean) => void;
}

function DialogueWrapper({
  children,
  Title,
  styles = "w-[597px] min-h-[509px]",
  State,
  Event,
}: Props) {
  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          background: "#FFFFFF",
          borderRadius: "20px",
          maxWidth: "unset",
        },
        "& ::-webkit-scrollbar": {
          width: "0px"
        }
      }}
      open={State}
      onClose={() => Event(false)}
    >
      <div className={`${styles}`}>
        {/* Title and cross bar */}
        <div className="w-full h-[78px] bg-brand-main px-6 flex justify-between items-center">
          <h1 className="font-OpenSans font-semibold text-white-main sm:text-[24px] text-[16px] leading-[38px] tracking-[-0.02em] ">
            {Title}
          </h1>
          <button
            onClick={() => Event(false)}
            className="w-[32px] h-[32px] rounded-full bg-brand-mainOff flex justify-center items-center "
          >
            <Icons.Close ClassName="w-[16.8px] h-[16.8px]" fill="white" />
          </button>
        </div>
        {/* Content */}
        {children}
      </div>
    </Dialog>
  );
}

export default DialogueWrapper;
