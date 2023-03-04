import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import * as Icons from "../../SVG/Icons"
import Image from 'next/image';
import ConfirmationWrapper from 'components/shared/Dialogue/ConfirmationWrapper';
import { useTranslation } from 'hooks/useTranslation';

interface Props {
    ForgetPasswordState: boolean;
    ForgetPasswordEvent: (e: boolean) => void;
}

const ForgetPassword: React.FC<Props> = ({ ForgetPasswordEvent, ForgetPasswordState }: Props) => {
    const translate = useTranslation();
    const [Inputs, setInputs] = React.useState({
        EmailCode: "",
        Password: "",
        CPassword: ""
    });
    const InputChange = (evt: any) => {
        const value = evt.target.value;
        setInputs({
            ...Inputs,
            [evt.target.name]: value,
        });
    };
    const [IsEmailVerified, setIsEmailVerified] = useState<boolean>(false);
    const VerifyEmail = (e: any) => {
        e.preventDefault();
        setIsEmailVerified(true);
    }
    // Password Hide and show state
    const [IsPasswordVisible, setPasswordVisibility] = useState({
        Password: false,
        CPassword: false
    })
    // Confirmation fot password reset
    const [IsConfirmation, setPasswordConfirmation] = useState<boolean>(false);


    const ForgetPassword = (e: any) => {
        e.preventDefault();
        // your Api here.....
        ForgetPasswordEvent(false)
        setPasswordConfirmation(true)
    }

    return (
        <React.Fragment>
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
                open={ForgetPasswordState}>
                <div className={`w-[465px] min-h-[600px] `} >
                    {/* Title and cross bar */}
                    <div className='w-full h-[78px] px-6 flex justify-end items-center' >
                        <button onClick={() => ForgetPasswordEvent(false)} className='w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                            <Icons.Close ClassName='w-[16.8px] h-[16.8px]' fill='#1A1A1A' />
                        </button>
                    </div>
                    {/* logo */}
                    <div className='w-[155px] m-auto h-[60px] relative -mt-12' >
                        <Image src={"/logo.svg"} alt="" fill className='object-cover' />
                    </div>
                    {/* Confirm Email address first */}
                    {
                        !IsEmailVerified &&
                        <div className='w-full flex justify-center item-center flex-col px-8 mt-6' >
                            <h3 className='font-NunitoSans font-[600] text-brand-secondary text-[20px] leading-[32px] tracking-[-0.04em] text-center' >
                                {translate("Modals.Auth.ForgotPassword.Title")}
                            </h3>
                            <p className='font-OpenSans font-[400] text-black-main text-[14px] leading-[24px] text-center' >
                            {translate("Modals.Auth.ForgotPassword.Paragraph")}
                            </p>
                            <form onSubmit={VerifyEmail} className='w-full flex justify-center item-center flex-col gap-3 mt-8' >
                                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6 flex justify-center items-center]' >
                                    <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                                        <Icons.Mail ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />
                                    </div>
                                    <div className='md:w-[90%] w-[85%] h-full' >
                                        <input required autoComplete='off' name='EmailCode' value={Inputs.EmailCode} onChange={InputChange} type="text" className='w-full h-full bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#B3B3B3] placeholder:text-[#B3B3B3]' placeholder= {translate("Modals.Auth.ForgotPassword.InputEmailPlaceholder")} />
                                    </div>
                                </div>
                                {/* Button */}
                                <button type='submit' className='w-full h-[48px] rounded-[8px] bg-brand-main flex justify-center items-center font-NunitoSans font-[600] text-[16px] leading-[24px] text-white-main mt-2'>
                                    {`Réinstaller`}
                                </button>
                            </form>
                        </div>
                    }
                    {/* When Email will be confirmed this pop up will show up */}
                    {
                        IsEmailVerified &&
                        <div className='w-full flex justify-center item-start flex-col md:px-8 px-4 mt-6' >
                            <h3 className='font-NunitoSans font-[600] text-brand-secondary text-[20px] leading-[32px] tracking-[-0.04em] text-start' >
                                {`Choisissez un nouveau mot de passe`}
                            </h3>
                            <p className='font-OpenSans font-[400] text-black-main text-[14px] leading-[24px] text-start' >
                                {`Assurez‑vous que votre mot de passe contient huit caractères ou plus. Pour disposer d'un mot de passe fort, essayez d'inclure des chiffres, des lettres et des signes de ponctuation.`}
                                <br /><br />
                                {`Vous serez déconnecté de toutes vos sessions Twitter actives après la modification de votre mot de passe.`}
                            </p>
                            <form onSubmit={ForgetPassword} className='w-full flex justify-center item-center gap-3 flex-col mt-8' >
                                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6 flex justify-center items-center]' >
                                    <div className='md:w-[90%] w-[85%] h-full' >
                                        <input required autoComplete='off' name='Password' value={Inputs.Password} onChange={InputChange} type={IsPasswordVisible.Password ? "text" : "password"} className='w-full h-full pl-3 bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#B3B3B3] placeholder:text-[#B3B3B3]' placeholder='Entrez un nouveau mot de passe.' />
                                    </div>
                                    <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                                        <div className='cursor-pointer' onClick={() => {
                                            setPasswordVisibility({
                                                Password: !IsPasswordVisible.Password,
                                                CPassword: false
                                            })
                                        }} >
                                            {IsPasswordVisible.Password ? <Icons.HidePassword ClassName='w-[18px] h-[18px]' fill='#1A1A1A' /> : <Icons.ShowPassword ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-[48px] rounded-[8px] overflow-hidden border-[1px] border-[#E6E6E6 flex justify-center items-center]' >
                                    <div className='md:w-[90%] w-[85%] h-full' >
                                        <input required autoComplete='off' name='CPassword' value={Inputs.CPassword} onChange={InputChange} type={IsPasswordVisible.CPassword ? "text" : "password"} className='w-full h-full pl-3 bg-transparent font-OpenSans font-normal text-[14px] leading-[24px] outline-none text-[#B3B3B3] placeholder:text-[#B3B3B3]' placeholder='Confirmez votre nouveau mot de passe.' />
                                    </div>
                                    <div className='md:w-[10%] w-[15%] h-full flex justify-center items-center' >
                                        <div className='cursor-pointer' onClick={() => {
                                            setPasswordVisibility({
                                                Password: false,
                                                CPassword: !IsPasswordVisible.CPassword
                                            })
                                        }} >
                                            {IsPasswordVisible.CPassword ? <Icons.HidePassword ClassName='w-[18px] h-[18px]' fill='#1A1A1A' /> : <Icons.ShowPassword ClassName='w-[18px] h-[18px]' fill='#1A1A1A' />}
                                        </div>
                                    </div>
                                </div>
                                {/* Button */}
                                <button type='submit' className='w-full h-[48px] rounded-[8px] bg-brand-main flex justify-center items-center font-NunitoSans font-[600] text-[16px] leading-[24px] text-white-main mt-2'>
                                    {`Réinstaller`}
                                </button>
                            </form>
                        </div>
                    }
                </div>
            </Dialog>

            {/* This will call when password will be successfully changed => you just need to update state "setPasswordConfirmation(true)" if success*/}
            {/* There is a option prop Duration if you will send this props the pop up will close after that duration i,e. Duration={5000} */}
            <ConfirmationWrapper State={IsConfirmation} Event={setPasswordConfirmation} Duration={5000}>
                <div className="w-full h-full flex justify-center items-center flex-col" >
                    <div className='w-full h-[191.82px] relative' >
                        <Image src={"/Assets/Confirmation.png"} alt="" fill className='object-cover' />
                    </div>
                    <p className="font-NunitoSans font-[600] text-[20px] leading-[32px] text-brand-secondary tracking-[-0.01em] text-center mt-4" >
                        {`Votre mot de passe à été changé avec succès !`}
                    </p>
                </div>
            </ConfirmationWrapper>
        </React.Fragment>
    )
}

export default ForgetPassword