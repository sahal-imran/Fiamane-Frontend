import React, { useRef, useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineDuplicate } from "react-icons/hi";
import { BiPencil } from "react-icons/bi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const MoreButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
  
    <div>
      <button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="w-[28px] flex justify-center rounded-full items-center bg-white-off p-[3px]"
      >
        {" "}
        <FiMoreHorizontal size={20} />
      </button>

      <Menu
      sx={{marginTop:'10px'}}
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        
      >
       
        <MenuItem>
          <div className="flex gap-2">
         <BiPencil size={25} />
            {" "}
            <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[24px]">
              Modifier
            </p>
            {" "}
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex gap-2">
            <RiDeleteBinLine size={20} />
            <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[24px]">
              Dupliquer
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex gap-2">
            <HiOutlineDuplicate size={20} />
            <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[24px]">
              Supprimer
            </p>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MoreButton;
