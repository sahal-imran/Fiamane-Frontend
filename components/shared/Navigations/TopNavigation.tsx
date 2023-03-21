import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Data from "../../../constants/JSON/Data"
import ContainedCircle from '../Buttons/ContainedCircle';
import * as Icons from "../../../SVG/Icons"
import { Divide as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router';
import SignUp from "../../../layouts/pages/SignUp"
import Login from "../../../layouts/pages/Login"
import ForgetPassword from '../../../layouts/pages/ForgetPassword';
import { useTranslation } from 'hooks/useTranslation';
import Avatar from '@mui/material/Avatar';
import { useAuth } from "hooks/useAuth"
import Bedge from '../Bedge/Bedge';

import Drawer from 'react-modern-drawer'
//import styles 👇
import 'react-modern-drawer/dist/index.css'


function TopNavigation() {
    const { isAuthenticated, setIsAuthenticated } = useAuth()
    const translate = useTranslation();
    const Router = useRouter();
    const [UserMenu, setUserMenu] = useState<boolean>(false)

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
        setUserMenu(false);
    });


    // Hamburger 
    const [isOpen, setOpen] = useState(false)
    const toggleDrawer = () => {
        setOpen((prevState) => !prevState)
    }

    const [Is_SiteMenu, setMainMenu] = React.useState(true)

    const [Is_SignUpDialogueBox, Set_SignUpDialogueBox] = React.useState(false)
    const [Is_LoginDialogueBox, Set_LoginDialogueBox] = React.useState(false)
    const [Is_ForgetPasswordBox, Set_ForgetPasswordBox] = React.useState(false)


    return (
        <React.Fragment>
            <div className={`w-full md:h-[100px] h-[70px] bg-white-main`} style={{ boxShadow: "0px 1px 16px -2px rgba(0, 0, 0, 0.08)" }} >
                <div className='w-full m-auto h-full lg:px-24 md:8 px-4 flex justify-between items-center' >
                    {/* Logo and Nav items */}
                    <div className='flex justify-center items-center gap-8' >
                        <Link href={"/"} className='w-[109px] h-[42px] relative' >
                            <Image src={"/logo.svg"} alt="" fill className='object-contain' />
                        </Link>

                        {/* Item */}
                        <div className='md:flex hidden justify-center items-center gap-6' >
                            {
                                Data.TopNavigation.NavItems.map((item: any, index: number) => {
                                    return <Link key={index} href={item.Route} className="font-NunitoSans font-semibold text-brand-secondary text-[14px] leading-[20px]" >
                                        {translate(item.Name)}
                                    </Link>
                                })
                            }
                        </div>
                    </div>

                    {/* User Icon and Language dropdown */}
                    {
                        !isAuthenticated && <div className='md:flex hidden justify-center items-center gap-6' >
                            <ContainedCircle Icon={<Icons.Location ClassName='w-[12.8px] h-[15.96px]' fill='white' />} Text={translate("Navbar.Links.TrackAnItem")} />
                            {/* Language dropdown */}
                            <div className='inline-block relative language-dropdown' >
                                <button onMouseOver={() => setUserMenu(false)} className='w-[76px] h-[40px] border-[1px] border-[#E6E6E6] rounded-[8px] rounded-bl-[0px] p-2 flex justify-between items-center' >
                                    <Image src={"/flags/France.svg"} alt="" width={34} height={26} className='object-contain' />
                                    <Icons.ArrowDown ClassName='w-[10px] h-[10px]' fill='none' stroke='#1A1A1A' />
                                </button>
                                <div className='absolute z-50 bg-white-main opacity-0 pointer-events-none top-[100%] left-0 rounded-bl-[8px] rounded-br-[8px] w-[65%] min-h-[162px] p-2 dropDown' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
                                    {
                                        [1, 3, 4, 5, 6].map((item: number, index: number) => {
                                            return <button key={index} >
                                                <Image src={"/flags/France.svg"} alt="" width={34} height={26} className='object-contain' />
                                            </button>
                                        })
                                    }
                                </div>
                            </div>
                            {/* User Menu */}
                            <div className='relative inline-block User z-50' >
                                <button onClick={() => setUserMenu(true)} className="flex justify-center items-center" ><Icons.User ClassName='w-[40px] h-[40px]' fill='none' stroke='#FF8501' /></button>
                                {
                                    UserMenu && <div ref={domNode} className={`flex p-3 justify-center items-center flex-col bg-white-main Menu`} >
                                        <div onClick={() => {
                                            Set_LoginDialogueBox(true)
                                            setUserMenu(false)
                                        }} >
                                            <ContainedCircle Text={translate("Navbar.LoginAvatar.LoginText")} />
                                        </div>
                                        <div className='flex justify-center items-center mt-2 gap-2' >
                                            <p className='font-OpenSans font-normal text-brand-secondary text-[12px] leading-[20px] whitespace-nowrap' >{translate("Navbar.LoginAvatar.NewAccountText")}</p>
                                            <button onClick={() => {
                                                Set_SignUpDialogueBox(true)
                                                setUserMenu(false)
                                            }} className='font-Roboto font-semibold text-brand-main text-[12px] leading-[20px] whitespace-nowrap' >{translate("Navbar.LoginAvatar.MarkedText")}</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    {
                        isAuthenticated &&
                        <div className='md:flex hidden justify-center items-center gap-6' >
                            <Bedge Content='4' >
                                <button>
                                    <Icons.Bag ClassName='w-[24px] h-[21.6px]' fill='#240046' />
                                </button>
                            </Bedge>
                            <Bedge Content='1' >
                                <button>
                                    <Icons.Bell ClassName='w-[24px] h-[21.6px]' fill='#240046' />
                                </button>
                            </Bedge>
                            <Avatar sx={{ bgcolor: "#E0E4EB", fontFamily: "Inter", width: "40px", height: "40px", color: "#15181E", fontSize: "14px", lineHeight: "22px", letterSpacing: "-0.012em", fontWeight: 600, }}>AM</Avatar>
                            {/* Language dropdown */}
                            <div className='inline-block relative language-dropdown' >
                                <button onMouseOver={() => setUserMenu(false)} className='w-[76px] h-[40px] border-[1px] border-[#E6E6E6] rounded-[8px] rounded-bl-[0px] p-2 flex justify-between items-center' >
                                    <Image src={"/flags/France.svg"} alt="" width={34} height={26} className='object-contain' />
                                    <Icons.ArrowDown ClassName='w-[10px] h-[10px]' fill='none' stroke='#1A1A1A' />
                                </button>
                                <div className='absolute bg-white-main opacity-0 pointer-events-none top-[100%] left-0 rounded-bl-[8px] rounded-br-[8px] w-[65%] min-h-[162px] p-2 dropDown z-50' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
                                    {
                                        [1, 3, 4, 5, 6].map((item: number, index: number) => {
                                            return <button key={index} >
                                                <Image src={"/flags/France.svg"} alt="" width={34} height={26} className='object-contain' />
                                            </button>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    }

                    {/* Hamburger */}
                    <div className='md:hidden flex justify-center items-center gap-2' >
                        {/* Language dropdown */}
                        <div className='inline-block relative language-dropdown' >
                            <button onMouseOver={() => setUserMenu(false)} className='w-[60px] h-[30px] border-[1px] border-[#E6E6E6] rounded-[8px] rounded-bl-[0px] p-2 flex justify-between items-center' >
                                <Image src={"/flags/France.svg"} alt="" width={28} height={20} className='object-contain' />
                                <Icons.ArrowDown ClassName='md:w-[10px] w-[8px] md:h-[10px] h-[8px]' fill='none' stroke='#1A1A1A' />
                            </button>
                            <div className='absolute z-50 bg-white-main opacity-0 pointer-events-none top-[100%] left-0 rounded-bl-[8px] rounded-br-[8px] w-[65%] min-h-[162px] p-2 dropDown' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
                                {
                                    [1, 3, 4, 5, 6, 6].map((item: number, index: number) => {
                                        return <button key={index} >
                                            <Image src={"/flags/France.svg"} alt="" width={34} height={26} className='object-contain' />
                                        </button>
                                    })
                                }
                            </div>
                        </div>
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
            </div>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                style={{ width: "75%" }}
            >
                <div className='w-full h-full bg-[#E3E1F2]/20 overflow-auto' >
                    {/* Auth bar */}
                    {
                        !isAuthenticated &&
                        <div className='w-full px-4 py-3 flex justify-start items-center gap-3' >
                            {/* Language dropdown */}
                            <div className='inline-block relative language-dropdown' >
                                <button onMouseOver={() => setUserMenu(false)} className='w-[76px] h-[40px] border-[1px] border-[#E6E6E6] rounded-[8px] rounded-bl-[0px] p-2 flex justify-between items-center' >
                                    <Image src={"/flags/France.svg"} alt="" width={34} height={26} className='object-contain' />
                                    <Icons.ArrowDown ClassName='w-[10px] h-[10px]' fill='none' stroke='#1A1A1A' />
                                </button>
                                <div className='absolute bg-white-main opacity-0 pointer-events-none top-[100%] left-0 rounded-bl-[8px] rounded-br-[8px] w-[65%] min-h-[162px] p-2 dropDown' style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} >
                                    {
                                        [1, 3, 4, 5, 6].map((item: number, index: number) => {
                                            return <button key={index} >
                                                <Image src={"/flags/France.svg"} alt="" width={34} height={26} className='object-contain' />
                                            </button>
                                        })
                                    }
                                </div>
                            </div>
                            {/* User Menu */}
                            <div ref={domNode} className='relative inline-block User z-50' >
                                <button onClick={() => setUserMenu(true)} className="flex justify-center items-center" ><Icons.User ClassName='w-[40px] h-[40px]' fill='none' stroke='#FF8501' /></button>
                                {
                                    UserMenu && <div className={`flex p-3 justify-center items-center flex-col bg-white-main Menu`} >
                                        <ContainedCircle Text="Connexion" />
                                        <div className='flex justify-center items-center mt-2 gap-2' >
                                            <p className='font-OpenSans font-normal text-brand-secondary text-[12px] leading-[20px] whitespace-nowrap' >Nouveau client ?</p>
                                            <button className='font-Roboto font-semibold text-brand-main text-[12px] leading-[20px] whitespace-nowrap' >Inscrivez-vous</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    {
                        isAuthenticated &&
                        <div className='w-full px-4 py-3 flex justify-start items-center gap-6' >
                            <Avatar sx={{ bgcolor: "#E0E4EB", fontFamily: "Inter", width: "51px", height: "51px", color: "#15181E", fontSize: "20px", lineHeight: "22px", letterSpacing: "-0.012em", fontWeight: 600, }}>AM</Avatar>
                            <Bedge Content='4' >
                                <button>
                                    <Icons.Bag ClassName='w-[24px] h-[21.6px]' fill='#240046' />
                                </button>
                            </Bedge>
                            <Bedge Content='1' >
                                <button>
                                    <Icons.Bell ClassName='w-[21.6px] h-[21.15px]' fill='#240046' />
                                </button>
                            </Bedge>
                        </div>
                    }

                    {/* Client navigation */}
                    <div className='w-full bg-white-main px-4 py-6 border-t-[1px] border-b-2 border-white-cool' >
                        {
                            Data.TopNavigation.NavItemPhone.map((item: any, index: number) => {
                                return <Link key={index} href={item.Route} className="w-full py-2 whitespace-nowrap flex justify-start items-center gap-3 font-OpenSans font-semibold text-[14px] leading-[20px] text-brand-secondary" >
                                    {item.Icon}
                                    {item.Name}
                                </Link>
                            })
                        }

                    </div>

                    {/* Dashboard navigation */}
                    <div className='w-full p-4 flex justify-between items-center border-b-[1px] border-b-grey-cool' >
                        <h4 className='font-OpenSans font-bold text-[14px] leading-[20px] text-grey-off' >Mon espace perso</h4>
                        <Icons.MyAccount ClassName="w-[20px] h-[20px]" fill='#3D4852' />
                    </div>
                    <div className='w-full px-4 py-4' >
                        {
                            Data.LeftNavigation.NavItemPhone.map((item: any, index: number) => {
                                return <Link key={index} href={item.Route} className="w-full py-2 whitespace-nowrap flex justify-start items-center gap-3 font-OpenSans font-semibold text-[14px] leading-[20px] text-brand-secondary" >
                                    {item.Icon}
                                    {item.Name}
                                </Link>
                            })
                        }

                    </div>
                </div>
            </Drawer>

            {/* Sign Up Dialogue */}
            <SignUp SignUpState={Is_SignUpDialogueBox} SignUpEvent={Set_SignUpDialogueBox} LoginState={Is_LoginDialogueBox} LoginEvent={Set_LoginDialogueBox} />
            {/* Login Dialogue */}
            <Login LoginState={Is_LoginDialogueBox} LoginEvent={Set_LoginDialogueBox} SignUpEvent={Set_SignUpDialogueBox} ForgetPasswordEvent={Set_ForgetPasswordBox} />
            {/* ForgetPassword tab */}
            <ForgetPassword ForgetPasswordState={Is_ForgetPasswordBox} ForgetPasswordEvent={Set_ForgetPasswordBox} />
        </React.Fragment>
    )
}

export default TopNavigation