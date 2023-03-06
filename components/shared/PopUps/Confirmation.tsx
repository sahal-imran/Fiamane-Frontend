import React, { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import * as Icons from "../../../SVG/Icons";
import Image from 'next/image';


interface Props {
    Text: string;
    IsOpen: boolean;
    ConfirmedEvent: () => void;
    CancelEvent: () => void
}

function ConfirmationPopUp({ Text, IsOpen, ConfirmedEvent, CancelEvent }: Props) {
    return (
        <Dialog
            sx={{
                "& .MuiPaper-root": {
                    background: "#FFFFFF",
                    borderRadius: "20px",
                    minWidth: "auto",
                    maxHeight: "auto"
                },
                "& ::-webkit-scrollbar": {
                    width: "0px"
                }
            }}
            open={IsOpen}>
            <div className="sm:w-[390px] w-full h-[210px] flex justify-center items-center flex-col p-4 gap-3" >
                <p className="font-OpenSans font-normal text-black-main text-[16px] leading-[28px] text-center" >
                    {Text}
                </p>
                {/* Actions */}
                <div className="w-full flex justify-center items-center gap-6" >
                    <button onClick={CancelEvent} className="w-[50%] h-[48px] rounded-[8px] text-brand-secondary flex justify-center items-center font-NunitoSans font-semibold bg-transparent border-[1px] border-white-dark " >
                        Annuler
                    </button>
                    <button onClick={ConfirmedEvent} className="w-[50%] h-[48px] rounded-[8px] text-white-main flex justify-center items-center font-NunitoSans font-semibold bg-brand-main border-[1px] border-white-dark " >
                        Continuer
                    </button>
                </div>
            </div>
        </Dialog>
    )
}

export default ConfirmationPopUp