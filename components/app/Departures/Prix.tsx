import React, { useEffect, useState } from "react";
import ToggleSwitch from "components/shared/ToggleSwitch/ToggleSwitch";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";

function Prix() {
  // ======>states
  const [AcceptNegotiationSwitch, SetAcceptNegotiationSwitch] =
    useState<boolean>(false);
  const [AddRoom, SetAddRoom] = useState<boolean>(false);

  const handleAddRoom = () => {
    AddNewRoom(RoomNumber);
    SetAddRoom(true);
  };

  //====> Room array
  const [RoomNumber, SetRoomNumber] = useState<number[]>([]);

  const AddNewRoom = (event: any) => {
    let roomNu = RoomNumber.length + 1;
    SetRoomNumber([...RoomNumber, roomNu]);
  };

  const RemoveNum = (event: any) => {
    const rooms = [...RoomNumber];
    rooms.pop();
    SetRoomNumber(rooms);
  };

  // ======> useEffect
  useEffect(() => {
    if (AcceptNegotiationSwitch === false) {
      SetAddRoom(false);
    }
  }, [AcceptNegotiationSwitch, RoomNumber]);

  return (
    <div className="w-full flex flex-col justify-center items-start bg-white-main shadow-md rounded-md pb-4">
      <p className="w-full h-[60px] flex justify-start items-center text-[20px] text-brand-secondary font-semibold font-NunitoSans leading-[32px] border-b-[2px] border-solid border-white-cool px-4">
        Prix
      </p>
      <div className="w-full flex flex-col justify-center items-start gap-4 px-4">
        {/* ========> Price per Kg */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-start gap-2">
          <label
            htmlFor=""
            className="text-[16px] font-sans text-black-cool font-normal leading-[24px]"
          >
            Prix au Kg
          </label>
          <div className="w-full grid grid-cols-[3fr,1fr]">
            {/* ======> input */}
            <input
              className="px-2 h-[50px] border-[1px] rounded-l-[8px] border-solid border-white-cool outline-none"
              type="text"
              id=""
              name=""
            />
            {/* ========> select box */}
            <select
              className="px-2 text-base font-sans text-black-main outline-none border-[1px] rounded-r-[8px] border-solid border-white-cool h-[50px]"
              name=""
              id=""
            >
              {PricePerKgData.map((opt, index) => {
                return (
                  <option key={index} value={opt.value}>
                    {opt.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* Accept negotiation switch */}
        <div className="flex">
          <ToggleSwitch
            label="Accepter négociation"
            state={AcceptNegotiationSwitch}
            Set_State={SetAcceptNegotiationSwitch}
          />
        </div>

        {AcceptNegotiationSwitch && (
          <div className="flex flex-col gap-3">
            <p className="w-full flex justify-start items-center text-[16px] text-brand-secondary font-semibold font-NunitoSans leading-[32px]">
              Prix par pièce
            </p>
            {RoomNumber.length === 0 && (
              <ContainedCircle
                Icon={<HiOutlinePlus className="text-brand-main text-[20px]" />}
                Text="Ajouter une pièce"
                onClick={handleAddRoom}
                styles="bg-none border-2 border-solid border-brand-main rounded-full text-brand-main w-[170px]"
              />
            )}
          </div>
        )}
      </div>
      {AddRoom && AcceptNegotiationSwitch ? (
        <div className="w-full flex flex-col justify-center items-start">
          {/* Price + Piece input  */}
          <div className="w-full flex flex-col justify-center items-start gap-4 py-4 px-4 ">
            {RoomNumber.map((room: number, index: number) => {
              return (
                <div key={index} className="w-full grid grid-cols-1 md:grid-cols-[3fr,3fr,0.3fr] gap-4 relative">
                  {/* ======> piece selection */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor=""
                      className="text-[16px] font-sans text-black-cool font-normal leading-[24px]"
                    >
                      Pièce
                    </label>
                    <select
                      className="w-full px-2 text-base font-sans text-black-main
              outline-none border-[1px] rounded-[8px] border-solid
              border-white-cool h-[50px]"
                      id=""
                      name=""
                      placeholder="Séléctionner une pièce"
                    >
                      {PricePerKgData.map((opt, index) => {
                        return (
                          <option key={index} value={opt.value}>
                            {opt.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {/* ======> price selection */}
                  <div className="flex flex-col justify-center items-start gap-2">
                    <label
                      htmlFor=""
                      className="text-[16px] font-sans text-black-cool font-normal leading-[24px]"
                    >
                      Prix
                    </label>
                    <div className="w-full grid grid-cols-[3fr,1fr]">
                      {/* ======> input */}
                      <input
                        className="px-2 h-[50px] border-[1px] rounded-l-[8px] border-solid border-white-cool outline-none"
                        type="text"
                        id=""
                        name=""
                      />
                      {/* ========> select box */}
                      <select
                        className="px-2 text-base font-sans text-black-main outline-none border-[1px] rounded-r-[8px] border-solid border-white-cool h-[50px]"
                        name=""
                        id=""
                      >
                        <option value="volvo">Euro</option>
                        <option value="saab">gram</option>
                        <option value="mercedes">kg</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                  {/* ======> delete icon */}
                  <div className="absolute md:relative right-0 -top-4 md:top-0">
                    <AiOutlineDelete
                      className="text-[30px] text-brand-main cursor-pointer"
                      onClick={RemoveNum}
                    />
                  </div>
                </div>
              );
            })}
            {RoomNumber.length > 0 && (
              <ContainedCircle
                Text="Ajouter une autre pièce"
                styles="bg-none text-brand-main px-4"
                onClick={AddNewRoom}
                Icon={<HiOutlinePlus className="text-brand-main text-[20px]" />}
              />
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const PricePerKgData = [
  {
    name: "Euro",
    value: "euro",
  },
  {
    name: "Gram",
    value: "gram",
  },
  {
    name: "Kg",
    value: "kg",
  },
  {
    name: "Dollar",
    value: "dollar",
  },
];

export default Prix;
