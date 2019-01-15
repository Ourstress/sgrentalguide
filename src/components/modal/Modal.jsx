import React from "react";
import styles from "./Modal.module.css";
import { NavLink } from "react-router-dom";

const Modal = props => {
  return (
    <div className={props.open ? "modalBackground" : "modalBackground Hide"}>
      <div className={styles.modalContent}>
        <h3>Guides</h3>
        <NavLink to={"/Rental"} onClick={props.close}>
          Rental Process
        </NavLink>
        <NavLink to={"/Wiki"} onClick={props.close} className={styles.hidden}>
          Wiki
        </NavLink>
      </div>
    </div>
  );
};
export default Modal;
