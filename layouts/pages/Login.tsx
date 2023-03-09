import React from 'react'
import Dialog from '@mui/material/Dialog';
import * as Icons from "../../SVG/Icons"
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'hooks/useTranslation';


interface Props {
  LoginState: boolean;
  LoginEvent: (e: boolean) => void;
  SignUpEvent: (e: boolean) => void;
  ForgetPasswordEvent: (e: boolean) => void
}

function Index({ LoginState, LoginEvent, SignUpEvent, ForgetPasswordEvent }: Props) {
  const translate = useTranslation();
  const [Inputs, setInputs] = React.useState({
    Email: "",
    Password: ""
  });
  const InputChange = (evt: any) => {
    const value = evt.target.value;
    setInputs({
      ...Inputs,
      [evt.target.name]: value,
    });
  };
  const Login = (e: any) => {
    e.preventDefault();
  }

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          background: "#FFFFFF",
          borderRadius: "20px",
          minWidth: "auto",
          maxHeight: "auto"
        },
        "& ::-webkit-scrollbar": {
          width: "0px"
        }
      }}
      open={LoginState}>
      <div className={`w-[465px] min-h-[600px] `} >
        {/* Title and cross bar */}
        <div className='w-full h-[78px] px-6 flex justify-end items-center' >
          <button onClick={() => LoginEvent(false)} className='w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
            <Icons.Close ClassName='w-[16.8px] h-[16.8px]' fill='#1A1A1A' />
          </button>
        </div>
        {/* logo */}
        <div className='w-[155px] m-auto h-[60px] relative -mt-12' >
          <Image src={"/logo.svg"} alt="" fill className='object-cover' />
        </div>
        {/* Content */}
        <div className='w-full flex justify-center item-center flex-col mt-6 gap-5' >
          <h2 className='font-OpenSans m-auto font-[700] text-brand-secondary text-[28px] leading-[44px] tracking-[-0.04em]' >
            {translate("Modals.Auth.Login.LoginStep.Title")}
          </h2>
          <div className='w-full flex justify-center item-center flex-col gap-4 md:px-8 px-4' >
            <button className='w-full md:h-[68px] h-[46px] font-NunitoSans font-[600] gap-4 text-brand-secondary md:text-[20px] leading-[32px] tracking-[-0.01em] bg-transparent border-[1px] border-[#E6E6E6] rounded-[8px] px-4 flex justify-start items-center' >
              <Icons.Google ClassName='md:w-[48px] w-[32px] md:h-[48px] h-[32px]' />
              {translate("Modals.Auth.Login.LoginStep.LoginWithGoogle")}
            </button>
            <button className='w-full md:h-[68px] h-[46px] font-NunitoSans font-[600] gap-4 text-brand-secondary md:text-[20px] leading-[32px] tracking-[-0.01em] bg-transparent border-[1px] border-[#E6E6E6] rounded-[8px] px-4 flex justify-start items-center' >
              <Icons.Facebook ClassName='md:w-[48px] w-[32px] md:h-[48px] h-[32px]' />
              {translate("Modals.Auth.Login.LoginStep.LoginWithFacebook")}
            </button>
            <form onSubmit={Login} className='w-full flex justify-center item-center flex-col gap-3 mt-2' >
              <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6 flex justify-center items-center]' >
                <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                  <Icons.Mail ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />
                </div>
                <div className='md:w-[90%] w-[85%] h-full' >
                  <input required autoComplete='off' name='Email' value={Inputs.Email} onChange={InputChange} type="email" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3]' placeholder={translate("Modals.Auth.Login.LoginStep.InputEmailPlaceholder")} />
                </div>
              </div>
              <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6 flex justify-center items-center]' >
                <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                  <Icons.HiddenPassword ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />
                </div>
                <div className='md:w-[90%] w-[85%] h-full' >
                  <input required autoComplete='off' name='Password' value={Inputs.Password} onChange={InputChange} type="password" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3]' placeholder={translate("Modals.Auth.Login.LoginStep.InputPassPlaceholder")} />
                </div>
              </div>
              <div onClick={() => {
                ForgetPasswordEvent(true);
                LoginEvent(false);
              }} className="font-NunitoSans font-[600] text-[14px] leading-[24px] text-brand-secondary py-1 self-start" >
                {translate("Modals.Auth.Login.LoginStep.ForgotPassword")}
                <span className='cursor-pointer ml-1' >
                  {translate("Modals.Auth.Login.LoginStep.ForgotPasswordLink")}
                </span>
              </div>
              {/* Button */}
              <button type='submit' className='w-full h-[48px] rounded-[8px] bg-brand-main flex justify-center items-center font-NunitoSans font-[600] text-[16px] leading-[24px] text-white-main'>
                {translate("Buttons.Login")}
              </button>
              <p className='font-NunitoSans font-[400] text-[12px] leading-[20px] text-[#7A7A7A] py-6 text-center m-auto md:max-w-[296px]' >
                {translate("Modals.Auth.Login.LoginStep.TermsAndConditions")} <Link onClick={() => SignUpEvent(false)} href={""} className="text-brand-main" >{translate("Modals.Auth.Login.LoginStep.TermsAndConditionsLink")}</Link>
              </p>
              <div className='w-full h-[1px] bg-[#E6E6E6] ' />
              <p className='font-OpenSans font-[400] text-[12px] leading-[20px] text-black-cool text-center pb-6' >
                {translate("Modals.Auth.Login.LoginStep.DontHaveAccount")} <span onClick={() => {
                  SignUpEvent(true);
                  LoginEvent(false);
                }} className='text-brand-main font-semibold cursor-pointer' >{translate("Modals.Auth.Login.LoginStep.DontHaveAccountLink")}</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default Index