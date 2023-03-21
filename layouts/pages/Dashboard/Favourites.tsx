import React, { useEffect, useState } from "react";
import * as Icons from "../../../SVG/Icons";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";

function Favourites() {
  // ====> states for showing buttons if atleast one favourite is true
  const [isFavorite, setIsFavorite] = useState(false);
  //   array containing the Favourites data if there is some data
  const [Products, SetProducts] = useState([
    {
      Id: 1,
      IsVerified: true,
      isFavourite: false,
      CompanyName: "Maghreb Tourisme & Transport",
      CompanyImage: "/Assets/MTT.png",
      Description:
        "Urna, purus ac eleifend quisque magna. Odio fermentum,suspendisse cursus rhoncus.",
    },
    {
      Id: 2,
      IsVerified: true,
      CompanyName: "Lorem ipsum dolor sit amet",
      CompanyImage: "/Assets/Prans.png",
      isFavourite: false,
      Description:
        "Urna, purus ac eleifend quisque magna. Odio fermentum,suspendisse cursus rhoncus.",
    },
    {
      Id: 3,
      IsVerified: true,
      CompanyName: "Lorem ipsum dolor sit amet",
      CompanyImage: "/Assets/Guadix.png",
      isFavourite: false,
      Description:
        "Urna, purus ac eleifend quisque magna. Odio fermentum,suspendisse cursus rhoncus.",
    },
    {
      Id: 4,
      IsVerified: true,
      CompanyName: "Lorem ipsum dolor sit amet",
      CompanyImage: "/Assets/Boumara.png",
      isFavourite: false,
      Description:
        "Urna, purus ac eleifend quisque magna. Odio fermentum,suspendisse cursus rhoncus.",
    },
  ]);


  //  function to  remove a item from array
  const removeItem = (e: any, item: any) => {
    e.stopPropagation();

    let newList = Products.filter((x: any) => x.Id !== item.Id);
    SetProducts([...newList]);
  };

  // ======> function add products to favourite
  function toggleFavorite(id: number) {
    const UpdatedProduct = Products.map((pro, index) => {
      if (pro.Id === id) {
        return { ...pro, isFavourite: !pro.isFavourite };
      } else {
        return pro;
      }
    });
    SetProducts(UpdatedProduct);
  }
  // ====> remove from favourite
  const removeFromFavorite = () => {
    const UpdatedProduct = Products.map((pro, index) => {
      if (pro.isFavourite === true) {
        return { ...pro, isFavourite: false };
      } else return pro;
    });
    SetProducts(UpdatedProduct);
  };
  // ====> delete favourite
  const deleteFavorite = () => {
    const UpdatedProduct = Products.filter((pro) => !pro.isFavourite);
    SetProducts(UpdatedProduct);
  };

  useEffect(() => {
    const checkFavorites = () => {
      const hasFavorite = Products.some(obj => obj.isFavourite);
      setIsFavorite(hasFavorite);
    };

    checkFavorites();
  }, [Products]);

  // console.log(Products);
  return (
    <div className="w-full  min-h-screen  bg-white-off md:6 lg:p-8 p-4 ">
      <React.Fragment>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <p className="text-black-main sm:text-[34px] md:text-[16px] lg:text-[34px] text-[28px] leading-[54px] font-NunitoSans font-[600]">
            Mes favoris
          </p>
          {/* ====> cancel + Delete Favorites buttons */}
          {isFavorite && (
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <ContainedCircle
                onClick={removeFromFavorite}
                Text="Annuler"
                styles="bg-none w-[180px] md:w-[130px] lg:w-[180px] h-[48px] text-brand-secondary border-[1px] border-white-cool rounded-[8px]"
              />
              <ContainedCircle
                onClick={deleteFavorite}
                Text="Suprimer les favoris"
                styles="bg-none w-[180px] md:w-[150px] lg:w-[180px] h-[48px] text-brand-main border-[1px] border-brand-main rounded-[8px]"
              />
            </div>
          )}
        </div>
        {/* if there is no data than this div will appear */}
        {Products.length === 0 && (
          <>
            <div className="w-full flex flex-col gap-3  items-center justify-center bg-white-main rounded-[8px] mt-4 py-6">
              {/* Icon here */}
              <div className=" h-[100px] w-[100px] flex justify-center items-center  p-4 ">
                <Icons.FavouriteIcon
                  fill=""
                  stroke=""
                  ClassName="w-[100px] h-[100px]"
                />
              </div>

              <p className="text-center sm:text-[18px] text-[14px] text-black-main font-NunitoSans font-[600] leading-[28px] ">
                Rien à montrer pour le moment
              </p>
              <p className="text-center text-black-main font-OpenSans font-[400] sm:text-[16px] text-[14px] leading-[28px]">
                Lorsque vous ajoutez des transporteurs à vos favoris , vous les
                verrez ici.
              </p>
              <button
                onClick={() => { }}
                className="flex items-center justify-center text-brand-main font-NunitoSans font-[600] sm:text-[14px] text-[12px] leading-[20px]"
              >
                {" "}
                Voir annuaire
              </button>
            </div>
          </>
        )}
        {/* if there is some data in the array than this div will appear */}
        {Products.length > 0 && (
          <div className="w-full flex flex-col items-center justify-center  md:grid md:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr,1fr] md:gap-[20px] gap-[40px] my-[30px]">
            {Products.map((item: any, index: number) => {
              return (
                <div
                  onClick={() => toggleFavorite(item.Id)}
                  key={index}
                  className={`w-full flex flex-col shadow-lg  justify-center gap-2 ${item.isFavourite ? "border-[1px] border-brand-main"
                    : "border-[1px] border-transparent"}  bg-white-main relative rounded-[10px] p-[10px]`}
                >
                  {item.IsVerified && (
                    <Icons.VerifiedIcon
                      fill=""
                      ClassName="top-2 z-10 -left-2 absolute"
                      stroke=""
                    />
                  )}
                  <div className="w-full flex items-center justify-center">
                    <div className="w-[100px] relative h-[100px] md:h-[85px] ">
                      <Image src={item.CompanyImage} alt="" fill />
                    </div>
                  </div>
                  <hr className="bg-white-off" />
                  <p className="font-[600] font-OpenSans text-black-main text-[14px] leading-[22px]">
                    {item.CompanyName}
                  </p>
                  <p className="font-OpenSans font-[400] text-[10px] leading-[14px] text-[#4D4D4D]">
                    {item.Description}
                  </p>
                  <button
                    // onClick={(e) => {
                    //   removeItem(e, item);
                    // }}
                    className="flex items-center justify-center bg-brand-mainCool text-brand-main absolute top-[12px] right-[10px] rounded-full p-1 "
                  >
                    <RxCross2 size={20} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </React.Fragment>
    </div>
  );
}

export default Favourites;