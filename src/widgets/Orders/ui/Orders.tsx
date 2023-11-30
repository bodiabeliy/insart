import Order, { ColumnsProps, Product } from "app/providers/storeProvider/types";
import { useEffect, useState } from "react";
import { Dropdown, SplitButton } from "react-bootstrap";
import { DropDirection } from "react-bootstrap/esm/DropdownContext";
import { classNames } from "shared/lib/classNames/classNames";
import OrderList from "shared/ui/List/List";
import cls from "./Orders.module.scss"
import { useDispatch } from "react-redux";

interface IOrderIProps {
    order:Order;
    orders:Order[];
    direction:DropDirection;
    columns:ColumnsProps[];
    index:number;
}
export const Orders = () => {
    const dispatch = useDispatch()

    
    return ( 
       <></>
     );
}
 
