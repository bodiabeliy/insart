import { useCurrenciesState } from 'app/providers/storeProvider';
import React, { useEffect } from 'react';
import {useTranslation} from "react-i18next";
import CurrenciesTable from 'widgets/CurrenciesTable/CurrenciesTable';
import { LoginForm } from 'widgets/Forms';

const MainPage = () => {
    const {t} = useTranslation();
    const getCurrencySelectList = useCurrenciesState((state:any) => state.getCurrencySelectList)

   useEffect(() => {
    getCurrencySelectList()
    
   })
    return (
        <div>
          <h1>{t("MainPage")}</h1>
          <LoginForm />
          <CurrenciesTable />

        </div>
    );
};

export default MainPage;
