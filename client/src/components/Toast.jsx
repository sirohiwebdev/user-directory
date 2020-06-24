import React, { useState } from "react";
import { Toast, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RESET } from "../store/actions/types";
import store from "../store";

export const Toaster = props => {
  const [show, setShow] = useState(true);

  const _onClose = () => {
    store.dispatch({ type: RESET });
    setShow(false);
  };

  return (
    <Toast
      style={{
        position: "absolute",
        right: "10px",
        top: "10px",
        zIndex: 1110,
        minWidth: "200px"
      }}
      delay={5000}
      show={show}
      onClose={_onClose}
    >
      <Toast.Header
        className={`d-flex justify-content-between ${
          props.type === "success" ? "text-success" : "text-danger"
        }`}
      >
        <strong>{props.title}</strong>
      </Toast.Header>
      <Toast.Body
        className={`${
          props.type === "success" ? "text-success" : "text-danger"
        }`}
      >
        {props.message}
      </Toast.Body>
    </Toast>
  );
};
