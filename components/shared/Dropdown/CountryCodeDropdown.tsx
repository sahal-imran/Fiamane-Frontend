import React, { useEffect, useRef } from 'react'
import * as Icons from "../../../SVG/Icons"
import { useTranslation } from 'hooks/useTranslation';

interface Props {
  State: boolean;
  Event: (e: boolean) => void;
  GetValueEvent: (e: string, name?: string) => void;
  Placeholder: string;
  Item: Array<object>;
  Styles?: string;
  name?: string
}

function CountryCodeDropdown({ State, Event, GetValueEvent, Placeholder = "Select", Item, Styles = "w-full h-[48px] rounded-[8px] border-[1px] border-[#E6E6E6]", name }: Props) {
  const translate = useTranslation();
  const [ValueTitle, SetValueTitle] = React.useState<string>("")
  React.useEffect(() => {
    SetValueTitle(Placeholder)
  }, [Placeholder])
  let useClickOutside = (handler: any) => {
    let domNode = useRef<any>();
    useEffect(() => {
      let maybeHandler = (event: any) => {
        if (!domNode.current?.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });

    return domNode;
  };
  let domNode = useClickOutside(() => {
    Event(false)
  });
  return (
    <div ref={domNode} className={`${name} relative Dropdown ${Styles}`} >
      <div onClick={() => Event(!State)} className='w-full h-full flex justify-between items-center px-4 cursor-pointer' >
        <p className={`font-OpenSans font-normal text-[14px] leading-[28px] outline-none ${Placeholder === ValueTitle ? "text-[#B3B3B3]" : "text-[#1A1A1A]"}`} >{ValueTitle}</p>
        <Icons.ArrowDown ClassName='w-[12px] h-[12px]' stroke={Placeholder === ValueTitle ? "#B3B3B3" : "#1A1A1A"} fill='none' />
      </div>
      {
        State &&
        <div className='w-full absolute top-[105%] z-50 left-0 drop-shadow-xl bg-white-main rounded-bl-[8px] rounded-br-[8px] py-1 max-h-[120px] overflow-auto CountryCodeDropdown' >
          {
            Item.map((item: any, index: number) => {
              return <button type='button' key={index} onClick={() => { SetValueTitle(item.phone); GetValueEvent(item.phone); Event(!State) }} className={`w-full font-OpenSans font-[400] text-black-main text-[16px] leading-[30px] text-start px-4 ${ValueTitle === item.phone && "bg-brand-mainCool"} hover:bg-brand-mainCool cursor-pointer`} >
                {item.phone}
              </button>
            })
          }
        </div>
      }
    </div>
  )
}

export default CountryCodeDropdown