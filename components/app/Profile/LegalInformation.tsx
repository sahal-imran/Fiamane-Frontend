import React from "react";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import Image from "next/image";
import { useState, useRef } from "react";

interface Props {
  profileFormState: any;
  handleProfileForm: any;
}

const LegalInformation: React.FC<Props> = ({
  profileFormState,
  handleProfileForm,
}: Props) => {
  const [image, Set_Image] = useState("");

  const inputRef: any = useRef(null);

  // ==========>functions

  const handleClick = (event: any) => {
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    Set_Image(URL.createObjectURL(event.target.files[0]));
    console.log(image);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-[16px] font-NunitoSans font-semibold leading-[24px] text-brand-secondary">
          Informations juridiques
        </p>
        <p className="text-[14px] font-sans font-normal leading-[24px]">
          Ajoutez vos informations juridique de votre société.
        </p>
      </div>
      {/* ======> RC or KBIS number input */}
      <div className="w-full lg:w-[50%]">
        <InputFieldWithIcon
          label="N° RC ou KBIS"
          placeholder="Entrez votre N°RC ou KBIS"
          name="KbisNumber"
          state={profileFormState.KbisNumber}
          Set_State={handleProfileForm}
        />
      </div>
      {/* ==========> driving license + driving license photo */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        {/* ======> driving license input */}
        <div className="w-full lg:w-[50%]">
          <InputFieldWithIcon
            label="N° de permis de conduite"
            placeholder="Entrez votre N° de permis"
            name="drivingLicenseNumber"
            state={profileFormState.drivingLicenseNumber}
            Set_State={handleProfileForm}
          />
        </div>
        {/* =====> driving license photo */}
        <div className="w-full lg:w-[50%] flex flex-col gap-1">
          <label
            className="text-[16px] font-sans font-normla leading-[24px]"
            htmlFor="logo"
          >
            Photo de permis de conduite
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
      {/* N° CIN + Photo de CIN  */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        {/* ======> N° CIN */}
        <div className="w-full lg:w-[50%]">
          <InputFieldWithIcon
            label="N° CIN"
            name="cin"
            state={profileFormState.cin}
            Set_State={handleProfileForm}
            placeholder="Entrez votre N°CIN"
          />
        </div>
        {/* =====> Photo de CIN */}
        <div className="w-full lg:w-[50%] flex flex-col gap-1">
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
  );
};

export default LegalInformation;
