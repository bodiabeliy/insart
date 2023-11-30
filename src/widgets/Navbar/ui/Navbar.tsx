import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';

import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const { t, i18n } = useTranslation();


    return (
        <>
            <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
        </>
    );
};




