import React from "react";
import { FormFile, Button } from "react-bootstrap";
import { DeleteFilled } from "@ant-design/icons";
import store from "../store";

export const UploadProfile = ({ edit }) => {
  return (
    <div
      className="w-100"
      style={{ position: "relative", height: "fa-thermometer-30px" }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%"
        }}
        className="text-center"
      >
        {edit ? (
          <>
            <Button variant="outline-primary" size="sm">
              Change
            </Button>
            <DeleteFilled className="text-danger" />
          </>
        ) : (
          <Button variant="outline-primary" size="sm">
            Upload
          </Button>
        )}
      </div>
      <input
        type="file"
        name="profile"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
          cursor: "pointer"
        }}
      />
    </div>
  );
};
