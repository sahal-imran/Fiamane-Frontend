import React, { useState } from "react";
import AnnuaireHandler from "./AnnuaireHandler";
import { BiSearch } from "react-icons/bi";
import Pagination from "@mui/material/Pagination";
import Data from "constants/JSON/Data";
import AnnuaireCard from "./AnnuaireCard";
function Annuaire() {
  // states for Annuairehandler
  const [InputsValue, setInputsValue] = useState({
    searchByName: "",
    country: "",
    city: "",
    agencies: true,
    carrier: false,
    filter: false,
    favorite: false,
    departureCity: false,
    arivalCity: false,
    topRated: false,
    verifiedByFiamane: false,
  });
  // to filter the data by Verified by fiamne or not
  const VerfiedData = Data.Annuaire.Agences.filter(
    (item) => item.IsVerified === InputsValue.verifiedByFiamane
  );

  return (
    <React.Fragment>
      <div className="w-full  flex flex-col items-center justify-start pb-20 px-4 md:px-[10px]">
        <div className="w-full -translate-y-[100px]">
          <AnnuaireHandler State={InputsValue} SetState={setInputsValue} />
        </div>
        <div className="w-full max-w-[1200px] flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-16 lg:gap-8">
          {/* left side here */}
          <div className="w-full flex flex-col  justify-center gap-6 md:gap-4">
            {/* component */}
            {VerfiedData.map((item: any, index: number) => {
              return (
                <AnnuaireCard
                  key={index}
                  Route={`/annuaire/${item.id}`}
                  CompanyImage={item.CompanyImage}
                  CompanyName={item.CompanyName}
                  CompanyMessege={item.CompanyMessege}
                  rating={item.Rating}
                  Reviews={item.Reviews}
                  Address={item.Address}
                  IsVerified={item.IsVerified}
                />
              );
            })}
            {/* bottom paginatin div here for bigger screens */}
            <div className="w-full hidden lg:flex  lg:justify-between my-[60px]">
              <div>
                <Pagination
                  sx={{
                    "& .MuiPaginationItem-root": {
                      "&.Mui-selected": {
                        background: "#FF8501",
                        color: "white",
                      },
                    },
                  }}
                  count={3}
                  shape="rounded"
                />
              </div>
              <div className="flex gap-3 items-center">
                <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[24px]">
                  Afficher
                </p>
                <select
                  className="border py-1 px-3 focus:outline-none rounded-[10px]"
                  name=""
                  id=""
                >
                  <option value="">3</option>
                  <option value="">5</option>
                  <option value="">4</option>
                </select>
                <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[24px]">
                  résultats par page
                </p>
              </div>
            </div>
          </div>
          {/* right side here */}
          <div className="w-full flex flex-col gap-[30px]">
            {/* Track your pacakge portion here */}
            <div className="flex flex-col gap-4 bg-white-main rounded-[10px] shadow-xl p-4">
              <div className="flex gap-2 items-center">
                <BiSearch size={25} />
                <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[24px]">
                  Suivre votre colis
                </p>
              </div>
              <p className="text-black-main text-[14px] font-[400] leading-[24px] font-OpenSans">
                Entrez le numéro de suivi de votre colis pour suivre son état
                d’avancement
              </p>
              <input
                className="w-full rounded-[8px] h-[40px] border border-brand-main p-[12px] focus:outline-none"
                type="text"
                placeholder="N° d’envoi, sans espaces"
              />
            </div>

            {/* empty divs here */}
            <div className="h-[273px] w-full bg-white-off rounded-[10px]"></div>
            <div className="h-[273px] w-full bg-white-off rounded-[10px]"></div>
            {/* bottom paginatin div here for mobile screens */}
            <div className="w-full flex flex-col gap-8 items-center lg:hidden  my-[60px]">
              <div>
                <Pagination
                  sx={{
                    "& .MuiPaginationItem-root": {
                      "&.Mui-selected": {
                        background: "#FF8501",
                        color: "white",
                      },
                    },
                  }}
                  count={3}
                  shape="rounded"
                />
              </div>
              <div className="flex gap-3 items-center">
                <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[24px]">
                  Afficher
                </p>
                <select
                  className="border py-1 px-3 focus:outline-none rounded-[10px]"
                  name=""
                  id=""
                >
                  <option value="">3</option>
                  <option value="">5</option>
                  <option value="">4</option>
                </select>
                <p className="font-OpenSans font-[400] text-black-main text-[14px] leading-[24px]">
                  résultats par page
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Annuaire;
