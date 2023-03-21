import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import * as Icons from "../../SVG/Icons";

interface Props{
  State:{
    searchByName: string;
    country: string;
    city: string;
    agencies: boolean;
    carrier: boolean;
    filter: boolean;
    favorite: boolean;
    departureCity: boolean;
    arivalCity: boolean;
    topRated: boolean;
    verifiedByFiamane: boolean;
}
  SetState:React.Dispatch<React.SetStateAction<{
    searchByName: string;
    country: string;
    city: string;
    agencies: boolean;
    carrier: boolean;
    filter: boolean;
    favorite: boolean;
    departureCity: boolean;
    arivalCity: boolean;
    topRated: boolean;
    verifiedByFiamane: boolean;
}>>;
}


const AnnuaireHandler:React.FC<Props>=({State,SetState}:Props)=> {

  return (
    <div className="w-full mt-4 lg:px-[10px]">
      <div className="w-full max-w-[1200px]  flex flex-col gap-4 justify-center items-start bg-white-main rounded-[20px] shadow-xl p-3 m-auto py-8">
        {/* ======> Agencies + Carriers +  serach bar */}
        <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-[2fr,3fr]">
          {/* =====> Agencies buttons */}
          <div className="w-full flex flex-row gap-2 justify-center items-center bg-grey-cool rounded-[8px]">
            <button
              onClick={() => {
                SetState({
                  ...State,
                  agencies: !State.agencies,
                });
              }}
              className={`w-[50%] h-[44px] flex justify-center items-center ${
                State.agencies
                  ? "border-[2px] border-solid border-brand-main text-brand-main rounded-[8px] bg-white-main"
                  : "text-grey-main"
              } md:text-[16px] text-[13px] font-semibold font-sans`}
            >
              Agences
            </button>
            <button
              onClick={() => {
                SetState({
                  ...State,
                  carrier: !State.carrier,
                });
              }}
              className={`w-[50%] h-[44px] flex md:flex-row flex-col justify-center items-center md:text-[16px] text-[13px] font-semibold font-sans ${
                State.carrier
                  ? "border-[2px] border-solid border-brand-main rounded-[8px] text-brand-main bg-white-main"
                  : "text-grey-main"
              } `}
            >
              Transporteurs
            </button>
          </div>
          {/* =====> serach by name bar */}
          <div className="w-full h-[44px] flex justify-center items-center">
            <input
              className="w-full h-full px-4 focus:outline-none border-[1px] border-white-cool rounded-l-[8px]"
              type="text"
              id="search"
              value={State.searchByName}
              onChange={(e: any) => {
                SetState({
                  ...State,
                  searchByName: e.target.value,
                });
              }}
              name="search"
              placeholder="Rechercher par nom"
            />
            <div className="w-12 h-full bg-brand-main flex justify-center items-center rounded-r-[8px]">
              <BiSearch className="text-[26px] text-white-main cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-[4.8fr,1.5fr] justify-center items-start md:items-center">
          {/* ====> country + city serach + filter + add to Favorites here*/}
          {State.filter ? (
            <div className="w-full grid gap-4 xl:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr,1.2fr,1fr,1fr] pr-0 xl:pr-6">
              {/* ====> when filter true this section will show*/}
              {/* == Departure city  */}
              <div
                onClick={() =>
                  SetState({
                    ...State,
                    departureCity: !State.departureCity,
                  })
                }
                className="w-full  h-[40px] lg:h-full flex gap-2 justify-center items-center border-[1px] border-white-cool rounded-[8px] select-none"
              >
                <Icons.Location
                  ClassName="w-4 h-4"
                  stroke=""
                  fill={`${State.departureCity ? "#FF8501" : "#7E858B"}`}
                />
                <p className="text-[14px] text-black-main font-sans font-normal">
                  Ville de départ
                </p>
              </div>
              {/* ==> Arrival city  */}
              <div
                onClick={() =>
                  SetState({
                    ...State,
                    arivalCity: !State.arivalCity,
                  })
                }
                className="w-full h-[40px] flex gap-2 justify-center items-center border-[1px] border-white-cool rounded-[8px] select-none"
              >
                <Icons.Location
                  ClassName="w-4 h-4"
                  stroke=""
                  fill={`${State.arivalCity ? "#FF8501" : "#7E858B"}`}
                />
                <p className="text-[14px] text-black-main font-sans font-normal">
                  Ville d’arrivée
                </p>
              </div>
              {/* ======> Top Rated */}
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <input
                  className="checkBoxInput cursor-pointer"
                  type="checkbox"
                  name="topRated"
                  id="topRated"
                  checked={State.topRated}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    SetState({
                      ...State,
                      topRated: e.target.checked,
                    })
                  }
                />
                <label htmlFor="topRated">Les mieux notés</label>
              </div>
              {/* =======> verified by Fiamane */}
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <input
                  className="checkBoxInput cursor-pointer"
                  type="checkbox"
                  name="verfied"
                  id="verified"
                  checked={State.verifiedByFiamane}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    SetState({
                      ...State,
                      verifiedByFiamane: e.target.checked,
                    })
                  }
                />
                <label htmlFor="verified">Vérifié par Fiamane</label>
              </div>
            </div>
          ) : (
            <div className="w-full gap-5 flex sm:flex-row flex-col justify-center items-center">
              {/* ====> search by country */}
              <div className="w-full">
                <InputFieldWithIcon
                  placeholder="Pays"
                  state={State.country}
                  height="h-[44px]"
                  Set_State={(e: any) =>
                    SetState({
                      ...State,
                      country: e.target.value,
                    })
                  }
                  isLeft={true}
                  eventHandle={() => {}}
                  icon={<BiSearch className="text-[30px] text-grey-main" />}
                />
              </div>
              {/* =====> serach by city */}
              <div className="w-full">
                <InputFieldWithIcon
                  placeholder="Ville"
                  height="h-[44px]"
                  state={State.city}
                  Set_State={(e: any) =>
                   SetState({
                      ...State,
                      city: e.target.value,
                    })
                  }
                  isLeft={true}
                  eventHandle={() => {}}
                  icon={<BiSearch className="text-[30px] text-grey-main" />}
                />
              </div>
            </div>
          )}

          {/* =====> filter + add to favorites button */}
          <div className="h-[44px] flex justify-center items-center gap-5">
            {/* ==> favorite */}
            <div
              onClick={() =>
                SetState({
                  ...State,
                  favorite: !State.favorite,
                })
              }
              className="h-[40px] flex justify-center items-center gap-2 border-[1px] border-white-cool w-[132px] rounded-[8px] cursor-pointer select-none"
            >
              <Icons.HeartIcon
                ClassName="w-6 h-6"
                stroke={`${State.favorite ? "#FF8501" : "#240046"}`}
                fill="none"
              />
              <p className="text-base font-semibold font-Roboto">Favoris</p>
            </div>
            {/* ==> filter  */}
            <div
              onClick={() =>
                SetState({
                  ...State,
                  filter: !State.filter,
                })
              }
              className="h-[40px] flex justify-center items-center gap-2 border-[1px] border-white-cool w-[132px] rounded-[8px] cursor-pointer select-none"
            >
              <Icons.FilterIcon
                ClassName="w-6 h-6"
                stroke="none"
                fill={`${State.filter ? "#FF8501" : "#240046"}`}
              />
              <p className="text-base font-semibold font-Roboto">Filtrer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnuaireHandler;