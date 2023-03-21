import React, { useState, useRef, useEffect } from "react";
import InputFieldWithIcon from "components/shared/Buttons/InputFieldWithIcon";
import { GoLocation } from "react-icons/go";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";
import * as Icons from "../../SVG/Icons";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import ContainedCircle from "components/shared/Buttons/ContainedCircle";
import { BiSearch } from "react-icons/bi";
import OutSideClick from "hooks/OutSideClick";

interface Props {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}

const Handler: React.FC<Props> = ({ setState, state }: Props) => {
  //  =====> states
  const [Buttons, setButtons] = useState({
    offerButton: true,
    departButton: false,
    shuffleIcons: false,
  });
  const [Category, setCategory] = useState<any>([]);
  const [Size, setSize] = useState<any>([]);
  const [Weight, setWeight] = useState<any>([]);
  const [SizeData, setSizeData] = useState([
    {
      name: "S",
      color: "text-black-main",
    },
    {
      name: "M",
      color: "text-black-main",
    },
    {
      name: "L",
      color: "text-black-main",
    },
    {
      name: "XL",
      color: "text-black-main",
    },
    {
      name: "XXL",
      color: "text-black-main",
    },
  ]);

  const [WeightData, setWeightData] = useState([
    {
      name: "-5kg",
      color: "text-black-main",
    },
    {
      name: "5-10kg",
      color: "text-black-main",
    },
    {
      name: "10-15kg",
      color: "text-black-main",
    },
    {
      name: "50-100kg",
      color: "text-black-main",
    },
    {
      name: "+kg",
      color: "text-black-main",
    },
  ]);

  // ======> states for toggling the select and inputs
  const [IsOpen, setIsOpen] = useState({
    locationSelect: false,
    countrySelect: false,
    category: false,
    carton: false,
    auntBag: false,
    suitcase: false,
    furniture: false,
    other: false,
    size: false,
    weight: false,
  });

  const [Data, setData] = useState({
    locationData: "",
    countryData: "",
    deliveryDate: "",
    category: [],
    size: [],
    weight: [],
  });

  //  =======> functions for category handling
  const handleCategoryValue = (text: string) => {
    const index = Category.indexOf(text);
    if (index === -1) {
      setCategory([...Category, text]);
    } else {
      setCategory(Category.filter((cat: string) => cat !== text));
    }
  };

  // =========> functions for size handling
  const handleColorSize = (index: number) => {
    const newData = [...SizeData];
    if (newData[index].color === "text-black-main") {
      newData[index].color = "text-brand-main";
    } else {
      newData[index].color = "text-black-main";
    }
    setSizeData(newData);
  };

  const handleSizeValue = (name: string) => {
    const indexOfName = Size.indexOf(name);
    if (indexOfName === -1) {
      setSize([...Size, name]);
    } else {
      setSize(Size.filter((size: string) => size !== name));
    }
  };
  // =========> size functions end here

  //  functions for weight handling
  const handleWeightColor = (index: number) => {
    const newData = [...WeightData];
    if (newData[index].color === "text-black-main") {
      newData[index].color = "text-brand-main";
    } else {
      newData[index].color = "text-black-main";
    }
    setWeightData(newData);
  };
  const handleWeightValue = (name: string) => {
    const indexOfName = Weight.indexOf(name);
    if (indexOfName === -1) {
      setWeight([...Weight, name]);
    } else {
      setWeight(Weight.filter((size: string) => size !== name));
    }
  };
  // Weight handling function end here

  // =========> useEffect
  useEffect(() => {
    setData({
      ...Data,
      category: Category,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Category]);

  useEffect(() => {
    setData({
      ...Data,
      size: Size,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Size]);

  useEffect(() => {
    setData({
      ...Data,
      weight: Weight,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Weight]);

  return (
    <div className="w-full px-4 md:px-[10px]">
      <div className="w-full max-w-[1200px]  flex flex-col justify-center items-start bg-white-main rounded-[20px] shadow-xl p-3 m-auto">
        {/* ======> find an offer + find an depart button */}
        <div className="w-full h-[44px] flex justify-center bg-grey-cool p-[2px] rounded-[8px] items-center">
          <button
            onClick={() => {
              setButtons({
                ...Buttons,
                departButton: false,
                offerButton: true,
              });
              setState(true);
            }}
            className={`w-[50%] h-full flex justify-center items-center ${Buttons.offerButton
                ? "border-[2px] border-solid border-brand-main text-brand-main rounded-[8px]"
                : "text-grey-main"
              }  text-[16px] font-semibold font-sans bg-white-main`}
          >
            Trouver une offre
          </button>
          <button
            onClick={() => {
              setButtons({
                ...Buttons,
                departButton: true,
                offerButton: false,
              });
              setState(false);
            }}
            className={`w-[50%] h-full flex justify-center items-center  text-[16px] font-semibold font-sans ${Buttons.departButton
                ? "border-[2px] border-solid border-brand-main rounded-[8px] text-brand-main bg-white-main"
                : "text-grey-main"
              } `}
          >
            Trouver un départ
          </button>
        </div>
        {/* ========> input fields */}
        <div className="w-full md:grid md:grid-cols-[1.5fr,0.1fr,1.5fr,1.5fr] flex flex-col justify-center items-center md:gap-5 gap-3 py-4">
          {/* ====> location */}
          {Buttons.shuffleIcons === false ? (
            <div className="w-full flex flex-col justify-center items-center relative ">
              <div className="w-full ">
                <InputFieldWithIcon
                  placeholder="Ville/Pays de départ"
                  state={Data.locationData}
                  eventHandle={() =>
                    setIsOpen({
                      ...IsOpen,
                      locationSelect: !IsOpen.locationSelect,
                      countrySelect: false,
                      category: false,
                      size: false,
                      weight: false,
                    })
                  }
                  icon={<GoLocation className="text-[22px] text-brand-main" />}
                />
              </div>
              {IsOpen.locationSelect && (
                <OutSideClick
                  style="w-full bg-white-main border-[2px] border-solid border-brand-main rounded-[8px] p-3 absolute top-[60px] z-30"
                  Event={() => {
                    setIsOpen({
                      ...IsOpen,
                      locationSelect: false,
                    });
                  }}
                >
                  {location.map((option: any, index: number) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <div
                          className="cursor-pointer flex justify-start items-center gap-2 font-sans text-[16px] font-normal"
                          key={index}
                          onClick={() => {
                            setData({
                              ...Data,
                              locationData: option.name,
                            });
                            setIsOpen({
                              ...IsOpen,
                              locationSelect: false,
                            });
                          }}
                        >
                          <GoLocation className="text-[22px] text-[#3D4852]" />
                          {option.name}
                        </div>
                        {index + 1 < location.length && (
                          <div className="w-[80%] border-b-[2px] border-solid border-white-cool my-3"></div>
                        )}
                      </div>
                    );
                  })}
                </OutSideClick>
              )}
            </div>
          ) : (
            <div className="w-full relative">
              <InputFieldWithIcon
                placeholder="Ville/Pays d’arrivée"
                state={Data.countryData}
                eventHandle={() =>
                  setIsOpen({
                    ...IsOpen,
                    countrySelect: !IsOpen.countrySelect,
                    locationSelect: false,
                    category: false,
                    size: false,
                  })
                }
                icon={<GoLocation className="text-[22px] text-brand-main" />}
              />
              {IsOpen.countrySelect && (
                <OutSideClick
                  style="w-full bg-white-main border-[2px] border-solid border-brand-main rounded-[8px] p-3 absolute top-[60px] z-30"
                  Event={() => {
                    setIsOpen({
                      ...IsOpen,
                      countrySelect: false,
                    });
                  }}
                >
                  {location.map((option: any, index: number) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <div
                          className="cursor-pointer flex justify-start items-center gap-2 font-sans text-[16px] font-normal"
                          key={index}
                          onClick={() => {
                            setData({
                              ...Data,
                              countryData: option.name,
                            });
                            setIsOpen({
                              ...IsOpen,
                              countrySelect: false,
                            });
                          }}
                        >
                          <GoLocation className="text-[22px] text-[#3D4852]" />
                          {option.name}
                        </div>
                        {index + 1 < location.length && (
                          <div className="w-[80%] border-b-[2px] border-solid border-white-cool my-3"></div>
                        )}
                      </div>
                    );
                  })}
                </OutSideClick>
              )}
            </div>
          )}
          {/* =====> shuffle icon */}
          <HiOutlineSwitchHorizontal
            onClick={() =>
              setButtons({ ...Buttons, shuffleIcons: !Buttons.shuffleIcons })
            }
            className="text-[30px] flex justify-center items-center text-white-main bg-brand-main p-1 rounded-full cursor-pointer rotate-90 md:rotate-0"
          />
          {/* =====> City/Country of arrival input */}
          {Buttons.shuffleIcons === false ? (
            <div className="w-full relative">
              <InputFieldWithIcon
                placeholder="Ville/Pays d’arrivée"
                state={Data.countryData}
                eventHandle={() =>
                  setIsOpen({
                    ...IsOpen,
                    countrySelect: !IsOpen.countrySelect,
                    locationSelect: false,
                    category: false,
                    size: false,
                  })
                }
                icon={<GoLocation className="text-[22px] text-brand-main" />}
              />
              {IsOpen.countrySelect && (
                <OutSideClick
                  style="w-full bg-white-main border-[2px] border-solid border-brand-main rounded-[8px] p-3 absolute top-[60px] z-30"
                  Event={() => {
                    setIsOpen({
                      ...IsOpen,
                      countrySelect: false,
                    });
                  }}
                >
                  {location.map((option: any, index: number) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <div
                          className="cursor-pointer flex justify-start items-center gap-2 font-sans text-[16px] font-normal"
                          key={index}
                          onClick={() => {
                            setData({
                              ...Data,
                              countryData: option.name,
                            });
                            setIsOpen({
                              ...IsOpen,
                              countrySelect: false,
                            });
                          }}
                        >
                          <GoLocation className="text-[22px] text-[#3D4852]" />
                          {option.name}
                        </div>
                        {index + 1 < location.length && (
                          <div className="w-[80%] border-b-[2px] border-solid border-white-cool my-3"></div>
                        )}
                      </div>
                    );
                  })}
                </OutSideClick>
              )}
            </div>
          ) : (
            <div className="w-full flex flex-col justify-center items-center relative ">
              <div className="w-full ">
                <InputFieldWithIcon
                  placeholder="Ville/Pays de départ"
                  state={Data.locationData}
                  eventHandle={() =>
                    setIsOpen({
                      ...IsOpen,
                      locationSelect: !IsOpen.locationSelect,
                      countrySelect: false,
                      category: false,
                      size: false,
                      weight: false,
                    })
                  }
                  icon={<GoLocation className="text-[22px] text-brand-main" />}
                />
              </div>
              {IsOpen.locationSelect && (
                <OutSideClick
                  style="w-full bg-white-main border-[2px] border-solid border-brand-main rounded-[8px] p-3 absolute top-[60px] z-30"
                  Event={() => {
                    setIsOpen({
                      ...IsOpen,
                      locationSelect: false,
                    });
                  }}
                >
                  {location.map((option: any, index: number) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <div
                          className="cursor-pointer flex justify-start items-center gap-2 font-sans text-[16px] font-normal"
                          key={index}
                          onClick={() => {
                            setData({
                              ...Data,
                              locationData: option.name,
                            });
                            setIsOpen({
                              ...IsOpen,
                              locationSelect: false,
                            });
                          }}
                        >
                          <GoLocation className="text-[22px] text-[#3D4852]" />
                          {option.name}
                        </div>
                        {index + 1 < location.length && (
                          <div className="w-[80%] border-b-[2px] border-solid border-white-cool my-3"></div>
                        )}
                      </div>
                    );
                  })}
                </OutSideClick>
              )}
            </div>
          )}

          {/* ====> Choose a delivery date */}
          <div className="w-full flex justify-center items-center border-[1px] rounded-[8px] border-solid border-white-cool px-2">
            {/* =====> icon */}
            {
              <Icons.DateIcon
                ClassName="w-6 h-6 mr-2"
                fill="#FF8501"
                stroke=""
              />
            }
            <DatePicker
              placeholderText="Choisissez une date de livraison"
              selected={Data.deliveryDate}
              isClearable
              onChange={(date: any) =>
                setData({
                  ...Data,
                  deliveryDate: date,
                })
              }
            />
          </div>
        </div>
        {/* =======> select boxex + button */}
        <div className="w-full flex md:flex-row flex-col md:gap-0 justify-between items-center">
          {/* =====> select boxes */}
          {state && (
            <div className="w-full grid grid-cols-2 sm:grid-cols-[1fr,1fr,1fr,3.5fr] gap-4 sm:gap-10">
              {/* =======> category select */}
              <div className="flex w-auto flex-col sm:flex-row justify-center items-center relative">
                <div className="cursor-pointer">
                  <InputFieldWithIcon
                    isLeft={false}
                    icon={<MdExpandMore className="w-10 h-8 text-[#3D4852]" />}
                    placeholder="Catégorie"
                    state={`category ${Category.length > 0 ? `(${Category.length})` : ""
                      }`}
                    eventHandle={() =>
                      setIsOpen({
                        ...IsOpen,
                        countrySelect: false,
                        locationSelect: false,
                        category: !IsOpen.category,
                        size: false,
                        weight: false,
                      })
                    }
                  />
                </div>
                {IsOpen.category && (
                  <OutSideClick
                    style="w-[300px] sm:w-[580px] md:w-[600px] lg:w-[900px] bg-white-main flex flex-col rounded-[10px] absolute top-[60px] left-[0px] z-30 shadow-lg"
                    Event={() => {
                      setIsOpen({
                        ...IsOpen,
                        category: false,
                      });
                    }}
                  >
                    <>
                      {/* =====> upper category type */}
                      <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-6 sm:gap-20 p-8">
                        {/* ====> first category */}
                        <div
                          className="flex justify-center items-center gap-2 cursor-pointer"
                          onClick={() => {
                            handleCategoryValue("Carton");
                            setIsOpen({
                              ...IsOpen,
                              carton: !IsOpen.carton,
                            });
                          }}
                        >
                          <div className="w-16 h-16 flex justify-center items-center  border-2 border-solid border-white-cool p-3 rounded-full">
                            <Icons.categoryOne
                              ClassName="w-16 h-16  "
                              fill={`${IsOpen.carton ? "#FF8501" : "#7E858B"}`}
                              stroke=""
                            />
                          </div>
                          <p
                            className={`${IsOpen.carton
                                ? "text-brand-main"
                                : "text-black-main"
                              } text-[16px] font-sans font-semibold select-none`}
                          >
                            Carton
                          </p>
                        </div>
                        {/* ======> sec category */}
                        <div
                          className="flex justify-center items-center gap-2 cursor-pointer"
                          onClick={() => {
                            handleCategoryValue("Sac tati");
                            setIsOpen({
                              ...IsOpen,
                              auntBag: !IsOpen.auntBag,
                            });
                          }}
                        >
                          <div className="w-16 h-16 flex justify-center items-center  border-2 border-solid border-white-cool p-3 rounded-full">
                            <Icons.categoryTwo
                              ClassName="w-16 h-16  "
                              fill={`${IsOpen.auntBag ? "#FF8501" : "#7E858B"}`}
                              stroke=""
                            />
                          </div>
                          <p
                            className={`${IsOpen.auntBag
                                ? "text-brand-main"
                                : "text-black-main"
                              } text-[16px] font-sans font-semibold select-none`}
                          >
                            Sac tati
                          </p>
                        </div>
                        {/* ======> third category */}
                        <div
                          className="flex justify-center items-center gap-2 cursor-pointer"
                          onClick={() => {
                            handleCategoryValue("valise");
                            setIsOpen({
                              ...IsOpen,
                              suitcase: !IsOpen.suitcase,
                            });
                          }}
                        >
                          <div className="w-16 h-16 flex justify-center items-center  border-2 border-solid border-white-cool p-3 rounded-full">
                            <Icons.categoryThree
                              ClassName="w-16 h-16  "
                              fill={`${IsOpen.suitcase ? "#FF8501" : "#7E858B"
                                }`}
                              stroke=""
                            />
                          </div>
                          <p
                            className={`${IsOpen.suitcase
                                ? "text-brand-main"
                                : "text-black-main"
                              } text-[16px] font-sans font-semibold select-none`}
                          >
                            valise
                          </p>
                        </div>
                      </div>
                      {/* ========> bottom line */}
                      <div className="w-full border-b-[2px] border-solid border-white-cool"></div>
                      {/* =====> bottom category type */}
                      <div className="w-full flex flex-col sm:flex-row justify-start  items-center gap-6 sm:gap-20 p-8">
                        {/* ========> category four */}
                        <div
                          className="flex justify-center items-center gap-2 cursor-pointer"
                          onClick={() => {
                            handleCategoryValue("meubles");
                            setIsOpen({
                              ...IsOpen,
                              furniture: !IsOpen.furniture,
                            });
                          }}
                        >
                          <div className="w-16 h-16 flex justify-center items-center  border-2 border-solid border-white-cool p-3 rounded-full">
                            <Icons.categoryFour
                              ClassName="w-16 h-16  "
                              fill={`${IsOpen.furniture ? "#FF8501" : "#7E858B"
                                }`}
                              stroke=""
                            />
                          </div>
                          <p
                            className={`${IsOpen.furniture
                                ? "text-brand-main"
                                : "text-black-main"
                              } text-[16px] font-sans font-semibold select-none`}
                          >
                            meubles
                          </p>
                        </div>
                        {/* category five */}
                        <div
                          className="flex justify-center items-center gap-2 cursor-pointer"
                          onClick={() => {
                            handleCategoryValue("autre");
                            setIsOpen({
                              ...IsOpen,
                              other: !IsOpen.other,
                            });
                          }}
                        >
                          <div className="w-16 h-16 flex justify-center items-center  border-2 border-solid border-white-cool p-3 rounded-full">
                            <Icons.categoryFive
                              ClassName="w-16 h-16  "
                              fill={`${IsOpen.other ? "#FF8501" : "#7E858B"}`}
                              stroke=""
                            />
                          </div>
                          <p
                            className={`${IsOpen.other
                                ? "text-brand-main"
                                : "text-black-main"
                              } text-[16px] font-sans font-semibold select-none`}
                          >
                            autres
                          </p>
                        </div>
                      </div>
                    </>
                  </OutSideClick>
                )}
              </div>
              {/* ========> Size select */}
              <div className=" flex w-auto flex-col sm:flex-row  justify-center items-center relative">
                <div className="cursor-pointer">
                  <InputFieldWithIcon
                    isLeft={false}
                    icon={<MdExpandMore className="w-10 h-8 text-[#3D4852]" />}
                    placeholder="Taille"
                    state={`Taile ${Size.length > 0 ? `(${Size})` : ""}`}
                    eventHandle={() =>
                      setIsOpen({
                        ...IsOpen,
                        countrySelect: false,
                        locationSelect: false,
                        category: false,
                        size: !IsOpen.size,
                        weight: false,
                      })
                    }
                  />
                </div>

                {IsOpen.size && (
                  <OutSideClick
                    Event={() => {
                      setIsOpen({
                        ...IsOpen,
                        size: false,
                      });
                    }}
                    style="w-full bg-white-main border-[2px] border-solid border-brand-main rounded-[8px] absolute top-[60px] z-30 shadow-lg"
                  >
                    {SizeData.map((option: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col justify-center items-center cursor-pointer"
                          onClick={() => {
                            handleColorSize(index);
                            handleSizeValue(option.name);
                            setIsOpen({
                              ...IsOpen,
                            });
                          }}
                        >
                          <div
                            className={`cursor-pointer ${option.color} flex justify-start items-center gap-2 font-sans text-[16px] font-normal py-1`}
                            key={index}
                          >
                            {option.name}
                          </div>
                          {index < location.length && (
                            <div className="w-full border-b-[2px] border-solid border-white-cool my-2"></div>
                          )}
                        </div>
                      );
                    })}
                  </OutSideClick>
                )}
              </div>
              {/* ========> weight selection */}
              <div className=" flex w-auto flex-col sm:flex-row  justify-center items-center relative">
                <div className="cursor-pointer">
                  <InputFieldWithIcon
                    isLeft={false}
                    icon={<MdExpandMore className="w-10 h-8 text-[#3D4852]" />}
                    placeholder="Poids"
                    state={`Poids ${Weight.length > 0 ? `(${Weight})` : ""}`}
                    eventHandle={() =>
                      setIsOpen({
                        ...IsOpen,
                        countrySelect: false,
                        locationSelect: false,
                        category: false,
                        size: false,
                        weight: !IsOpen.weight,
                      })
                    }
                  />
                </div>
                {IsOpen.weight && (
                  <OutSideClick
                    style="w-full bg-white-main border-[2px] border-solid border-brand-main rounded-[8px] absolute top-[60px] z-30 shadow-lg"
                    Event={() => {
                      setIsOpen({
                        ...IsOpen,
                        weight: false,
                      });
                    }}
                  >
                    {WeightData.map((option: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col justify-center items-center cursor-pointer"
                          onClick={() => {
                            handleWeightColor(index);
                            handleWeightValue(option.name);
                            setData({
                              ...Data,
                              weight: option.name,
                            });
                          }}
                        >
                          <div
                            className={`${option.color} cursor-pointer flex justify-start items-center gap-2 font-sans text-[16px] font-normal py-3`}
                            key={index}
                          >
                            {option.name}
                          </div>
                          {index < location.length && (
                            <div className="w-full border-b-[2px] border-solid border-white-cool"></div>
                          )}
                        </div>
                      );
                    })}
                  </OutSideClick>
                )}
              </div>
              {/* ========> to search button */}
              <div className="w-full flex justify-end items-center">
                <ContainedCircle
                  Text="Rechercher"
                  Icon={<BiSearch className="text-[26px] text-white-main" />}
                  styles="w-[170px] bg-brand-main text-white-main"
                />
              </div>
            </div>
          )}
          {/* ========> to search button (this button will display for depart section) */}
          {state === false && (
            <div className="w-full flex justify-end items-center">
              <ContainedCircle
                Text="Rechercher"
                Icon={<BiSearch className="text-[26px] text-white-main" />}
                styles="w-[170px] bg-brand-main text-white-main"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const location = [
  {
    name: "Lyon, France",
  },
  {
    name: "Nice, France",
  },
  {
    name: "Marseille, France",
  },
  {
    name: "Toulouse, France",
  },
];

export default Handler;