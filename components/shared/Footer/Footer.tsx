import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import * as Icons from "../../../SVG/Icons"
const Footer: React.FC = () => {
  return (
    <div className="w-full h-[450px] flex flex-col md:items-center items-start justify-center bg-brand-secondary py-[30px] px-[16px] md:p-0">
      {/* Are you an agency or carrier? */}
      <div className=" max-w-[1200px] h-[172px]  hidden md:flex items-center justify-between gap-[48px] md:-translate-y-[160px] rounded-[8px] bg-white-main shadow-2xl py-[40px] px-[50px]">
        {/* left portion here */}
        <Icons.HomeIcon
          ClassName="lg:h-[42px] h-[50px]  lg:w-[35px] w-[50px]"
          fill="none"
        />
        <div className="flex flex-col justify-center gap-4">
          <p className="font-OpenSans font-[600] text-[32px] text-black-main leading-[24px]">
            Vous etes agence ou transporteur?
          </p>
          <p className="font-OpenSans font-[400] text-[16px] text-black-main leading-[28px]">
            Vous pouvez rejoigner la communauté Fiamane dès aujourd’hui
          </p>
        </div>

        {/* right portion here */}
        <ContainedCircle Text="S’inscrire" />
      </div>
      <div className="max-w-full md:max-w-[1200px] flex flex-col gap-10 md:grid md:grid-cols-3">
        {/* Icons here */}
        <div className="flex w-[142px] h-[42px] gap-4">
          <div className="bg-white-main text-[#7A7A7A] w-[42px] h-[42px] cursor-pointer hover:bg-white-dark hover:scale-110 duration-200 p-[8px] rounded-full ">
            <FaFacebookF size={25} />
          </div>
          <div className="bg-white-main text-[#7A7A7A] w-[42px] h-[42px] cursor-pointer hover:bg-white-dark hover:scale-110 duration-200 p-[8px] rounded-full ">
            <FaInstagram size={25} />
          </div>
          <div className="bg-white-main text-[#7A7A7A] w-[42px] h-[42px] cursor-pointer hover:bg-white-dark hover:scale-110 duration-200 p-[8px] rounded-full ">
            <ImLinkedin2 size={25} />
          </div>
        </div>

        {/* middle div here */}

        <div className=" flex flex-col gap-4">
          <p className=" text-white-main text-[16px] leading-[24px] font-OpenSans font-[600]">
            ACCÈS RAPIDE
          </p>
          <div className="flex flex-col gap-2">
            <p className=" text-white-main font-OpenSans font-[400] text-[16px] leading-[24px] ">
              Conditions générales
            </p>
            <p className=" text-white-main font-OpenSans font-[400] text-[16px] leading-[24px] ">
              Mentions légales
            </p>
            <p className=" text-white-main font-OpenSans font-[400] text-[16px] leading-[24px] ">
              Politique de confidentialité
            </p>
          </div>
        </div>

        {/* third div here */}

        <div className="flex flex-col w-[264px] gap-4">
          <p className=" text-white-main text-[16px] leading-[24px] font-OpenSans font-[600]">
            TÉLECHARGEMENT
          </p>

          <p className=" text-white-main font-OpenSans font-[400] text-[16px] leading-[24px] ">
            Téléchargez l’application Fiamane et suivez tous vos colis et
            bagages entre l’Europe et l’Afrique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
