import Link from 'next/link';
import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import Data from "../../../constants/JSON/Data"
import ContainedCircle from '../Buttons/ContainedCircle';
import * as Icons from "../../../SVG/Icons"
import { useTranslation } from 'hooks/useTranslation';


// Auth Content props types
interface context {
  IsUserLoggedIn: boolean;
  SetUserLogged: (state: boolean) => void;
}


function LeftNavigation() {
  const translate = useTranslation();

  const Router = useRouter();
  return (
    <div className='w-full h-full bg-brand-secondary py-8 flex justify-between items-center flex-col' >
      {/* Nav items */}
      <div className='w-full' >
        {
          Data.LeftNavigation.NavItems.map((item: any, index: number) => {
            return <Link key={index} href={item.Route} className={`w-full h-[48px] text-white-main flex justify-start items-center px-8 font-OpenSans text-[18px] leading-[28px] tracking-[-0.01em] hover:bg-brand-tertiary ${Router.pathname === item.Route ? "font-semibold bg-brand-tertiary " : "font-normal"} `} >
              {translate(item.Name)}
            </Link>
          })
        }
      </div>
      <ContainedCircle Icon={<Icons.Logout ClassName='w-[20px] h-[20px]' fill='#240046' />} Text={translate("Buttons.LogOut")} styles='w-[223px] bg-white-main text-brand-secondary text-[16px]' />
    </div>
  )
}

export default LeftNavigation