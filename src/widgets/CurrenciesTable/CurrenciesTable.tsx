import { useCurrenciesState } from "app/providers/storeProvider";
import { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import  TableHeader from "shared/ui/Table/TableHeader";
import  TableBody from "shared/ui/Table/TableBody";

import cls from "./CurrenciesTable.module.scss"
const columns: any[] = [
    { 
        name: "Currency",
        index: 1,
        MdSize: 4,
        textAlign: "left",
    },
    {
        name: "BuyPrice",
        index: 2,
        MdSize: 2,
        textAlign: "center",
        cellAlign: "baseline",
    },
    {
        name: "SellPrice",
        index: 3,
        MdSize: 3,
        textAlign: "center",
    }
];
const CurrenciesTable = () => {
  const currenciesList = useCurrenciesState(
    (state: any) => state.currenciesList
  );
  const getCurrencies = useCurrenciesState((state: any) => state.getCurrencies);

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <>
      <div className={classNames(cls.currencyTable)}>
        <div className={classNames(cls.tableHeader)}>
        {columns.map((dataColumn, index) => {
            
           return  (
            <TableHeader
                key={index}
                dataItem={dataColumn}
          />
          )
        })}
        </div>
        <div className={classNames(cls.tableBody)}>
        {currenciesList.map((currencyItem: any, index: number) => (
        <TableBody
          key={index}
          column={columns[index]}
          dataItem={currencyItem}
        />
      ))}
        </div>
      </div>
    </>
  );
};

export default CurrenciesTable;
