import React from "react";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import { TbWorld } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

interface Props {
  profileFormState: any;
  handleProfileForm: any;
}

const CompanyContacts: React.FC<Props> = ({
  profileFormState,
  handleProfileForm,
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-[16px] font-NunitoSans font-semibold leading-[24px] text-brand-secondary">
          Contacts de la société
        </p>
        <p className="text-[14px] font-sans font-normal leading-[24px]">
          Ajoutez vos informations juridique de votre société.
        </p>
      </div>
      {/* =========> site web + telephone number */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        {/* ======> site web */}
        <div className="w-full lg:w-[50%]">
          <InputFieldWithIcon
            icon=<TbWorld className="text-black-cool text-[22px]" />
            label="Site web"
            placeholder="Selectionnez votre pays"
            name="siteWeb"
            state={profileFormState.siteWeb}
            Set_State={handleProfileForm}
          />
        </div>
        {/* =====> telephone number */}
        <div className="w-full lg:w-[50%]">
          <InputFieldWithIcon
            icon=<BsTelephone className="text-black-cool text-[22px]" />
            label="Téléphone"
            placeholder="Cherechez votre adresse"
            name="telephoneNumber"
            state={profileFormState.telephoneNumber}
            Set_State={handleProfileForm}
          />
        </div>
      </div>
      {/* =========> Facebook address + instagram address */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        {/* ======> first name */}
        <div className="w-full lg:w-[50%]">
          <InputFieldWithIcon
            icon=<AiOutlineFacebook className="text-black-cool text-[22px]" />
            label="Facebook"
            placeholder="Selectionnez votre pays"
            name="facebook"
            state={profileFormState.facebook}
            Set_State={handleProfileForm}
          />
        </div>
        {/* =====> instagram address */}
        <div className="w-full lg:w-[50%]">
          <InputFieldWithIcon
            icon=<FaInstagram className="text-black-cool text-[22px]" />
            label="Instagram"
            placeholder="Cherechez votre adresse"
            name="instagram"
            state={profileFormState.instagram}
            Set_State={handleProfileForm}
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyContacts;
