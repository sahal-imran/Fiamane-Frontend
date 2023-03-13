import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Roadmap from "components/FindCarrier/offre/Roadmap";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import { NextPage } from "next";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { FiCalendar } from "react-icons/fi";
import DialogueWrapper from "components/shared/Dialogue/DialogueWrapper";
import Dropdown from "components/shared/Dropdown/Dropdown";
import ToggleSwitch from "components/shared/ToggleSwitch/ToggleSwitch";
import Data from "constants/JSON/Data";
const OfferDetails: NextPage = () => {
  const router = useRouter();
  const id = router.query.slug as string;

  const FilteredItem = Data.FindCarrier.OfferData.filter(
    (item) => item.id === id
  );
  // state to open the form
  const [IsQuote, SetIsQuote] = useState<boolean>(false);
  // state to give the textarea empty value in start
  const [Description, SetDescription] = useState<string>("");
  // state for toggle button
  const [AcceptNegotiation, SetAcceptNegotiation] = useState<boolean>(false);
  // state for dropdown
  const [PriceOfferd, setPricePerOfferd] = useState<boolean>(false);
  // array containg the dropdown options

  const DropDownItems = [
    { Name: "EURO", Value: "EURO" },
    { Name: "USD", Value: "USD" },
    { Name: "MAD", Value: "MAD" },
  ];
  useEffect(
    () =>
      setInputs({
        ...Inputs,
        AdditionalInformation: Description,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Description]
  );

  // form inputs
  const [Inputs, setInputs] = useState({
    Amount: "",
    AdditionalInformation: "",
    Unit: "",
  });
  // =======>
  const InputChange = (evt: any) => {
    const value = evt.target.value;
    setInputs({
      ...Inputs,
      [evt.target.name]: value,
    });
  };

 

  return (
    <div className="w-full flex flex-col  justify-center items-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center py-[40px] px-[20px] md:px-0  ">
        {/* Navigaet back link here */}
        <div className="flex w-full sm:pl-8 item-start">
          <Link className="flex  h-[20px] gap-1 " href={"/"}>
            <BsArrowLeft size={20} />
            <p className="font-NunitoSans font-[600] text-[16px] leading-[24px]">
              Retour
            </p>
          </Link>
        </div>

        {/* right div here */}
        <div className="w-full max-w-[650px] mb-[60px] flex flex-col gap-2 py-[50px]">
          <div className="w-full">
            {/* Sender Name and information div here */}
            <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[16px]">
              Offre publiée par
            </p>
            <div className="flex  justify-between items-center border-b border-b-white-off mt-2 py-[8px]">
              {/* top left image div here */}
              <div className="flex items-center gap-2">
                <div className="relative md:h-[58px] h-[45px] md:w-[58px] w-[45px]">
                  <Image src={FilteredItem[0]?.SenderPic} alt="" fill />
                </div>
                <p className="font-OpenSans font-[600] text-[18px] leading-[28px]">
                  {FilteredItem[0]?.SenderName}
                </p>
              </div>
              <ContainedCircle
                onClick={() => SetIsQuote(true)}
                Text="Envoyer un devis"
              />
            </div>
            {/* Departure information here */}
            <div className="w-full justify-between items-center border-b border-b-white-off py-[8px] ">
              <p className="font-OpenSans font-[400] text-[12px] text-black-main leading-[24px]">
                Informations sur le départ
              </p>
              <div className="flex gap-1 mt-2">
                <Roadmap />
                <div className="flex flex-col justify-between">
                  <p className="font-OpenSans font-[600] text-[16px] text-black-main leading-[24px]">
                    {FilteredItem[0]?.SenderPlace}
                  </p>
                  <div className="flex gap-[11px] items-center ">
                    <GrLocation size={15} />
                    <p className="text-[12px] leading-[20px] font-[400] whitespace-nowrap">
                      {FilteredItem[0]?.Address}
                    </p>
                  </div>
                  <div className="flex gap-[11px] items-center">
                    <FiCalendar size={15} />
                    <p className=" text-[12px] leading-[20px] font-[400]">
                      {FilteredItem[0]?.Date}
                    </p>
                  </div>
                  <p className="font-OpenSans font-[600] text-[16px] text-black-main leading-[24px]">
                    {FilteredItem[0]?.ReciverPlace}
                  </p>
                </div>
              </div>
            </div>
            {/* Information about the merchandise here */}
            <div className="w-full border-b border-b-white-off py-[8px]">
              <p className="font-OpenSans font-[400] text-[12px] leading-[18px]">
                Informations sur la marchandise
              </p>
              <div className="w-full flex justify-between items-center bg-white-off rounded-[8px] py-[10px] px-[20px] mt-2">
                {/* product image and name details here */}
                <div className="flex gap-2 items-center">
                  <div className="relative h-[65px] w-[65px]">
                    <Image
                      className="rounded-[10px]"
                      src={FilteredItem[0]?.Image}
                      alt=""
                      fill
                    />
                  </div>
                  <div className="flex flex-col  ">
                    <p className="font-OpenSans font-[600] text-black-main text-[16px] leading-[24px]">
                      {FilteredItem[0]?.Title}
                    </p>
                    <p className="font-OpenSans font-[400] text-black-main text-[12px] leading-[20px]">
                      Dimensions:
                    </p>
                    <p className="font-OpenSans font-[400] text-black-main text-[12px] leading-[20px]">
                      Poids:
                    </p>
                  </div>
                </div>
                {/* product weight and details here */}
                <div className="flex flex-col items-end justify-between   ">
                  <p className="font-OpenSans font-[400] text-black-main text-[12px] leading-[20px]">
                    {FilteredItem[0]?.Dimension}
                  </p>
                  <p className="font-OpenSans font-[400] text-black-main text-[12px] leading-[20px]">
                    {FilteredItem[0]?.Weight}
                  </p>
                </div>
              </div>
            </div>
            {/* detailed information of product div here */}
            <div className="w-full  border-b border-b-white-off py-[8px]">
              <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[20px]">
                Informations complémentaires
              </p>
              <p className="mt-2 font-OpenSans font-[400] text-black-main text-[12px] leading-[20px]">
                {Description === ""
                  ? FilteredItem[0]?.Description
                  : Description}

                {/* {Inputs.AdditionalInformation} */}
              </p>
            </div>
          </div>
        </div>
        {/* Form here */}
        <DialogueWrapper
          State={IsQuote}
          Event={SetIsQuote}
          Title="Envoyer un devis"
          styles=" md:w-[597px] sm:w-[500px] w-[320px] "
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              SetIsQuote(false);
            }}
            className="w-full flex flex-col gap-2  p-4"
          >
            <div className="w-full h-[50px] grid grid-cols-[3fr,1.3fr] border-[1px] border-white-cool rounded-[8px]">
              {/* ======> input */}
              <input
                className="px-2 h-full rounded-[8px] focus:outline-none"
                type="number"
                name="Amount"
                value={Inputs.Amount}
                onChange={InputChange}
              />
              {/* ========> select box */}
              <Dropdown
                Styles="w-full h-full z-100 border-l-[1px] border-l-white-cool"
                Item={DropDownItems}
                Placeholder="Unit"
                State={PriceOfferd}
                Event={setPricePerOfferd}
                GetValueEvent={(value: string) => {
                  setInputs({
                    ...Inputs,
                    Unit: value,
                  });
                }}
              />
            </div>{" "}
            <div className="flex">
              <ToggleSwitch
                label="Accepter négociation"
                state={AcceptNegotiation}
                Set_State={SetAcceptNegotiation}
              />
            </div>
            <div className="w-full">
              <label
                className="font-NunitoSans font-[600] text-[16px] text-black-main leading-[24px] "
                htmlFor="AdditionalInformation"
              >
                Information complèmentaire sur votre offre
              </label>
              <textarea
                className="w-full border border-[#E8E8E8] font-NunitoSans  focus:outline-none my-4 rounded-[8px] p-2"
                name="AdditionalInformation"
                value={Description}
                onChange={(e: any) => SetDescription(e.target.value)}
                cols={30}
                rows={5}
                required
                placeholder="Et cum rhoncus faucibus magna viverra enim aenean ut."
              ></textarea>
            </div>
            <div className="flex w-full justify-end ">
              <ContainedCircle
                rounded="rounded-[8px]"
                type="Submit"
                Text="Envoyer"
              />
            </div>
          </form>
        </DialogueWrapper>
      </div>
    </div>
  );
};
export default OfferDetails;
