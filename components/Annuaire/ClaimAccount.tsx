import React, { useState } from "react";
import { FiExternalLink, FiPhone } from "react-icons/fi";
import Rating from "@mui/material/Rating";
import * as Icons from "../../SVG/Icons";
import Image from "next/image";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import { styled } from "@mui/material/styles";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

interface Props {
  SetState: any;
}
const ClaimAccount: React.FC<Props> = ({ SetState }: Props) => {
  // const FilteredItem = Data.Annuaire.Agences.filter((item) => item.id === id);
  const [ClaimAccount, SetClaimAccount] = useState<boolean>(true);
  // for custom add to favourite icon
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#FF8501",
    },
    "& .MuiRating-iconEmpty": {
      color: "#FF8501",
    },
    "& .MuiRating-iconHover": {
      color: "#FF8501",
    },
  });

  return (
    <div className="w-full flex flex-col justify-center items-center px-4 lg:px-[10px] py-[20px] pb-32">
      <div className=" w-full max-w-[1200px] flex flex-col justify-center items-center gap-[16px]">
        <div className="flex w-full item-start">
          <div
            onClick={() => SetState(false)}
            className="flex  h-[20px] gap-1 cursor-pointer"
          >
            <BsArrowLeft size={20} />
            <p className="font-NunitoSans font-[600] text-[16px] leading-[24px]">
              Retour
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:grid lg:grid-cols-[1.3fr,3fr] gap-8">
          {/* left div here */}
          <div className="w-full flex flex-col items-center justify-start gap-[20px] py-6">
            {/* Company image here */}
            <div className="h-[230px] w-full flex items-center justify-center lg:w-[full] border-[1px] border-grey-cool rounded-[20px] relative">
              <div className="relative h-[200px] w-[200px] ">
                <Image src={"/Assets/Annuaire/Nopicture.png"} alt="" fill />
              </div>

              <div className=" flex items-center absolute top-2 right-2">
                <StyledRating
                  name="customized-color"
                  defaultValue={0}
                  getLabelText={(value: number) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                  }
                  precision={1}
                  icon={<AiFillHeart size={30} />}
                  max={1}
                  emptyIcon={<AiOutlineHeart size={30} />}
                />
              </div>
            </div>
            {/* Company contact details here */}
            <div className="w-full flex flex-col  justify-center  gap-[20px] border-[1px] border-grey-cool rounded-[8px] p-[10px]">
              <div className="w-full flex justify-between items-center border-b border-b-white-off py-[4px]">
                <p className="font-OpenSans font-[600] text-[16px] leading-[28px] text-brand-main">
                  https://www.mtt-oujda.com
                </p>
                <FiExternalLink size={20} />
              </div>
              <div className="w-full flex justify-between items-center border-b border-b-white-off py-[4px]">
                <p className="font-OpenSans font-[400] text-[16px] leading-[28px]">
                  +212 530 800 800
                </p>
                <FiPhone size={20} />
              </div>
            </div>
          </div>
          {/* right div here */}
          <div className="w-full  flex  flex-col items-center justify-center gap-[20px] mt-2 lg:mt-24">
            {/* Commpany name and rating here */}
            <div className=" w-full flex flex-col gap-[10px] justify-center">
              <p className="font-OpenSans font-[700] text-black-main text-[28px] leading-[38px]">
                Agence BOUMARA Trans
              </p>
              <div className="flex items-center gap-3">
                <Rating
                  name="half-rating-read"
                  defaultValue={0}
                  precision={1}
                  readOnly
                  emptyIcon={
                    <Icons.EmptyIcon ClassName="w-5 h-5" fill="" stroke="" />
                  }
                  icon={
                    <Icons.FillIcon ClassName="w-5 h-5" fill="" stroke="" />
                  }
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "#FF8501",
                      mr: "3px",
                    },
                  }}
                />
                <p className=" font-OpenSans font-[400] leading-[16px] text-[10px] text-black-main">
                  {`(0 avis)`}
                </p>
              </div>
              {/* ====> Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <ContainedCircle
                  Text="Demander un devis"
                  styles="w-full sm:w-[172px] h-[40px] bg-brand-main text-white-main h-[40px] font-OpenSans font-semibold text-[14px] leading-[20px] flex justify-center items-center gap-2 whitespace-nowrap "
                  Icon={<Icons.Speaker ClassName="h-[15px] w-[15px]" fill="" />}
                  rounded="rounded-[8px]"
                />
                <ContainedCircle
                  Text="Envoyer un message"
                  rounded="rounded-[8px]"
                  Icon={<Icons.MessageIcon ClassName="" stroke="" fill="" />}
                  styles="bg-white-main text-brand-secondary border-[2px] h-[40px] w-full sm:w-[180px] font-OpenSans font-[600] text-[14px]"
                />
              </div>
            </div>
            {/* Claim your account div here  */}
            {ClaimAccount && (
              <div className="w-full flex flex-col gap-3 bg-[#FFF4E5] border-[1px] border-brand-main rounded-[8px] px-[20px] py-[10px]">
                <Icons.ClaimIcon ClassName="" fill="" stroke="" />
                <p className="text-base font-OpenSans text-black-off font-[700] leading-[28px]">
                  Si vous êtes propriétaire de ce compte, vous pouvez le
                  réclamer en cliquant sur le bouton si-dessous !
                </p>
                <div className="w-full flex items-center justify-end">
                  <button
                    onClick={() => SetClaimAccount(false)}
                    className="flex  items-center justify-center bg-white-main font-NunitoSans font-[600] text-[14px] text-brand-main border-[1px] border-brand-main rounded-[8px] gap-1 py-[10px] px-[12px]"
                  >
                    <Icons.ClaimAccount fill="" ClassName="" stroke="" />
                    Réclamer mon compte
                  </button>
                </div>
              </div>
            )}
            {!ClaimAccount && (
              <div className="w-full flex flex-col gap-[10px]">
                <div className="w-full flex  bg-white-main border-[1px] border-brand-main rounded-[8px] px-[20px] py-[10px]">
                  <p className="font-[600] text-[16px] font-OpenSans leading-[28px]">
                    Un message a été envoyé à l’adresse e-mail{" "}
                    <span className="text-brand-main">
                      bou*******ans@gmail.com
                    </span>
                    , veuillez le vérifier afin de pouvoir réclamer votre
                    compte.
                  </p>
                </div>
                <div className="w-full flex items-center py-[10px] px-[20px]">
                  <p className="font-OpenSans font-[700] text-[16px] leading-[28px] text-[#7E858B]">
                    Si vous n’arrivez pas à réclamer votre compte, veuillez nous
                    contacter sur ce numéro{" "}
                    <span className="text-brand-main">+212 702 020 101</span>{" "}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimAccount;
