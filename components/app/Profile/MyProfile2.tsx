import React, { useRef } from "react";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import { HiOutlineCamera } from "react-icons/hi";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import Image from "next/image";

interface Props {
  ProfileStates: any;
  HandleProfileStates: any;
}

const MyProfile2: React.FC<Props> = ({
  ProfileStates,
  HandleProfileStates,
}: Props) => {
  const inputRef: any = useRef(null);

  const handleClick = (event: any) => {
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* =====> profile text with button */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-black-main text-[22px] sm:text-[34px] font-NunitoSans font-semibold">
          Mon profil
        </h1>
        <ContainedCircle Text="Enregistrer" />
      </div>
      {/* ========> identity portion */}
      <div className="w-full flex flex-col bg-white-main rounded-[8px] my-4">
        <p className="h-[60px] flex justify-start items-center border-b-[2px] border-solid border-white-cool text-[20px] font-semibold font-NunitoSans text-brand-secondary px-5">
          Identité
        </p>
        <div className="w-full flex flex-col lg:flex-row p-5 py-8">
          {/* ======> profile image */}
          <button className="w-full lg:w-[30%]">
            <div className="w-full flex flex-col gap-4 justify-start items-center">
              <p className="text-base font-normal font-sans leading-[24px]">
                Photo de profil
              </p>
              <div className="w-[100px] h-[100px] text-[24px] font-medium text-black-off flex justify-center items-center rounded-full bg-white-dark relative">
                AM
                <div className="flex justify-center items-center p-[7px] rounded-full bg-white-main shadow-lg absolute -right-1 -bottom-1">
                  <HiOutlineCamera className="text-brand-main text-[18px]" />
                </div>
              </div>
              {/* ====delete picture */}
              <p className="text-brand-main font-normal font-sans leading-[24px]">
                Supprimer la photo
              </p>
            </div>
          </button>
          {/* ======> user information */}
          <div className="w-full lg:w-[70%] flex flex-col gap-4 justify-center items-center py-8 lg:py-0">
            <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-4">
              {/* ======> first name */}
              <div className="w-full xl:w-[50%]">
                <InputFieldWithIcon
                  icon=<BsPerson className="text-black-cool text-[22px]" />
                  label="Nom et pénom"
                  placeholder="Saisissez le nom de votre société"
                  name="fullName"
                  state={ProfileStates.fullName}
                  Set_State={HandleProfileStates}
                />
              </div>
              {/* =====> email address */}
              <div className="w-full xl:w-[50%]">
                <InputFieldWithIcon
                  icon=<HiOutlineMail className="text-black-cool text-[22px]" />
                  label="Adresse email"
                  placeholder="Choisissez une activité"
                  name="emailAddress"
                  state={ProfileStates.emailAddress}
                  Set_State={HandleProfileStates}
                />
              </div>
            </div>
            {/* =======> telephone number + whatspApp number input */}
            <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-4">
              {/* ======> telephone number */}
              <div className="w-full xl:w-[50%]">
                <InputFieldWithIcon
                  icon=<BsTelephone className="text-black-cool text-[20px]" />
                  label="Numéro de téléphone"
                  placeholder="Saisissez le nom de votre société"
                  name="telephoneNumber"
                  state={ProfileStates.telephoneNumber}
                  Set_State={HandleProfileStates}
                />
              </div>
              {/* =====> whatsapp number */}
              <div className="w-full xl:w-[50%]">
                <InputFieldWithIcon
                  icon=<ImWhatsapp className="text-black-cool text-[22px]" />
                  label="Numéro WhatsApp"
                  placeholder="Choisissez une activité"
                  name="whatsappNumber"
                  state={ProfileStates.whatsappNumber}
                  Set_State={HandleProfileStates}
                />
              </div>
            </div>
            {/* N° CIN + Photo de CIN  */}
            <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-4">
              {/* ======> N° CIN */}
              <div className="w-full xl:w-[50%]">
                <InputFieldWithIcon
                  label="N° CIN"
                  placeholder="Entrez votre N°CIN"
                  name="cin"
                  state={ProfileStates.cin}
                  Set_State={HandleProfileStates}
                />
              </div>
              {/* =====> Photo de CIN */}
              <div className="w-full xl:w-[50%] flex flex-col gap-1">
                <label
                  className="text-[16px] font-sans font-normla leading-[24px]"
                  htmlFor="logo"
                >
                  Photo de CIN
                </label>
                <div>
                  <input
                    className="hidden"
                    id="logo"
                    ref={inputRef}
                    type="file"
                    onChange={handleFileChange}
                  />
                  <button type="button" onClick={handleClick}>
                    <div className="w-[50px] h-[50px] flex justify-center items-center border-[1px] border-dashed rounded-md border-brand-main">
                      <Image
                        src="/Assets/addGallery.png"
                        width={25}
                        height={40}
                        className="cover"
                        alt="seo-text-here"
                      ></Image>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile2;
