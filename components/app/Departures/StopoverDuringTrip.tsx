import React, { useState } from "react";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import { HiOutlinePlus } from "react-icons/hi";
import DialogueWrapper from "components/shared/Dialogue/DialogueWrapper";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import { BiSearch } from "react-icons/bi";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import StopOverSnippets from "./StopOverSnippets";

function StopoverDuringTrip() {
  // =======> This state for dialogue navigation
  const [SuffleDialogue, SetSuffleDialogue] = useState(false);
  // ========> For stroing date
  const [date, setDate] = React.useState<Dayjs | null>(null);
  // ========> All the date in form of object we storing there
  const [StopOverData, SetStopOverData] = useState<any>([]);

  const formateDate = date?.format("YYYY-MM-DD");

  const [FormData, SetFormData] = useState({
    country: "",
    address: "",
    date: formateDate,
  });

  // ========> functions
  const handleFormData = (event: any) => {
    const { name, value } = event.target;
    SetFormData({ ...FormData, [name]: value });
  };

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    const newData = {
      country: FormData.country,
      address: FormData.address,
      date: formateDate,
    };
    SetStopOverData([...StopOverData, newData]);
    SetSuffleDialogue(false);
  };

  // ========> functions end here

  return (
    <div className="w-full flex flex-col">
      <p className="w-full h-[60px] flex justify-start items-center text-[20px] text-brand-secondary font-semibold font-NunitoSans leading-[32px] border-b-[2px] border-solid border-white-cool px-4">
        Escale lors de voyage
      </p>
      <div className="flex flex-col gap-4 justify-center items-start p-4">
        <p className="text-[16px] font-normal font-sans leading-[28px] text-black-main">
          Ajouter autant d’escale que vous voulez
        </p>
        {StopOverData.length === 0 ? (
          <ContainedCircle
            Text="Ajouter une nouvelle escale"
            styles="w-full max-w-[250px] bg-brand-main text-white-main"
            onClick={() => SetSuffleDialogue(true)}
            Icon={<HiOutlinePlus className="text-white-main text-[20px]" />}
          />
        ) : (
          ""
        )}
      </div>
      {/* ========> showing data */}
      {/* ===> bottom border */}
      <div className="w-full border-b-[2px] border-solid border-white-cool"></div>
      {StopOverData?.map((data: any, index: number) => {
        return (
          <>
            <StopOverSnippets
              country={data.country}
              date={data.date}
              address={data.address}
            />
            <div className="w-full border-b-[2px] border-solid border-white-cool"></div>
          </>
        );
      })}
      {/* ======> Add another stopover button */}
      <div className="py-4 w-full p-4">
        {StopOverData.length > 0 ? (
          <ContainedCircle
            Text="Ajouter une autre escale"
            styles="text-brand-main"
            onClick={() => SetSuffleDialogue(true)}
            Icon={<HiOutlinePlus className="text-brand-main text-[20px]" />}
          />
        ) : (
          ""
        )}
      </div>
      {/* ========> dialog box */}
      <DialogueWrapper
        Title="Ajouter une nouvelle escale"
        styles="w-full sm:w-[512px]"
        Event={SetSuffleDialogue}
        State={SuffleDialogue}
      >
        <form action="" onSubmit={handleFormSubmission}>
          <div className="flex flex-col gap-3 justify-center items-start p-6">
            {/* =====> country city */}
            <InputFieldWithIcon
              label="Pays/ville"
              placeholder="Selectionnez lieu"
              state={FormData.country}
              Set_State={handleFormData}
              name="country"
              isLeft={false}
              icon={<BiSearch className="text-black-cool text-[26px]" />}
            />
            {/* sending date */}
            <div className="w-full flex flex-col gap-1">
              <label
                className="text-[16px] font-sans font-normla leading-[24px]"
                htmlFor="sending-date"
              >
                Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                />
              </LocalizationProvider>
            </div>
            {/* =======> Address */}
            <InputFieldWithIcon
              label="Adresse d’escale"
              name="address"
              state={FormData.address}
              Set_State={handleFormData}
            />
            {/* ========> Cancel + Add button */}
            <div className="w-full flex gap-4 justify-end items-center py-4">
              {/* ==> cancel button */}
              <ContainedCircle
                onClick={() => SetSuffleDialogue(false)}
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
        </form>
      </DialogueWrapper>
    </div>
  );
}

export default StopoverDuringTrip;
