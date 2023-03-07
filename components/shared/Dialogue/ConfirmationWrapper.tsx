import React, { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import * as Icons from "../../../SVG/Icons";
import Image from 'next/image';

interface Props {
    children?: ReactNode;
    Duration?: number;
    State: boolean;
    Event: (e: boolean) => void;
}

function Confirmation({ State, Event, children, Duration }: Props) {
    React.useEffect(() => {
        Duration && setTimeout(() => {
            Event(false)
        }, Duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [State])

    return <Dialog
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
        open={State} onClose={() => Event(false)}>
        <div className={`md:w-[465px] w-full h-[654px] py-8 px-10`} >
            <div className='w-[155px] m-auto h-[60px] relative' >
                <Image src={"/logo.svg"} alt="" fill className='object-cover' />
            </div>
            <div className="w-full h-[calc(100%-60px)] flex justify-center items-center" >
                {children}
            </div>
        </div>
    </Dialog>
}

export default Confirmation