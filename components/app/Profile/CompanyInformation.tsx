import React from "react";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import { useState, useRef } from "react";
import Image from "next/image";
import LegalInformation from "./LegalInformation";
import CompanyContacts from "./CompanyContacts";

interface Props {
  profileFormState: any;
  handleProfileForm: any;
}

const CompanyInformation: React.FC<Props> = ({
  profileFormState,
  handleProfileForm,
}: Props) => {
  const inputRef: any = useRef(null);
  const companyInputRef: any = useRef(null);
  const [addImage, Set_Add_Image] = useState<string>("/Assets/addGallery.png");
  const [logoImage, Set_Logo_Image] = useState("");
  const [companyImages, Set_Company_Images] = useState<File[]>([]);

  // =======functions
  const handleClick = (event: any) => {
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    Set_Logo_Image(URL.createObjectURL(event.target.files[0]));
  };

  //
  const handleCompanyImage = (event: any) => {
    companyInputRef.current.click();
  };

  function convertStringToFile(stringData: any, fileName: any, fileType: any) {
    const blob = new Blob([stringData], { type: fileType });
    const file = new File([blob], fileName, { type: fileType });
    return file;
  }

  const handleCompanyFileChange = (event: any) => {
    const files = event.target.files;
    if (files) {
      const selectedImagesArray: File[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          selectedImagesArray.push(file);
        }
      }
      Set_Company_Images(selectedImagesArray);
    }
  };

  return (
    <div className="w-full flex flex-col rounded-[8px] bg-white-main">
      <p className="h-[60px] flex justify-start items-center border-b-[2px] border-solid border-white-cool text-[20px] font-semibold font-NunitoSans text-brand-secondary px-5">
        Identité
      </p>
      <div className="w-full flex flex-col gap-4 p-5 py-8">
        {/* =====> company profile */}
        <div className="flex flex-col gap-1">
          <p className="text-[16px] font-NunitoSans font-semibold leading-[24px] text-brand-secondary">
            Profile de la société
          </p>
          <p className="text-[14px] font-sans font-normal leading-[24px]">
            Votre profil est ce que les personnes verront dans les résultats de
            recherche
          </p>
        </div>
        {/* ======> company name + company activity suts input */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
          {/* ======> company name */}
          <div className="w-full lg:w-[50%]">
            <InputFieldWithIcon
              label="Nom de la société"
              placeholder="Saisissez le nom de votre société"
              name="compamyName"
              state={profileFormState.compamyName}
              Set_State={handleProfileForm}
            />
          </div>
          {/* =====> What activity best suits your company? */}
          <div className="w-full lg:w-[50%]">
            <InputFieldWithIcon
              label="Quelle activité correspond le mieux à votre société ?"
              placeholder="Choisissez une activité"
              name="activitySuitsCompany"
              state={profileFormState.activitySuitsCompany}
              Set_State={handleProfileForm}
            />
          </div>
        </div>
        {/* ========> logo + description of company input  */}
        <div className="flex flex-col gap-4 justify-center items-start">
          <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4">
            {/* =======> logo portion */}
            <div className="w-full lg:w-[50%] grid grid-cols-5 gap-10 justify-center items-start">
              {/* ===========> add logo + photos about company input */}
              <div className="col-span-2 flex gap-3 flex-col">
                <div className="w-full flex flex-col gap-1">
                  <label
                    className="text-[16px] font-sans font-normla leading-[24px]"
                    htmlFor="logo"
                  >
                    Logo
                  </label>
                  <div className="w-full">
                    <input
                      className="hidden"
                      id="logo"
                      ref={inputRef}
                      type="file"
                      onChange={handleFileChange}
                    />
                    <button
                      className="w-full"
                      type="button"
                      onClick={handleClick}
                    >
                      {logoImage ? (
                        <div className="overflow-auto w-full h-[65px] sm:h-[150px] md:h-[150px] flex justify-center items-center border-dashed rounded-md">
                          <div className="w-[120px] md:w-full h-[120px] md:h-[150px] relative">
                            <Image
                              src={logoImage}
                              fill
                              className="cover rounded-md"
                              alt="seo-text-here"
                            ></Image>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-[65px] sm:h-[150px] md:h-[150px] flex justify-center items-center border-[1px] border-dashed rounded-md border-brand-main">
                          <Image
                            src="/Assets/addGallery.png"
                            width={40}
                            height={50}
                            className="cover"
                            alt="seo-text-here"
                          ></Image>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-3 mt-4 md:mt-8 break-words">
                <p className="text-base text-black-main font-normal font-sans leading-[24px]">
                  Veuillez importez une image en haute résolution.
                </p>
              </div>
            </div>

            {/* ======> description about company */}
            <div className="w-full lg:w-[50%] flex justify-start items-center">
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="descriptionAboutCompany"></label>
                <textarea
                  className="w-full h-[150px] border-[1px] border-solid border-white-cool rounded-[8px] p-2 resize-none focus:outline-none profilePlaceholder"
                  name="companyDescription"
                  id="companyDescription"
                  value={profileFormState.companyDescription}
                  onChange={handleProfileForm}
                  placeholder="Décrivez votre société ici. Utilisez un court texte accrocheur pour expliquer ce que vous faites ou proposez."
                ></textarea>
              </div>
            </div>
          </div>
          {/* =======> photos about company input */}
          <div className="w-full flex flex-wrap flex-col gap-1 overflow-auto">
            <label
              className="text-[16px] font-sans font-normla leading-[24px]"
              htmlFor="logo"
            >
              Photos sur votre société
            </label>
            <div className="w-full">
              <input
                className="hidden"
                id="logo"
                ref={companyInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleCompanyFileChange}
              />
              <button
                className="w-full"
                type="button"
                onClick={handleCompanyImage}
              >
                {companyImages.length === 0 ? (
                  <div className="w-full max-w-[100px] md:max-w-[184px] h-[65px] sm:h-[150px] md:h-[150px] flex justify-center items-center border-[1px] border-dashed rounded-md border-brand-main">
                    <Image
                      src={addImage}
                      width={40}
                      height={50}
                      className="cover"
                      alt="seo-text-here"
                    ></Image>
                  </div>
                ) : (
                  <div className="w-full h-[65px] sm:h-[150px] md:h-[150px] flex flex-wrap gap-3 justify-start items-center rounded-md">
                    {companyImages.map((image, index) => {
                      return (
                        <div key={index} className="w-[160px] h-[140px] relative">
                          <Image
                            src={URL.createObjectURL(image)}
                            fill
                            className="cover rounded-md"
                            alt="seo-text-here"
                          ></Image>
                        </div>
                      );
                    })}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* ======>bottom line */}
        <div className="w-full border-[1px] border-solid border-white-cool my-1"></div>
        {/* =======> legal information */}
        <LegalInformation
          profileFormState={profileFormState}
          handleProfileForm={handleProfileForm}
        />
        {/* ======>bottom line */}
        <div className="w-full border-[1px] border-solid border-white-cool my-1"></div>
        {/* ========> company contacts */}
        <CompanyContacts
          profileFormState={profileFormState}
          handleProfileForm={handleProfileForm}
        />
      </div>
    </div>
  );
};

export default CompanyInformation;
