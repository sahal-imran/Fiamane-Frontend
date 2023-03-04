import React, { useState } from "react";
import * as Icons from "../../../SVG/Icons";
import DialogueWrapper from "components/shared/Dialogue/DialogueWrapper";

const Index: React.FC = () => {
    const [isComplete, setIsComplete] = useState<boolean>(true);
    const [isFormula, setFormula] = useState<boolean>(false);
    const [Inputs, setInputs] = useState({
        Email: "afafmatg1@gmail.com",
        NewEmail: "afafmatg1@gmail.com",
        ConfirmEmail: "",
        NewPassword: "°°°°°°°°°°°°°°",
        CurrentPassword: "°°°°°°°°°°°°°°",
        ConfirmPassword: "",
    });
    const InputChange = (evt: any) => {
        const value = evt.target.value;
        setInputs({
            ...Inputs,
            [evt.target.name]: value,
        });
    };
    // Complete profile state
    const [EditEmail, setEditEmail] = useState<boolean>(false);
    const [EditPassword, setEditPassword] = useState<boolean>(false);
    return (
        <React.Fragment>
            <div className=" w-full h-full bg-white-off p-8">
                <div className="w-full h-full lg:grid lg:grid-cols-12 lg:gap-12">
                    <div className=" h-full w-full lg:flex hidden flex-col gap-4 lg:col-span-3 ">
                        {/* Heading here */}
                        <p className="font-NunitoSans text-black-main text-[34px] font-[600] leading-[54px]">
                            Parameters
                        </p>

                        {/* Buttons here */}
                        <div className=" w-full lg:flex flex-col hidden bg-white-main rounded-[8px] ">
                            {/* first button */}

                            <button
                                onClick={() => setIsComplete(true)}
                                className={` w-full flex items-center justify-between font-OpenSans text-[16px] p-[10px] ${isComplete ? "font-[600]" : "font-[400]"
                                    }  `}
                            >
                                <p> Compte</p>
                                <div
                                    className={`${isComplete ? "flex justify-center items-center" : "hidden"
                                        } `}
                                >
                                    <Icons.ArrowRight fill="none" stroke="#240046" ClassName="" />
                                </div>
                            </button>

                            {/* second button */}

                            <button
                                onClick={() => {
                                    setIsComplete(false);
                                    setFormula(true);
                                }}
                                className={`w-full flex justify-between items-center font-OpenSans text-[16px] p-[10px] ${isComplete ? "font-[400]" : "font-[600]"
                                    } `}
                            >
                                <p>Mes abonnements</p>

                                <div
                                    className={`${isComplete ? "hidden" : "flex justify-center items-center"
                                        } `}
                                >
                                    <Icons.ArrowRight fill="none" stroke="#240046" ClassName="" />
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* Buttons for phone */}
                    <div className="w-full h-[40px] flex justify-center items-center lg:hidden bg-white-main rounded-[8px] p-1 md:mt-0">
                        <button
                            onClick={() => setIsComplete(true)}
                            className={` w-full h-full flex  items-center justify-center font-OpenSans whitespace-nowrap text-[16px] p-[10px] rounded-[8px] ${isComplete ? " bg-white-off" : " bg-white-main"
                                }  `}
                        >
                            <p> Compte</p>
                        </button>
                        <button
                            onClick={() => {
                                setIsComplete(false);
                                setFormula(true);
                            }}
                            className={`w-full h-full flex justify-center items-center font-OpenSans whitespace-nowrap text-[16px] p-[10px] rounded-[8px] ${isComplete ? " bg-white-main" : " bg-white-off"
                                } `}
                        >
                            <p>Mes abonnements</p>
                        </button>
                    </div>
                    {/* Right div here */}
                    <div className="lg:h-full w-full md:h-auto md:min-h-[unset] min-h-[calc(100vh-110px)] lg:col-span-9 lg:mt-0 mt-6">
                        {isComplete ? (
                            // Complete div here

                            <div className=" w-full  flex flex-col  gap-4">
                                <p className="font-NunitoSans text-black-main text-[34px] font-[600] leading-[54px]">
                                    Compte
                                </p>

                                <div className="flex flex-col w-full h-full gap-4 bg-white-main rounded-[8px] ">
                                    <div className="w-full border-b p-[10px]">
                                        <p className="font-OpenSans text-black-main text-[20px] leading-[32px] font-[600]">
                                            informations de connexion
                                        </p>
                                    </div>

                                    <div className="flex flex-col w-full gap-0">
                                        {/*  email here */}

                                        <div className=" w-full flex flex-col gap-2  p-[10px]">
                                            <p className="font-OpenSans text-black-main text-[16px] leading-[24px] font-[400]">
                                                Adresse e-mail
                                            </p>

                                            <div className="w-full flex justify-between items-center bg-white-off rounded-[8px]  p-[10px] ">
                                                <p className="font-OpenSans text-black-main font-[400] text-[16px] leading-[28px]">
                                                    {Inputs.NewEmail}
                                                </p>
                                                <button
                                                    onClick={() => setEditEmail(true)}
                                                    className="items-center"
                                                >
                                                    <Icons.Edit fill="" stroke="#1A1A1A" ClassName="" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* password div here */}

                                        <div className=" w-full flex flex-col gap-2  p-[10px]">
                                            <p className="font-OpenSans text-black-main text-[16px] leading-[24px] font-[400]">
                                                Mot de passe
                                            </p>

                                            <div className="w-full flex justify-between items-center bg-white-off rounded-[8px]  p-[10px] ">
                                                <p className="font-OpenSans text-black-main font-[400] text-[16px] leading-[28px]">
                                                    {Inputs.NewPassword}
                                                </p>
                                                <button
                                                    onClick={() => setEditPassword(true)}
                                                    className="items-center"
                                                >
                                                    <Icons.Edit fill="" stroke="#1A1A1A" ClassName="" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Subscription div here

                            <div className=" w-full  flex flex-col  gap-4">
                                <p className="font-NunitoSans text-black-main text-[34px] font-[600] leading-[54px]">
                                    Mes abonnements
                                </p>
                                {isFormula ? (
                                    <div className="flex flex-col w-full items-center justify-center gap-4 bg-white-main rounded-[8px] p-10 ">
                                        <div className="items-center">
                                            <Icons.DollarIcon fill="" ClassName="" stroke="" />
                                        </div>

                                        <p className=" w-full  font-OpenSans text-black-main font-[400] text-[16px]   leading-[28px] text-center ">
                                            Abonnez-vous maintenant pour profiter de tous les
                                            avantages de fiamane
                                        </p>
                                        <button
                                            onClick={() => setFormula(false)}
                                            className="items-center text-[#FF8501] font-NunitoSans font-[600] text-[14px] leading-[20px]"
                                        >
                                            Voir formule
                                        </button>
                                    </div>
                                ) : (
                                    <div className="w-full h-full bg-white-main rounded-[8px] ">
                                        {/* top div here  */}
                                        <div className="grid sm:grid-cols-4 grid-cols-3  sm:gap-x-28 gap-x-16 border-b p-[24px]">
                                            <p className="font-OpenSans text-black-main font-[400] text-[14px] whitespace-nowrap leading-[24px]">
                                                Formule
                                            </p>
                                            <p className="font-OpenSans text-black-main font-[400] text-[14px] whitespace-nowrap leading-[24px]">
                                                {`Date d'achat`}
                                            </p>
                                            <p className="font-OpenSans text-black-main font-[400] text-[14px] whitespace-nowrap leading-[24px]">
                                                Montant
                                            </p>
                                        </div>

                                        {/* second div here */}
                                        <div className="grid sm:grid-cols-4 grid-cols-3 sm:gap-x-28 gap-x-16 border-b p-[24px]">
                                            <p className="font-OpenSans text-black-main font-[400] text-[14px] whitespace-nowrap leading-[24px]">
                                                Smart
                                            </p>
                                            <p className="font-OpenSans text-black-main font-[400] text-[14px] whitespace-nowrap leading-[24px]">
                                                31/12/2022
                                            </p>
                                            <p className="font-OpenSans text-black-main font-[400] text-[14px] whitespace-nowrap leading-[24px]">
                                                99 €
                                            </p>
                                            <button className="hidden sm:flex sm:items-center ">
                                                <Icons.Download
                                                    fill=" #240046"
                                                    stroke=""
                                                    ClassName=""
                                                />
                                            </button>
                                        </div>

                                        {/* third div */}

                                        <div className="grid sm:grid-cols-4 grid-cols-3 sm:gap-x-28 gap-x-16 border-b p-[24px]">
                                            <p className="font-OpenSans text-black-main font-[400] text-[14px] leading-[24px]">
                                                Smart
                                            </p>
                                            <p className="font-OpenSans text-black-main font-[400] text-[14px] leading-[24px]">
                                                31/12/2022
                                            </p>
                                            <p className="font-OpenSans text-black-main font-[400] whitespace-nowrap text-[14px] leading-[24px]">
                                                99 €
                                            </p>
                                            <button className="hidden sm:flex sm:items-center ">
                                                <Icons.Download
                                                    fill=" #240046"
                                                    stroke=""
                                                    ClassName=""
                                                />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>



            {/* email  dialgue boxe */}
            <DialogueWrapper
                State={EditEmail}
                Event={setEditEmail}
                Title="Changer votre adresse email"
                styles=" md:w-[597px] sm:w-[500px] w-[320px] "
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setEditEmail(false);
                    }}
                >
                    <div className="w-full  ">
                        <div className=" w-full p-[20px] flex flex-col gap-y-2">
                            <div className="w-full flex gap-1 flex-col">
                                <label
                                    className="text-[16px] font-sans font-normla leading-[24px]"
                                    htmlFor="Password"
                                >
                                    Mot de passe
                                </label>
                                <div
                                    className={`flex gap-2 "h-[50px]" justify-start items-center border-[1px] border-solid border-white-cool rounded-[8px] px-2`}
                                >
                                    <input
                                        className="focus:outline-none w-full h-[50px] profilePlaceholder"
                                        type="password"
                                        id="Password"
                                        name="Password"
                                        required
                                    />
                                    {/* =====>icon */}
                                    <Icons.ShowIcon
                                        fill="#1A1A1A"
                                        stroke="#1A1A1A"
                                        ClassName=""
                                    />
                                </div>
                            </div>
                            <p className="text-brand-main text-OpenSans font-[600] text-[14px] leading-[20px]">
                                Mot de passe oublié?
                            </p>

                            <div className="w-full flex gap-1 flex-col">
                                <label
                                    className="text-[16px] font-sans font-normla leading-[24px]"
                                    htmlFor="NewEmail"
                                >
                                    Nouvel email
                                </label>
                                <div
                                    className={`flex gap-2 "h-[50px]" justify-start items-center border-[1px] border-solid border-white-cool rounded-[8px] px-2`}
                                >
                                    <input
                                        className="focus:outline-none w-full h-[50px] profilePlaceholder"
                                        type="email"
                                        id="NewEmail"
                                        name="NewEmail"
                                        onChange={InputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="w-full flex gap-1 flex-col">
                                <label
                                    className="text-[16px] font-sans font-normla leading-[24px]"
                                    htmlFor="ConfirmEmail"
                                >
                                    Confirmer le nouveau email
                                </label>
                                <div
                                    className={`flex gap-2 "h-[50px]" justify-start items-center border-[1px] border-solid border-white-cool rounded-[8px] px-2`}
                                >
                                    <input
                                        className="focus:outline-none w-full h-[50px] profilePlaceholder"
                                        type="email"
                                        id="ConfirmEmail"
                                        name="ConfirmEmail"
                                        onChange={InputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end mt-6 gap-2">
                                {/* first button */}
                                <button
                                    onClick={() => setEditEmail(false)}
                                    className={`items-center bg-white-main text-black-main border font-NunitoSans  font-[600] text-[16px] leading-[24px]  rounded-[8px] px-[16px] py-[12px]  `}
                                >
                                    Annuler
                                </button>
                                {/* second button */}
                                <button
                                    type="submit"
                                    className={`items-center bg-brand-main text-white-main border font-NunitoSans  font-[600] text-[16px] leading-[24px]  rounded-[8px] px-[16px] py-[12px]  `}
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </DialogueWrapper>

            {/* Password  dialgue boxe */}
            <DialogueWrapper
                State={EditPassword}
                Event={setEditPassword}
                Title="Changer votre mot de pass"
                styles=" md:w-[597px] sm:w-[500px] w-[320px] "
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setEditPassword(false);
                    }}
                >
                    <div className="w-full  ">
                        <div className=" w-full p-[20px] flex flex-col gap-y-2">
                            <div className="w-full flex gap-1 flex-col">
                                <label
                                    className="text-[16px] font-sans font-normla leading-[24px]"
                                    htmlFor="CurrentPassword"
                                >
                                    Mot de passe actuel
                                </label>
                                <div
                                    className={`flex gap-2 "h-[50px]" justify-start items-center border-[1px] border-solid border-white-cool rounded-[8px] px-2`}
                                >
                                    <input
                                        className="focus:outline-none w-full h-[50px] profilePlaceholder"
                                        type="password"
                                        id="CurrentPassword"
                                        name="CurrentPassword"
                                        onChange={InputChange}
                                        required
                                    />
                                    {/* =====>icon */}
                                    <Icons.ShowIcon
                                        fill="#1A1A1A"
                                        stroke="#1A1A1A"
                                        ClassName=""
                                    />
                                </div>
                            </div>

                            <p className="text-brand-main text-OpenSans font-[600] text-[14px] leading-[20px]">
                                Mot de passe oublié?
                            </p>

                            <div className="w-full flex gap-1 flex-col">
                                <label
                                    className="text-[16px] font-sans font-normla leading-[24px]"
                                    htmlFor="NewPassword"
                                >
                                    Nouveau mot de passe
                                </label>
                                <div
                                    className={`flex gap-2 "h-[50px]" justify-start items-center border-[1px] border-solid border-white-cool rounded-[8px] px-2`}
                                >
                                    <input
                                        className="focus:outline-none w-full h-[50px] profilePlaceholder"
                                        type="password"
                                        id="NewPassword"
                                        name="NewPassword"
                                        onChange={InputChange}
                                        required
                                    />
                                    {/* =====>icon */}
                                    <Icons.ShowIcon
                                        fill="#1A1A1A"
                                        stroke="#1A1A1A"
                                        ClassName=""
                                    />
                                </div>
                            </div>

                            <div className="w-full flex gap-1 flex-col">
                                <label
                                    className="text-[16px] font-sans font-normla leading-[24px]"
                                    htmlFor="ConfirmPassword"
                                >
                                    confirmer le nouveau mot de passe
                                </label>
                                <div
                                    className={`flex gap-2 "h-[50px]" justify-start items-center border-[1px] border-solid border-white-cool rounded-[8px] px-2`}
                                >
                                    <input
                                        className="focus:outline-none w-full h-[50px] profilePlaceholder"
                                        type="password"
                                        id="ConfirmPassword"
                                        name="ConfirmPassword"
                                        onChange={InputChange}
                                        required
                                    />
                                    {/* =====>icon */}
                                    <Icons.ShowIcon
                                        fill="#1A1A1A"
                                        stroke="#1A1A1A"
                                        ClassName=""
                                    />
                                </div>
                            </div>

                            {/* form  Buttons here */}
                            <div className="flex justify-end mt-6 gap-2">
                                {/* first button */}
                                <button
                                    onClick={() => setEditPassword(false)}
                                    className={`items-center bg-white-main text-black-main border font-NunitoSans  font-[600] text-[16px] leading-[24px]  rounded-[8px] px-[16px] py-[12px]  `}
                                >
                                    Annuler
                                </button>
                                {/* second button */}
                                <button
                                    type="submit"
                                    className={`items-center bg-brand-main text-white-main border font-NunitoSans  font-[600] text-[16px] leading-[24px]  rounded-[8px] px-[16px] py-[12px]  `}
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </DialogueWrapper>
        </React.Fragment>
    );
};

export default Index;
