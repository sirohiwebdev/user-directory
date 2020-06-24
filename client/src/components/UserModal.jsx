import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  Row,
  Button,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";
import { CloseOutlined } from "@ant-design/icons";
import logo from "../logo.svg";
import { UploadProfile } from "./UploadProfile";
import {
  getUser,
  addNewUser,
  getAllUser,
  updateUser
} from "../store/actions/user";
import { connect } from "react-redux";
import store from "../store";

export const InnerUserModal = ({
  show,
  onClose,
  edit,
  current,
  getUser,
  addNewUser,
  getAllUser,
  loading,
  status,
  editUser
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    id: ""
  });

  console.log(edit);
  React.useEffect(() => {
    if (edit) {
      getUser(edit);
    } else {
      setFormData({
        name: "",
        email: "",
        address: "",
        contact: "",
        id: ""
      });
    }
  }, [edit]);

  React.useEffect(() => {
    if (current) {
      setFormData(current);
    }
  }, [current]);

  const handleFormSubmit = e => {
    e.preventDefault();

    if (edit) {
      handleEditUser();
    } else {
      handleAddNewUser();
    }
  };

  const handleAddNewUser = () => {
    const { id, ...userdata } = formData;
    addNewUser(userdata);
  };

  const handleEditUser = () => {
    const { id, ...userdata } = formData;
    editUser(edit, userdata);
  };

  React.useEffect(() => {
    if (status.success) {
      getAllUser();
    }
  }, [status.success]);

  const handleChange = e => {
    let newFormData = { ...formData, [e.target.name]: e.target.value };

    setFormData(newFormData);
  };
  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Body className={"bg-light px-5 py-4"}>
        <Row className="mt-3">
          <Col md={6} className={"d-flex align-items-center"}>
            <h6> {`${edit ? "Edit Details" : "Add new User"}`}</h6>
          </Col>
          <Col md={6} className={"text-right"}>
            <CloseOutlined onClick={onClose} />
          </Col>
        </Row>
        <Form
          action=""
          method="POST"
          onSubmit={handleFormSubmit}
          className={"mt-3"}
        >
          <Row>
            <Col md={4}>
              <img
                src={logo}
                className={"w-75 mx-auto d-block"}
                alt="Upload image"
              />

              <UploadProfile />
            </Col>
            <Col md={8}>
              <FormGroup>
                <FormLabel>User Name</FormLabel>
                <FormControl
                  value={formData.name}
                  type="text"
                  onChange={handleChange}
                  name="name"
                  placeholder="John Doe"
                  required
                ></FormControl>
              </FormGroup>

              <FormGroup>
                <FormLabel>Address</FormLabel>
                <FormControl
                  value={formData.address}
                  type="text"
                  onChange={handleChange}
                  name="address"
                  placeholder="New Street, any City, Country"
                  required
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Contact</FormLabel>
                <FormControl
                  value={formData.contact}
                  type="text"
                  onChange={handleChange}
                  name="contact"
                  maxLength="10"
                  placeholder="9876543234"
                  required
                ></FormControl>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormControl
                  required
                  value={formData.email}
                  type="text"
                  onChange={handleChange}
                  name="email"
                  placeholder="john@example.com"
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              variant="primary"
            >
              {edit ? "Edit Details" : "Add new User"}
            </Button>
          </FormGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export const mapDispatchToProps = dispatch => {
  return {
    getUser: id => {
      getUser(id, dispatch);
    },
    addNewUser: userdata => addNewUser(userdata, dispatch),
    getAllUser: () => getAllUser(dispatch),
    editUser: (id, userData) => updateUser(id, userData, dispatch)
  };
};

export const mapStateToProps = state => ({
  current: state.users.current,
  loading: state.users.loading,
  status: state.status
});

export const UserModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerUserModal);
