import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Dropdown } from "react-bootstrap";
import { ActionButton } from "../ActionButton";
import { Modal } from "../Modal/Modal";
import { RemovePopup } from "widgets/RemovePopup/ui/RemovePopup";
import { useCallback, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import TrashIcon from "shared/assets/icons/trash.svg";
import cls from "./Table.module.scss";
import { Input } from "../Input/Input";

interface TableProps {
  pageName?: string;
  columns?: any[];
  dataItem: any;
}

export const Table = ({ dataItem }: TableProps) => {
  const { t, i18n } = useTranslation("orders");
  const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false)
 
  
  return (
    <>
      <Container className={"flex-container"}>
        <Col md={dataItem.MdSize} style={{ textAlign: dataItem.textAlign }}>
          <div
            onClick={() =>  setIsInputDisabled(!isInputDisabled)}
            className={classNames(cls[`colunm-${dataItem}`], {}, [
              cls[dataItem.name],
            ])}
            style={{background:isInputDisabled ===true ?`transparent`:"white"}}
          >
            <Input
              type="text"
              value={dataItem.name}
              // onChange={(e:any) =>changeHeaderName(e, dataItem.name)}
              onChange={() =>{}}
              defaultValue={""}
              disabled={isInputDisabled}
            />
          </div>
          <div
            className={classNames(cls[`colunm-${dataItem}`], {}, [
              cls[dataItem.name],
            ])}
          ></div>
        </Col>
      </Container>
    </>
  );
};

export default Table;
