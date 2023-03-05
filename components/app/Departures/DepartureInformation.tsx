import React, { useState, useRef } from "react";
import * as Icons from "SVG/Icons";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import { BiSearch } from "react-icons/bi";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ToggleSwitch from "components/shared/ToggleSwitch/ToggleSwitch";
import Prix from "./Prix";
import StopoverDuringTrip from "./StopoverDuringTrip";

interface Props {
  NavigateBack: any;
}

const DepartureInformation: React.FC<Props> = ({ NavigateBack }: Props) => {
  // ========> state for date picker
  const [value, setValue] = React.useState<Dayjs | null>(null);
  // ======> states for toogleswitch
  const [DepositeInAgencySwitch, SetDepositeAgencySwitch] =
    useState<boolean>(false);
  const [HomePickUpPossibleSwitch, SetHomePickUpPossibleSwitch] =
    useState<boolean>(false);
  const [WithdrawalInAgencySwitch, SetWithdrawalInAgencySwitch] =
    useState<boolean>(false);
  const [HomeDeliveryAvailable, SetHomeDeliveryAvailable] =
    useState<boolean>(false);

  return (
    <div className="w-full flex flex-col justify-start items-center">
      {/* ======> header */}
      <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <p
            onClick={NavigateBack}
            className="font-sans cursor-pointer text-base text-black-cool font-normal"
          >
            Mes départs
          </p>
          <Icons.ArrowRight fill="none" stroke="#1A1A1A" ClassName="" />
          <p className="font-sans text-base text-black-cool font-normal">
            Publier un départ
          </p>
        </div>
        {/* =======> button */}
        <ContainedCircle Text="Publier" />
      </div>
      {/* =========> DepartureInformationform */}
      <div className="w-full flex flex-col lg:flex-row gap-6 justify-center items-start py-6">
        {/* =======>left Portion */}
        <div className="w-full lg:w-[65%] flex flex-col gap-8">
          <div className="w-full flex flex-col justify-center items-start bg-white-main shadow-md rounded-md">
            <p className="w-full h-[60px] flex justify-start items-center text-[20px] text-brand-secondary font-semibold font-NunitoSans leading-[32px] border-b-[2px] border-solid border-white-cool px-4">
              Informations sur le départ
            </p>
            {/* =====> departure inputs */}
            <div className="w-full flex flex-col gap-4 justify-center items-start px-4 py-6">
              <p className=" text-[16px] text-brand-secondary font-semibold font-NunitoSans leading-[24px]">
                Départ
              </p>
              {/* ====>place of depature input + sending date */}
              <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
                {/* place of departure */}
                <div className="w-full md:w-[50%]">
                  <InputFieldWithIcon
                    label="Lieu de départ"
                    placeholder="Selectionnez lieu"
                    isLeft={false}
                    icon=<BiSearch className="text-black-cool text-[26px]" />
                  />
                </div>
                {/* sending date */}
                <div className="w-full md:w-[50%] flex flex-col gap-1">
                  <label
                    className="text-[16px] font-sans font-normla leading-[24px]"
                    htmlFor="sending-date"
                  >
                    Date d’envoi
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              {/* ======> Deposit in agency switch */}
              <ToggleSwitch
                label="Dépôt en agence"
                state={DepositeInAgencySwitch}
                Set_State={SetDepositeAgencySwitch}
              />

              {/* Home pick-up possible switch */}
              <ToggleSwitch
                label="Ramassage à domicile possible"
                state={HomePickUpPossibleSwitch}
                Set_State={SetHomePickUpPossibleSwitch}
              />
              {/* ====> show pick up address input when homePickSwitch is checked */}
              {HomePickUpPossibleSwitch && (
                <div className="w-full">
                  <InputFieldWithIcon label="Adresse de ramassage" />
                </div>
              )}

              <div className="w-full flex flex-col gap-4">
                <p className=" text-[16px] text-brand-secondary font-semibold font-NunitoSans leading-[24px]">
                  Arrivée
                </p>
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
                  <div className="w-full md:w-[50%]">
                    <InputFieldWithIcon
                      label="Lieu de départ"
                      placeholder="Selectionnez lieu"
                      isLeft={false}
                      icon=<BiSearch className="text-black-cool text-[26px]" />
                    />
                  </div>
                  <div className="w-full md:w-[50%] flex flex-col gap-1">
                    <label
                      className="text-[16px] font-sans font-normla leading-[24px]"
                      htmlFor="sending-date"
                    >
                      Date d’envoi
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                </div>
              </div>

              {/*  Withdrawal in agency switch */}
              <ToggleSwitch
                label="Retrait en agence"
                state={WithdrawalInAgencySwitch}
                Set_State={SetWithdrawalInAgencySwitch}
              />
              {/* =========> Home delivery available switch */}
              <ToggleSwitch
                label="Livraison à domicile possible"
                state={HomeDeliveryAvailable}
                Set_State={SetHomeDeliveryAvailable}
              />
              {/* =====> dispatch address input show when Home delivery available is checked */}
              {HomeDeliveryAvailable && (
                <div className="w-full">
                  <InputFieldWithIcon label="Adresse de dispatch" />
                </div>
              )}
            </div>
          </div>
          {/* ===========> Prix Portion */}
          <Prix />
        </div>
        {/* ========> right protion */}
        <div className="w-full lg:w-[35%] flex flex-col bg-white-main shadow-md rounded-md">
          <StopoverDuringTrip />
        </div>
      </div>
    </div>
  );
};

export default DepartureInformation;
