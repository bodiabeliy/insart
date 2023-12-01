import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss"

interface SelectOptionsProps {
    className?:string;
    options:any[]
    value:string,
    onChange:(data:any) => void,
    defaultValue:string
}

export const Select = ({className, options, value, onChange, defaultValue}:SelectOptionsProps) => {
    return ( 
        <select
        className={classNames(className, {}, [cls.Select])}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="default">{defaultValue}</option>
            {options.map((option:any) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
     );
}
 