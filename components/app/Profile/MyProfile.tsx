import React from "react";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import { BsPerson } from "react-icons/bs";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

interface Props {
  ShowProfile: () => void;
  FormStates: any;
  handleForm: any;
}
const MyProfile: React.FC<Props> = ({
  ShowProfile,
  FormStates,
  handleForm,
}: Props) => {
  return (
    <div className="w-full flex flex-col">
      {/* =====> profile text with button */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-black-main text-[22px] sm:text-[34px] font-NunitoSans font-semibold">
          Mon profil
        </h1>
        <ContainedCircle onClick={ShowProfile} Text="Enregistrer" />
      </div>
      {/* ========> identity portion */}
      <div className="w-full flex flex-col bg-white-main rounded-[8px] my-4">
        <p className="h-[60px] flex justify-start items-center border-b-[2px] border-solid border-white-cool text-[20px] font-semibold font-NunitoSans text-brand-secondary px-5">
          Identité
        </p>
        <div className="w-full flex flex-col gap-4 p-5 py-8">
          {/* =====> full name + email address input  */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
            {/* ======> first name */}
            <div className="w-full lg:w-[50%]">
              <InputFieldWithIcon
                icon=<BsPerson className="text-black-cool text-[22px]" />
                label="Nom et pénom"
                name="fullName"
                placeholder="Saisissez le nom de votre société"
                state={FormStates.fullName}
                Set_State={handleForm}
              />
            </div>
            {/* =====> email address */}
            <div className="w-full lg:w-[50%]">
              <InputFieldWithIcon
                icon=<HiOutlineMail className="text-black-cool text-[22px]" />
                label="Adresse email"
                name="emailAddress"
                placeholder="Choisissez une activité"
                state={FormStates.emailAddress}
                Set_State={handleForm}
              />
            </div>
          </div>
          {/* =======> telephone number + whatspApp number input */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
            {/* ======> telephone number */}
            <div className="w-full lg:w-[50%]">
              <InputFieldWithIcon
                icon=<BsTelephone className="text-black-cool text-[20px]" />
                label="Numéro de téléphone"
                name="telephoneNumber"
                state={FormStates.telephoneNumber}
                Set_State={handleForm}
                placeholder="Saisissez le nom de votre société"
              />
            </div>
            {/* =====> whatsapp number */}
            <div className="w-full lg:w-[50%]">
              <InputFieldWithIcon
                icon=<ImWhatsapp className="text-black-cool text-[22px]" />
                label="Numéro WhatsApp"
                name="whatsappNumber"
                state={FormStates.whatsappNumber}
                Set_State={handleForm}
                placeholder="Choisissez une activité"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
