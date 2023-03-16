import React, { useState, useRef } from "react";
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import DialogueWrapper from "components/shared/Dialogue/DialogueWrapper";
import TableRow from "./TableRow";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import ToggleSwitch from "components/shared/ToggleSwitch/ToggleSwitch";
import Dropdown from "components/shared/Dropdown/Dropdown";
function InProgress() {
    const DropDownItems = [
        { Name: "EURO", Value: "EURO" },
        { Name: "USD", Value: "USD" },
        { Name: "MAD", Value: "MAD" },
      ];
  // state for toggle button
  const [AcceptNegotiation, SetAcceptNegotiation] = useState<boolean>(false);
  // state for dropdown
  const [PriceOfferd, setPricePerOfferd] = useState<boolean>(false);
//   satate for dialouge box
    const [OpenDialogue, setOpenDialogue] = useState(false);
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

  //   array containing the Inprogress data if there is some data
  const [InProgress, SetInProgress] = useState<Array<object>>([
    {
      Id: 1,
      Status: "en attente  ",
      Marchandise: "Bagages",
      Departure: "Madrid, Espagne",
      Arrival: "Tanger, Maroc",
      SendingDate: " 09/12/2022",
      ButtonFunction: () => {},
      Image: "/Assets/Bags.png",
      PublisherName: "Afaf M.",
      PublisherImage: "/Assets/Avatar.png",
    },
    {
      Id: 2,
      Status: "Accepté",
      Marchandise: "Carton",
      Departure: "Paris, France",
      Arrival: "Rabat, Maroc",
      SendingDate: " 10/12/2022",
      ButtonFunction: () => {},
      Image: "/Assets/Carton.png",
      PublisherName: "Riad B.",
      PublisherImage: "/Assets/Ellipse 5.png",
    },
  ]);
  return (
    <div>
      <div className="w-full  gap-2 bg-white-main mt-4 rounded-[8px] p-4 ">
        {/* table header here */}
        <div className="w-full flex flex-row justify-between md:flex-col md:justify-center lg:flex-row items-center lg:justify-between border-b-[1px] border-b-white-off gap-4 sm:py-[10px] py-[8px]">
          <p className=" w-full font-OpenSans font-[600] text-start md:text-center lg:text-start sm:text-[18px] text-[14px] text-black-main  leading-[28px]">
            Tout les devis en cours {`(${InProgress.length})`}
          </p>
          <div className="flex  justify-between items-center gap-2">
            <div className="sm:w-[262px] h-[40px] rounded-[8px] w-full sm:grid sm:grid-cols-[calc(100%-44px)_44px] hidden overflow-hidden border-white-off border-[1px]">
              <input
                className="bg-transparent outline-none border-none px-3 text-[#B3B3B3] text-[14px] font-OpenSans"
                placeholder="Rechercher..."
                type="text"
              />
              <button className=" h-full w-full flex items-center justify-center  bg-brand-main text-white-main">
                <BiSearch size={20} />
              </button>
            </div>

            <button className="flex w-[94px] h-[40px] gap-1 items-center justify-center text-black-main text-[14px] font-OpenSans font-[600] leading-[20px] border-[1px] border-white-off rounded-[8px]">
              <BiFilterAlt size={20} />
              <p>Filter</p>
            </button>
          </div>
        </div>

        <div className=" overflow-x-auto">
          <div className="min-w-[940px]">
            {/* Table headings here */}
            <div className="grid w-full items-center grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-[8px] border-b-[1px] border-b-white-off md:py-[10px] py-[8px] ">
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Statut
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Marchandise
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Départ
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Arrivé
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Date d’envoi
              </p>
              <p className="w-full items-center justify-center text-center text-black-main sm:text-[14px] text-[12px] font-OpenSans font-[400] leading-[24px]">
                Publié par
              </p>
            </div>

            {/* data  here */}
            {InProgress?.map((item: any, index: number) => {
              return (
                <TableRow
                  key={index}
                  Status={item.Status}
                  Departure={item.Departure}
                  Arrival={item.Arrival}
                  DateOfDeparture={item.SendingDate}
                  image={item.Image}
                  Marchandise={item.Marchandise}
                  PublisherImage={item.PublisherImage}
                  PublisherName={item.PublisherName}
                  OnClick={()=>  {setOpenDialogue(true); console.log('clicked');}}
                />
              );
            })}
          </div>
        </div>
        <DialogueWrapper
          State={OpenDialogue}
          Event={setOpenDialogue}
          Title="Envoyer un devis"
          styles=" md:w-[597px] sm:w-[500px] w-[320px] "
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setOpenDialogue(false);
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
               Set_State={SetAcceptNegotiation}
               state={AcceptNegotiation}
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
                value={Inputs.AdditionalInformation}
                onChange={InputChange}
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
}

export default InProgress;
