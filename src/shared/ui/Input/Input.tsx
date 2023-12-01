import { FC, InputHTMLAttributes } from "react";
import { ThemeButton } from "../Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    type:string
    disabled:boolean;
    value:string,
    onChange:(data:any) => void,
    defaultValue:string
}

export const Input = ({className, value, onChange, disabled, type}:InputProps) => {
   
    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            onChange={event => onChange(event.target.value)}
            value={value}
            type={type}
            disabled={disabled}
         />
    );
};