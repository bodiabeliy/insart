import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Dropdown } from "react-bootstrap";
import { ActionButton } from "../ActionButton";
import { Modal } from "../Modal/Modal";
import { RemovePopup } from "widgets/RemovePopup/ui/RemovePopup";
import { useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import TrashIcon from "shared/assets/icons/trash.svg";
import cls from "./Table.module.scss";

interface TableProps {
  pageName?: string;
  column?: any;
  dataItem: any;
}

export const Table = ({ dataItem, column }: TableProps) => {
  const { t, i18n } = useTranslation("orders");  
console.log("columns", column);

  return (
    <>
      <Container className={""} >
        <Col md={column?.MdSize} style={{ textAlign: column?.textAlign, display:"flex", justifyContent:"space-between" }}>
          <div
            className={classNames(cls[`colunm-${dataItem.ccy}`], {}, [
              cls[dataItem.ccy],
            ])}
          >
            {dataItem.base_ccy}/{dataItem.ccy}
          </div>
          <div
            className={classNames(cls[`colunm-${dataItem.ccy}`], {}, [
              cls[dataItem.sale],
            ])}
          >
             {dataItem.buy}
          </div>
          <div
            className={classNames(cls[`colunm-${dataItem.ccy}`], {}, [
              cls[dataItem.sale],
            ])}
            
          >
             {dataItem.sale}
          </div>
        </Col>
      </Container>
    </>
  );
};

export default Table;
