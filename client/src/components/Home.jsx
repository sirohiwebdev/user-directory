import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Table
} from "react-bootstrap";
import {
  UserOutlined,
  PlusCircleFilled,
  EllipsisOutlined
} from "@ant-design/icons";
import { CustomNavItem } from "./CustomNavItem";
import { TopNavbar } from "./TopNavbar";
import { UserTable } from "./UserTable";
import { UserModal } from "./UserModal";
import store from "../store";
import { RESET_CURRENT_USER } from "../store/actions/types";

export const Home = props => {
  console.log(store.getState());
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleModalClose = () => {
    setShowModal(false);
    store.dispatch({ type: RESET_CURRENT_USER });
  };

  const addNewUser = () => {
    setShowModal(true);
    setEditUser(null);
  };

  const editUserDetails = userid => {
    setEditUser(userid);
    setShowModal(true);
  };
  return (
    <>
      <UserModal edit={editUser} show={showModal} onClose={handleModalClose} />
      <TopNavbar />
      <Container fluid>
        <Row className={"py-5 bg-white shadow-sm"}>
          <Col
            className={
              "mx-auto d-flex justify-content-between align-item-center"
            }
            md={9}
          >
            <h3>User Directory</h3>
            <Button variant="primary" onClick={addNewUser}>
              <div className="d-flex align-items-center">
                <PlusCircleFilled className="mr-2" /> Add new User
              </div>
            </Button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={9} sm={12} className={"mx-auto shadow-sm bg-white px-0"}>
            <UserTable onEdit={editUserDetails} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
