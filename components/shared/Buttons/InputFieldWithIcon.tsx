import React, { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";

interface Props {
  label?: string;
  placeholder?: string;
  icon?: ReactNode;
  height?: string;
  name?: string;
  state?: string;
  Set_State?: any;
  isLeft?: any;
  required?: boolean;
  type?: string;
  eventHandle?: any;
  className?:string;
}

const InputFieldWithIcon: React.FC<Props> = ({
  label,
  placeholder,
  icon,
  height,
  name,
  state,
  type = "text",
  required,
  Set_State,
  eventHandle,
  className,
  isLeft = true,
}: Props) => {
  return (
    <div className="w-full flex gap-1 flex-col">
      <label
        className="text-[16px] font-sans text-black-cool font-normal leading-[24px]"
        htmlFor="firstName"
      >
        {label}
      </label>
      {isLeft ? (
        <div
          className={`${className} flex gap-2 ${height ? height : "h-[50px]"
            } justify-start items-center border-[1px] border-solid border-white-cool rounded-[8px] px-2`}
          onClick={eventHandle}
        >
          {/* =====>icon */}
          {icon}
          <input
            className={`focus:outline-none w-full h-full profilePlaceholder`}
            type={type}
            id={name}
            name={name}
            value={state}
            onChange={Set_State}
            placeholder={placeholder}
            required={required}
          />
        </div>
      ) : (
        <div
          className={`flex gap-2 ${height ? height : "h-[50px]"
            } justify-start items-center border-[1px] border-solid border-white-cool rounded-[8px] px-2`}
          onClick={eventHandle}
        >
          <input
            className="focus:outline-none w-full h-full profilePlaceholder"
            type={type}
            id={name}
            name={name}
            value={state}
            onChange={Set_State}
            placeholder={placeholder}
            required={required}
          />
          {/* =====>icon */}
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputFieldWithIcon;