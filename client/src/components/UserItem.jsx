import React, { useState } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import {
  EllipsisOutlined,
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
import DropdownItem from "react-bootstrap/DropdownItem";
import { CustomDropdownMenu } from "./DropdownMenu";

export const UserItem = props => {
  const { name, email, contact, address, _id } = props;
  const [toggle, setToggle] = useState(false);

  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  const editUserDetails = () => {
    props.edit(_id);
  };
  const deleteUser = () => {
    props.deleteUser(_id);
  };
  return (
    <tr className="align-items-center">
      <td className="pl-4">
        <img
          src={`https://picsum.photos/80/80?random=${(parseInt(props.index) %
            10) +
            1}`}
          className="user-avatar mr-2"
        />

        {name}
      </td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>{address}</td>
      <td>
        <div style={{ position: "relative" }}>
          <Button variant="light" size="sm" onClick={toggleDropdown}>
            <EllipsisOutlined />
          </Button>

          <CustomDropdownMenu show={toggle}>
            <DropdownItem as="div" onClick={editUserDetails}>
              <div className="d-flex align-items-center cursor-pointer">
                <EditOutlined className="mr-2" /> Edit user details
              </div>
            </DropdownItem>
            <DropdownItem as="div" onClick={deleteUser}>
              <div className="d-flex align-items-center cursor-pointer">
                <DeleteOutlined className="mr-2 text-danger" /> Delete user
              </div>
            </DropdownItem>
          </CustomDropdownMenu>
        </div>
      </td>
    </tr>
  );
};
