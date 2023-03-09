import React from 'react'
import Dialog from '@mui/material/Dialog';
import * as Icons from "../../SVG/Icons"
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from 'components/shared/Dropdown/Dropdown';
import CountryCodeDropdown from 'components/shared/Dropdown/CountryCodeDropdown';
import 'react-phone-input-2/lib/style.css'
import { useTranslation } from 'hooks/useTranslation';
import { countries } from "../../constants/data/countries/index"


interface Props {
  SignUpState: boolean;
  SignUpEvent: (e: boolean) => void;
  LoginState: boolean;
  LoginEvent: (e: boolean) => void
}

function Index({ SignUpState, SignUpEvent, LoginState, LoginEvent }: Props) {
  const [CountryCode, setCountryCode] = React.useState<boolean>(false);
  const translate = useTranslation();
  const [Inputs, setInputs] = React.useState({
    FullName: "",
    Email: "",
    Password: "",
    CPassword: "",
    Company: "",
    KBIS: "",
    PhoneNumber: "",
    CountryCode: ""
  });
  const InputChange = (evt: any) => {
    const value = evt.target.value;
    setInputs({
      ...Inputs,
      [evt.target.name]: value,
    });
  };
  const [PyasDropDown, SetPyasDropDown] = React.useState<boolean>(false)
  const [PyasValue, SetPyasValue] = React.useState<string | null>(null)
  const [carrier_typeDropDown, Setcarrier_typeDropDown] = React.useState<boolean>(false)
  const [carrier_typeValue, Setcarrier_typeValue] = React.useState<string | null>(null)



  const [MainTab, SetMainTab] = React.useState<boolean>(true)
  const [RegisterType, SetRegisterType] = React.useState<string | null>(null)
  const [SubTab, SetSubTab] = React.useState<boolean>(false)
  const [Verify, SetVerify] = React.useState<boolean>(false)
  const [CarrierFinalTab, SetCarrierFinalTab] = React.useState<boolean>(false)



  const VerifyEvent = (e: any) => {
    e.preventDefault();
    SetVerify(true);
    SetSubTab(false);
  }

  const GoBack = () => {
    if (!MainTab && SubTab && !CarrierFinalTab) {
      SetMainTab(true)
      SetSubTab(false)
    }
    if (!MainTab && !SubTab && Verify && !CarrierFinalTab) {
      SetSubTab(true);
      SetVerify(false);
    }
    if (!MainTab && !SubTab && !Verify && CarrierFinalTab) {
      SetCarrierFinalTab(false)
      SetVerify(true)
    }
  }

  const GoToFinal = () => {
    if (RegisterType === "client") { SignUpEvent(false) }
    else {
      SetVerify(false);
      SetCarrierFinalTab(true)
    }
  }

  const PaysDropdownItem = [
    {
      Name: "Pyas",
      Value: "pyas"
    }
  ]
  const carrier_typeDropdownItem = [
    {
      Name: "Type de",
      Value: "Type de"
    }
  ]

  const SignUp = (e: any) => {
    e.preventDefault();
    SignUpEvent(false);
    // Your api here...

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
      open={SignUpState}>
      <div className={`md:w-[465px] w-full min-h-[600px]`} >
        {/* Title and cross bar */}
        <div className={`w-full h-[78px] px-6 flex ${!MainTab ? "justify-between" : "justify-end"} items-center`} >
          {
            !MainTab && <button onClick={GoBack} >
              <Icons.ArrowBack ClassName='w-[25.2px] h-[19.6px]' fill='#1A1A1A' />
            </button>
          }
          <button onClick={() => SignUpEvent(false)} className='w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
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
            {translate("Modals.Auth.Login.LoginStep.DontHaveAccountLink")}
          </h2>
          {/* Toggle-able content */}
          {
            MainTab && <div className='w-full flex justify-center item-center flex-col px-8' >
              <h3 className='font-NunitoSans font-[600] text-brand-secondary text-[20px] leading-[32px] tracking-[-0.04em] text-center' >
                {translate("Modals.Auth.Login.UserTypeStep.Title")}
              </h3>
              <p className='font-OpenSans font-[400] text-black-main text-[14px] leading-[24px] text-center' >
                {translate("Modals.Auth.Login.UserTypeStep.Paragraph")}
              </p>
              <div className='w-full flex justify-center items-center flex-col gap-3 mt-8' >
                <button onClick={() => {
                  SetSubTab(true)
                  SetMainTab(false)
                  SetRegisterType("client")
                }} className={`w-full h-[48px] rounded-[38px] hover:bg-brand-mainCool border-[1px] hover:border-brand-main flex justify-center items-center font-OpenSans font-semibold text-[#15181E] text-[14px] leading-[24px] text-center tracking-[-0.008em] ${RegisterType === "client" ? "border-brand-main bg-brand-mainCool" : "border-[#E0E4EB]"} `} >
                  {translate("Modals.Auth.Login.UserTypeStep.UserType.Client")}
                </button>
                <button onClick={() => {
                  SetSubTab(true)
                  SetMainTab(false)
                  SetRegisterType("carrier")
                }} className={`w-full h-[48px] rounded-[38px] hover:bg-brand-mainCool border-[1px] hover:border-brand-main flex justify-center items-center font-OpenSans font-semibold text-[#15181E] text-[14px] leading-[24px] text-center tracking-[-0.008em] ${RegisterType === "carrier" ? "border-brand-main bg-brand-mainCool" : "border-[#E0E4EB]"}`} >
                  {translate("Modals.Auth.Login.UserTypeStep.UserType.Company")}
                </button>
              </div>
            </div>
          }
          {
            SubTab &&
            <div className='w-full flex justify-center item-center flex-col gap-4 md:px-8 px-4' >
              <button className='w-full md:h-[68px] h-[46px] font-NunitoSans font-[600] gap-4 text-brand-secondary md:text-[20px] leading-[32px] tracking-[-0.01em] bg-transparent border-[1px] border-[#E6E6E6] rounded-[8px] px-4 flex justify-start items-center' >
                <Icons.Google ClassName='md:w-[48px] w-[32px] md:h-[48px] h-[32px]' />
                {translate("Modals.Auth.Login.LoginStep.LoginWithGoogle")}
              </button>
              <button className='w-full md:h-[68px] h-[46px] font-NunitoSans font-[600] gap-4 text-brand-secondary md:text-[20px] leading-[32px] tracking-[-0.01em] bg-transparent border-[1px] border-[#E6E6E6] rounded-[8px] px-4 flex justify-start items-center' >
                <Icons.Facebook ClassName='md:w-[48px] w-[32px] md:h-[48px] h-[32px]' />
                {translate("Modals.Auth.Login.LoginStep.LoginWithFacebook")}
              </button>
              {/* Inputs */}
              <form onSubmit={VerifyEvent} className='w-full flex justify-center item-center flex-col gap-3 mt-2' >
                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6 flex justify-center items-center]' >
                  <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                    <Icons.Mail ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />
                  </div>
                  <div className='md:w-[90%] w-[85%] h-full' >
                    <input required autoComplete='off' name='Email' value={Inputs.Email} onChange={InputChange} type="email" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3]' placeholder={translate("Modals.Auth.Register.EmailStep.InputEmailPlaceholder")} />
                  </div>
                </div>
                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6 flex justify-center items-center]' >
                  <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                    <Icons.HiddenPassword ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />
                  </div>
                  <div className='md:w-[90%] w-[85%] h-full' >
                    <input required autoComplete='off' name='Password' value={Inputs.Password} onChange={InputChange} type="password" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3]' placeholder={translate("Modals.Auth.Register.EmailStep.InputPassPlaceholder")} />
                  </div>
                </div>
                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6 flex justify-center items-center]' >
                  <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                    <Icons.HiddenPassword ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />
                  </div>
                  <div className='md:w-[90%] w-[85%] h-full' >
                    <input required autoComplete='off' name='CPassword' value={Inputs.CPassword} onChange={InputChange} type="password" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3]' placeholder={translate("Modals.Auth.Register.EmailStep.InputConfirmPassPlaceholder")} />
                  </div>
                </div>
                {/* Button */}
                <button type='submit' className='w-full h-[48px] rounded-[8px] bg-brand-main flex justify-center items-center font-NunitoSans font-[600] text-[16px] leading-[24px] text-white-main mt-2'>
                  {translate("Buttons.SignUp")}
                </button>
                <p className='font-NunitoSans font-[400] text-[12px] leading-[20px] text-[#7A7A7A] py-6 text-center m-auto md:max-w-[296px]' >
                  {translate("Modals.Auth.Login.LoginStep.TermsAndConditions")} <Link onClick={() => SignUpEvent(false)} href={""} className="text-brand-main" >{translate("Modals.Auth.Login.LoginStep.TermsAndConditionsLink")}</Link>
                </p>
                <div className='w-full h-[1px] bg-[#E6E6E6] ' />
                <p className='font-OpenSans font-[400] text-[12px] leading-[20px] text-black-cool text-center pb-6' >
                  {translate("Modals.Auth.Register.EmailStep.AlreadyHaveAccount")} <span onClick={() => {
                    SignUpEvent(false);
                    LoginEvent(true);
                  }} className='text-brand-main font-semibold cursor-pointer' >{translate("Modals.Auth.Register.EmailStep.AlreadyHaveAccountLink")}</span>
                </p>
              </form>
            </div>
          }
          {
            Verify &&
            <div className='w-full flex justify-center item-center flex-col px-8' >
              <h3 className='font-NunitoSans font-[600] text-brand-secondary text-[20px] leading-[32px] tracking-[-0.04em] text-center' >
                {translate("Modals.Auth.Register.ClientInfoStep.Title")}
              </h3>
              <p className='font-OpenSans font-[400] text-black-main text-[14px] leading-[24px] text-center' >
                {translate("Modals.Auth.Register.ClientInfoStep.Paragraph")}
              </p>
              <div className='w-full flex justify-center item-center flex-col gap-3 mt-8' >
                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6] flex justify-center items-center]' >
                  <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                    <Icons.UserHollow ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />
                  </div>
                  <div className='md:w-[90%] w-[85%] h-full' >
                    <input required autoComplete='off' name='FullName' value={Inputs.FullName} onChange={InputChange} type="text" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3]' placeholder='Nom et prénom' />
                  </div>
                </div>
                {/* dropdown */}
                <Dropdown State={PyasDropDown} Event={SetPyasDropDown} GetValueEvent={SetPyasValue} Placeholder={translate("Modals.Auth.Register.ClientInfoStep.SelectContryPlaceHolder")} Item={PaysDropdownItem} />
                <div className='w-full h-[48px] rounded-[8px] border-[1px] border-[#E6E6E6] ] flex justify-center items-center' >
                  {/* Country code dropDown */}
                  <div className='w-[25%] h-full' >
                    <CountryCodeDropdown Styles="w-full h-full z-100 rounded-r-[8px]" Item={countries} Placeholder="Code" State={CountryCode} Event={setCountryCode} GetValueEvent={(value: string) => {
                      setInputs({
                        ...Inputs,
                        CountryCode: value
                      })
                    }} />
                  </div>
                  <input required autoComplete='off' name='PhoneNumber' value={Inputs.PhoneNumber} onChange={InputChange} type="number" className='w-[75%] h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3]' placeholder='Nom et prénom' />
                </div>
                {/* <PhoneInput
                  country={'us'}
                  value={Phone}
                  onChange={SetPhone}
                /> */}
                <button onClick={GoToFinal} className='w-full h-[48px] rounded-[8px] bg-brand-main flex justify-center items-center font-NunitoSans font-[600] text-[16px] leading-[24px] text-white-main mt-2'>
                  {translate("Buttons.Next")}
                </button>
              </div>
            </div>
          }
          {
            CarrierFinalTab && <div className='w-full flex justify-center item-center flex-col px-8' >
              <h3 className='font-NunitoSans font-[600] text-brand-secondary text-[20px] leading-[32px] tracking-[-0.04em] text-center' >
                {translate("Modals.Auth.Register.CompanyInfoStep.Title")}
              </h3>
              <p className='font-OpenSans font-[400] text-black-main text-[14px] leading-[24px] text-center' >
                {translate("Modals.Auth.Register.CompanyInfoStep.Paragraph")}
              </p>
              <form onSubmit={SignUp} className='w-full flex justify-center item-center flex-col gap-3 mt-8' >
                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6] flex justify-center items-center]' >
                  <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                    <Icons.Company ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />
                  </div>
                  <div className='md:w-[90%] w-[85%] h-full' >
                    <input required autoComplete='off' name='Company' value={Inputs.Company} onChange={InputChange} type="text" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3]' placeholder={translate("Modals.Auth.Register.CompanyInfoStep.CompanyNamePlaceholder")} />
                  </div>
                </div>
                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6] flex justify-center items-center]' >
                  <input required autoComplete='off' name='KBIS' value={Inputs.KBIS} onChange={InputChange} type="text" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#1A1A1A] placeholder:text-[#B3B3B3] px-4' placeholder={translate("Modals.Auth.Register.CompanyInfoStep.CompanyCodePlaceholder")} />
                </div>
                <Dropdown State={carrier_typeDropDown} Event={Setcarrier_typeDropDown} GetValueEvent={Setcarrier_typeValue} Placeholder={translate("Modals.Auth.Register.CompanyInfoStep.SelectClientTypePLaceHolder")} Item={carrier_typeDropdownItem} />
                {/* Button */}
                <button type='submit' className='w-full h-[48px] rounded-[8px] bg-brand-main flex justify-center items-center font-NunitoSans font-[600] text-[16px] leading-[24px] text-white-main mt-2'>
                  {translate("Buttons.Complete")}
                </button>
              </form>
            </div>
          }
        </div>
      </div>
    </Dialog>
  )
}

export default Index