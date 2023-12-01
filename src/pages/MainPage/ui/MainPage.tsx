import { useCurrenciesState, useStore } from 'app/providers/storeProvider';
import React, { useEffect } from 'react';
import {useTranslation} from "react-i18next";
import { LoginForm } from 'widgets/Forms';

const MainPage = () => {
    const {t} = useTranslation();
    const getCurrencyList = useCurrenciesState((state:any) => state.getCurrencyList)

   useEffect(() => {
    getCurrencyList()
    
   })
    return (
        <div>
          <LoginForm />
        </div>
    );
};

export default MainPage;
