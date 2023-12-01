import { FC, useState, useCallback, useEffect, memo } from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/esm/Form";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

import cls from "./LoginForm.module.scss";
import { Select } from "shared/ui/Select/Select";
import { useCurrenciesState } from "app/providers/storeProvider";
import { converter } from "shared/lib/currenciesData/currenciesData";
import { log } from "console";

interface LoginFormProps {
  formType?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(() => {
  const currenciesSelect1List = useCurrenciesState((state:any) => state.currenciesSelectList)
  const currenciesSelect2List = useCurrenciesState((state:any) => state.currenciesSelectList)
  const getCurrencyExchange = useCurrenciesState((state:any) => state.getCurrencyExchange)
  const currencyData = useCurrenciesState((state:any) => state.currencyData)
console.log("currencyData", currencyData);


  const { t } = useTranslation();
  const [form, setForm] = useState({
    username: "",
    userpassword: "",
  });
  const [errors, setErrors] = useState<any>({
    username: "",
    userpassword: "",
  });

  const [selectCurrencyValue, setSelectCurrencyValue] = useState("USD")
  const [selectCurrencyValue2, setSelectCurrencyValue2] = useState("EUR")

  useEffect(() => {
    const newErrors = findFormErrors();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }
  }, [form.username, form.userpassword])

  const setField = (field: any, value: any) => {    
   
    setForm({ ...form, [field]: value });
   
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
      if (field =="username") {
        getCurrencyExchange(selectCurrencyValue, selectCurrencyValue2, value)
      }
      if (field =="userpassword") {
        getCurrencyExchange(selectCurrencyValue2, selectCurrencyValue, value)
      }
    return { field, form };
  };

  const findFormErrors = () => {
    const { username, userpassword } = form;
    const newErrors = {
      username: "",
      userpassword: "",
    };
    

    if (Number(username) <10)
      newErrors.username = t("миним > 10");
    if (!username || username === "") newErrors.username = t("поле поточной валюти не может біть пумтім!");

    if (Number(userpassword) <10)
      newErrors.userpassword = t("миним > 10");
    if (!userpassword || userpassword === "")
      newErrors.userpassword = t("поле конверт валюти не может біть пумтім!");

    return newErrors;
  };


  
  const changeCurrency = useCallback((selectedValue) => {
    setSelectCurrencyValue(selectedValue)
    getCurrencyExchange(selectedValue, selectCurrencyValue2, form.username)
    // console.log("ss1", {selectedValue, selectCurrencyValue2, form});

  }, [form.username, selectCurrencyValue2])

  const changeCurrency2 = useCallback((selectedValue) => {
    // console.log("ss2", {selectedValue, selectCurrencyValue, form});
    
    setSelectCurrencyValue2(selectedValue)
    getCurrencyExchange(selectedValue, selectCurrencyValue, form.userpassword)
  }, [form.userpassword, selectCurrencyValue])

  return (
    <>
      <Form>
        <h1>{currencyData.text}</h1>
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Select 
            options={currenciesSelect1List} 
            value={selectCurrencyValue} 
            onChange={(e:any) =>changeCurrency(e)} 
            defaultValue={"select currency:"} 
          />
          <Form.Control
            required
            type="number"
            placeholder="Example: 2.45"
            value={form.username}
            onChange={(e) => setField("username", e.target.value)}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="validationCustom02">
        <Select 
            options={currenciesSelect2List} 
            value={selectCurrencyValue2} 
            onChange={(e:any) =>changeCurrency2(e)} 
            defaultValue={"select currency"} 
          />
          <Form.Control
            required
            type="pumber"
            placeholder="Example: 4.5"
            value={form.userpassword}
            onChange={(e) => setField("userpassword", e.target.value)}
            isInvalid={!!errors.userpassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.userpassword}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
    </>
  );
});
