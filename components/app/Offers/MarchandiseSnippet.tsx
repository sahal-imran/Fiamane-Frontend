import React, { useState, useRef } from "react";
import MoreButton from "components/shared/Buttons/moreButton";
import { AiOutlinePlus } from "react-icons/ai";
import DialogueWrapper from "components/shared/Dialogue/DialogueWrapper";
import MultipleSelect from "components/shared/MultipleSelect/MultipleSelect";
import CustomRadio from "components/shared/CustomRadio/CustomRadio";
import CustomSelect from "components/shared/Select/Select";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import SelectWithInput from "components/shared/SelectWithInput/SelectWithInput";
import Image from "next/image";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import Radio from "@mui/joy/Radio";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";

const MarchandiseSnippet = () => {
  // ======> Add a commodity states
  const companyInputRef: any = useRef(null);

  const [natureOfCommodity, setNatureOfCommodity] = React.useState("Neuve");
  const [bodyWeight, setBodyWeight] = useState({
    weight: "",
    unit: "",
  });

  //   =====> radio conditionally rendering
  const [dimensionRadio, setDimensionRadio] = useState("Je conais les dimensions de l’objet");
  const [bodyWeightRadio, setBodyWeightRadio] = useState("");

  const [companyImages, Set_Company_Images] = useState<File[]>([]);
  const [addImage, Set_Add_Image] = useState<string>("/Assets/addGallery.png");
  const [choseContent, setChoseContent] = React.useState<string[]>([]);
  const [commodityBillOfMaterials, setCommodityBillOfMaterials] = useState("");
  const [valueOfGood, setValueOfGood] = useState({ value: "", unit: "" });
  const [dimension, setDimension] = useState({
    length: "",
    width: "",
    height: "",
    unit: "",
  });

  const [showCommodity, setShowCommodity] = React.useState(false);

  // ====> functions for updating bodyweight
  const setWeight = (e: any) => {
    setBodyWeight({ ...bodyWeight, weight: e.target.value });
  };
  const setWeightUnit = (e: any) => {
    setBodyWeight({ ...bodyWeight, unit: e.target.value });
  };
  // ========> functions for updating dimension
  const setLength = (e: any) => {
    setDimension({ ...dimension, length: e.target.value });
  };
  const setWidth = (e: any) => {
    setDimension({ ...dimension, width: e.target.value });
  };
  const setHeight = (e: any) => {
    setDimension({ ...dimension, height: e.target.value });
  };
  const setUnit = (e: any) => {
    setDimension({ ...dimension, unit: e.target.value });
  };
  // =========> functions for updating value of goods state object
  const handleGodvalue = (e: any) => {
    setValueOfGood({ ...valueOfGood, value: e.target.value });
  };
  const handleGodunit = (e: any) => {
    setValueOfGood({ ...valueOfGood, unit: e.target.value });
  };

  const handleChoseContent = (event: any) => {
    const {
      target: { value },
    } = event;
    setChoseContent(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleCompanyImage = (event: any) => {
    companyInputRef.current.click();
  };

  const handleCompanyFileChange = (event: any) => {
    const files = event.target.files;
    if (files) {
      const selectedImagesArray: File[] = [...companyImages];
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
    <React.Fragment>
      <div className="flex flex-col gap-[10px] bg-white-main rounded-[8px] ">
        <div className=" w-full flex items-center text-[20px] font-NunitoSans font-[600] leading-[32px] border-b-[1px] border-b-white-off px-[20px] py-[10px]">
          <p>Informations sur la marchandise</p>
        </div>
        <div className="w-full flex items-center font-OpenSans font-[400] text-[16px] leading-[28px] border-b-[1px] border-b-white-off px-[20px] py-[10px]">
          <p>
            Décrivez votre marchandise que vous voulez transporter. Ajouter
            autant de marchandise que vous voulez
          </p>
        </div>
        <div className="flex flex-col gap-[10px] items-center w-full border-b-[1px] border-b-white-off px-[20px] py-[10px]">
          <div className="w-full flex items-center justify-between">
            <p className="font-NunitoSans font-[600] text-[16px] leading-[24px]">
              Bagages
            </p>
            <MoreButton />
          </div>

          <div className="w-full flex items-center justify-between font-OpenSans text-[12px] font-[400] leading-[20px] ">
            <p>Dimensions</p>
            <p>20 x 20 x 10 cm</p>
          </div>

          <div className="w-full flex items-center justify-between font-OpenSans text-[12px] font-[400] leading-[20px] ">
            <p>Poids</p>
            <p>3 Kg</p>
          </div>
        </div>
        <div className="flex items-center w-full text-brand-main font-OpenSans font-[600] text-[14px] leading-[20px] px-[20px] py-[10px]">
          <button
            onClick={() => setShowCommodity(true)}
            className="flex items-center gap-2"
          >
            <AiOutlinePlus size={20} />
            Ajouter une autre marchandise
          </button>
        </div>
      </div>

      <DialogueWrapper
        State={showCommodity}
        Event={setShowCommodity}
        styles="w-[340px] md:w-[687px]"
        Title="Ajouter une nouvelle marchandise"
      // overflow="overflow-auto"
      >
        <div className="w-full flex flex-col gap-6 justify-center items-start p-8">
          {/* =======> Commodity Bill of Materials + value of goods  */}
          <div className="w-full flex md:flex-row flex-col justify-center items-center gap-4">
            {/* ======> Commodity Bill of Materials select */}
            <div className="w-full md:w-[50%]">
              <CustomSelect
                label="Nomenclature de la marchandise"
                inptLabel="Selectionnez une catègorie"
                state={commodityBillOfMaterials}
                setState={(e: any) =>
                  setCommodityBillOfMaterials(e.target.value)
                }
                selectData={selectACategoryData}
              />
            </div>
            {/* =======> Choose content*/}
            <div className="w-full md:w-[50%]">
              <MultipleSelect
                selectData={valueOfGoods}
                state={choseContent}
                setState={handleChoseContent}
              />
            </div>
          </div>
          {/* =======> value of goods */}
          <div className="w-[50%] pr-2 selectWithInput">
            <SelectWithInput
              priceState={valueOfGood.value}
              setPriceState={handleGodvalue}
              unitState={valueOfGood.unit}
              setUnitState={handleGodunit}
              selectData={valueOfGoodSelectData}
              label="Valeur de la marchandise"
            />
          </div>
          {/* ========> Nature of commodity (radio) */}
          <div className="w-full flex flex-col gap-3">
            <p className="font-sans text-base font-normal text-black-main">
              Nature de la marchandise
            </p>

            <div className="w-full flex flex-col md:flex-row gap-3 md:justify-between items-start md:items-center">
              <CustomRadio
                state={natureOfCommodity}
                setState={(e: any) => setNatureOfCommodity(e.target.value)}
                value="Neuve"
                label="Neuve"
              />
              <CustomRadio
                state={natureOfCommodity}
                setState={(e: any) => setNatureOfCommodity(e.target.value)}
                value="Occasion"
                label="Occasion"
              />
            </div>
          </div>
          {/* =========> dimension radio */}
          <div className="w-full flex flex-col gap-3">
            <p className="font-sans text-base font-normal text-black-main">
              Dimensions
            </p>

            <div className="w-full flex md:flex-row flex-col gap-3 md:justify-between items-start md:items-center">
              <CustomRadio
                state={dimensionRadio}
                setState={(e: any) => setDimensionRadio(e.target.value)}
                value="Je conais les dimensions de l’objet"
                label="Je conais les dimensions de l’objet"
              />
              <CustomRadio
                state={dimensionRadio}
                setState={(e: any) => setDimensionRadio(e.target.value)}
                value="Je ne conais pas les dimensions"
                label="Je ne conais pas les dimensions"
              />
            </div>
          </div>
          {dimensionRadio === "Je conais les dimensions de l’objet" ? (
            <div className="w-full grid grid-cols-[1fr,1fr,1fr,0.5fr] dimension justify-center items-center">
              {/* =====> length */}
              <InputFieldWithIcon
                state={dimension.length}
                Set_State={setLength}
                placeholder="Longueur"
              />
              {/* =====> width */}
              <InputFieldWithIcon
                state={dimension.width}
                Set_State={setWidth}
                placeholder="Largeur"
              />
              {/* ======> height */}
              <InputFieldWithIcon
                state={dimension.height}
                Set_State={setHeight}
                placeholder="Hauteur"
              />
              {/* =======> select unit */}
              <CustomSelect
                state={dimension.unit}
                setState={setUnit}
                selectData={units}
              />
            </div>
          ) : (
            <>
              <div className="w-full flex flex-col justify-center items-start">
                <RadioGroup
                  aria-labelledby="storage-label"
                  size="lg"
                  sx={{ gap: 1.5, width: "100%" }}
                >
                  {dimensionsData.map((item: any, index: number) => (
                    <Sheet
                      key={index}
                      sx={{
                        p: "12px",
                        borderRadius: "md",
                        boxShadow: "sm",
                        bgcolor: "background.body",
                      }}
                    >
                      <Radio
                        label={
                          <div className="w-full flex justify-center items-center gap-3">
                            <div className="w-[65px] h-[65px] flex justify-center items-center rounded-full border-2 border-solid border-white-cool p-0">
                              <Image
                                src={item.image}
                                alt={item.image}
                                width={30}
                                height={30}
                              ></Image>
                            </div>
                            <div className="flex flex-col gap-[2px]">
                              {/* =====> title */}
                              <p className="text-[15px] font-semibold font-sans text-brand-blue">
                                {item.title}
                              </p>
                              {/* =====> subheading */}
                              <p className="text-[15px] font-normal font-sans text-black-main">
                                {item.subTitle}
                              </p>
                            </div>
                          </div>
                        }
                        overlay
                        disableIcon
                        value={item.title}
                        slotProps={{
                          action: ({ checked }: any) => ({
                            sx: (theme: any) => ({
                              ...(checked && {
                                "--variant-borderWidth": "2px",

                                "&&": {
                                  // && to increase the specificity to win the base :hover styles
                                  borderColor: "#ff8501",
                                },
                              }),
                            }),
                          }),
                        }}
                      />
                    </Sheet>
                  ))}
                </RadioGroup>
              </div>
            </>
          )}
          {/* =======> weight radio */}
          <div className="w-full flex flex-col gap-3">
            <p className="font-sans text-base font-normal text-black-main">
              Poids
            </p>

            <div className="w-full flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between justify-center items-start">
              <CustomRadio
                state={bodyWeightRadio}
                setState={(e: any) => setBodyWeightRadio(e.target.value)}
                value="Je conais le poids"
                label="Je conais le poids"
              />
              <CustomRadio
                state={bodyWeightRadio}
                setState={(e: any) => setBodyWeightRadio(e.target.value)}
                value="Je ne conais pas le poids"
                label="Je ne conais pas le poids"
              />
            </div>
          </div>

          {/* ======>  */}
          {bodyWeightRadio === "Je conais le poids " ? (
            <div className="w-[50%] pr-2 selectWithInput">
              <SelectWithInput
                priceState={bodyWeight.weight}
                setPriceState={setWeight}
                unitState={bodyWeight.unit}
                setUnitState={setWeightUnit}
                selectData={weightUnits}
                label="Valeur de la marchandise"
              />
            </div>
          ) : (
            <>
              <div className="w-full flex justify-center items-start weightRadio">
                <RadioGroup
                  aria-labelledby="storage-label"
                  defaultValue="512GB"
                  size="lg"
                  sx={{
                    gap: 1.5,
                    width: "100%",
                  }}
                >
                  {weightData.map((item: any, index: number) => (
                    <Sheet
                      key={index}
                      sx={{
                        p: "12px",
                        py: "14px",
                        borderRadius: "md",
                        boxShadow: "sm",
                        bgcolor: "background.body",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Radio
                        label={
                          <p className="flex justify-center items-center text-16 font-normal font-sans text-black-main">
                            {item.label}
                          </p>
                        }
                        overlay
                        disableIcon
                        value={item.label}
                        slotProps={{
                          action: ({ checked }: any) => ({
                            sx: (theme: any) => ({
                              ...(checked && {
                                "--variant-borderWidth": "2px",

                                "&&": {
                                  // && to increase the specificity to win the base :hover styles
                                  borderColor: "#ff8501",
                                },
                              }),
                            }),
                          }),
                        }}
                      />
                    </Sheet>
                  ))}
                </RadioGroup>
              </div>
            </>
          )}

          {/* ======> photos of the goods */}
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
              {companyImages.length > 0 && (
                <div className="w-full h-[65px] sm:h-[150px] md:h-[150px] flex flex-wrap gap-3 justify-start items-center rounded-md overflow-auto">
                  {companyImages.map((image, index) => {
                    return (
                      <div key={index} className="w-[100px] h-[100px] relative">
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

              <button
                className="w-full"
                type="button"
                onClick={handleCompanyImage}
              >
                <div className="w-full max-w-[90px] md:max-w-[100px] h-[40px] sm:h-[70px] md:h-[100px] flex justify-center items-center border-[1px] border-dashed rounded-md border-brand-main">
                  <Image
                    src={addImage}
                    width={40}
                    height={40}
                    className="cover"
                    alt="seo-text-here"
                  ></Image>
                </div>
              </button>
            </div>
          </div>

          {/* ======> Additional information about your offer */}
          <div className="w-full flex flex-col justify-center items-start gap-2">
            <p className="flex justify-center items-center text-16 font-normal font-sans text-black-main">
              Information complèmentaire sur votre offre
            </p>
            <textarea
              className="w-full h-[150px] border-[1px] border-solid border-white-cool rounded-[8px] p-2 resize-none focus:outline-none profilePlaceholder"
              name="additionalInformationAboutYourOffer"
              id="additionalInformationAboutYourOffer"
              placeholder="Et cum rhoncus faucibus magna viverra enim aenean ut."
            ></textarea>
          </div>
          {/* ========> Cancel + Add button */}
          <div className="w-full flex gap-4 justify-end items-center pt-4 pb-1">
            {/* ==> cancel button */}
            <ContainedCircle
              Text="Annuler"
              rounded="rounded-[10px]"
              type="button"
              styles="text-black-main border-[1px] shadow-sm border-solid border-white-cool max-w-[150px] w-full"
            />
            {/* =====> add button */}
            <ContainedCircle
              Text="Ajouter"
              rounded="rounded-[10px]"
              type="submit"
              styles="max-w-[150px] w-full shadow-sm bg-brand-main text-white-main"
            />
          </div>
        </div>
      </DialogueWrapper>
    </React.Fragment>
  );
};

const selectACategoryData = [
  {
    option: "Carton",
    value: "Carton",
  },
  {
    option: "Valise",
    value: "Valise",
  },
  {
    option: "Sac tati",
    value: "Sac tati",
  },
  {
    option: "Autre",
    value: "Autre",
  },
];
const valueOfGoods = [
  {
    label: "Articles de maison",
    icon: "/Assets/offer/multiSelect1.svg",
  },
  {
    label: "Produits alimentaires",
    icon: "/Assets/offer/multiSelect2.svg",
  },
  {
    label: "Oliver ",
    icon: "/Assets/offer/multiSelect3.svg",
  },
  {
    label: " Jouets",
    icon: "/Assets/offer/multiSelect4.svg",
  },
];
const units = [
  {
    option: "cm",
    value: "cm",
  },
  {
    option: "mm",
    value: "mm",
  },
];
const weightUnits = [
  {
    option: "kg",
    value: "kg",
  },
  {
    option: "gram",
    value: "gram",
  },
];
const dimensionsData = [
  {
    image: "/Assets/offer/shoes.svg",
    title: "Taille S",
    subTitle: "Tient dans ............................",
  },
  {
    image: "/Assets/offer/dimension1.svg",
    title: "Taille M",
    subTitle: "Tient dans ............................",
  },
  {
    image: "/Assets/offer/dimension2.svg",
    title: "Taille L",
    subTitle: "Tient dans .........................................",
  },
  {
    image: "/Assets/offer/dimension3.svg",
    title: "Taille XXL",
    subTitle: "Tient dans .............................................",
  },
];

const weightData = [
  {
    label: "-5kg",
  },
  {
    label: "5-10kg",
  },
  {
    label: "10-50kg",
  },
  {
    label: "50-100kg",
  },
  {
    label: "+100kg",
  },
];
const valueOfGoodSelectData = [
  {
    option: "Euro",
    value: "euro",
  },
  {
    option: "Gram",
    value: "gram",
  },
  {
    option: "Kg",
    value: "kg",
  },
  {
    option: "Dollar",
    value: "dollar",
  },
];

export default MarchandiseSnippet;
