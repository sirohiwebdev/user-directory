import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "react-bootstrap";
import {
  UserOutlined,
  MessageOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import { CustomNavItem } from "./CustomNavItem";

export const TopNavbar = props => {
  return (
    <>
      <Navbar
        variant={"dark"}
        style={{ backgroundColor: "var(--purple)" }}
        className={"py-0"}
      >
        <div className="d-flex justify-content-between w-100">
          <NavbarBrand>User Directory</NavbarBrand>
          <Nav navbar>
            <CustomNavItem>
              <NavLink>Tasks</NavLink>
            </CustomNavItem>
            <CustomNavItem active>
              <NavLink active>Users</NavLink>
            </CustomNavItem>
            <CustomNavItem>
              <NavLink>Activity</NavLink>
            </CustomNavItem>
            <CustomNavItem>
              <NavLink>Members</NavLink>
            </CustomNavItem>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink>
                <UserOutlined />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <GlobalOutlined />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink>
                <MessageOutlined />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
