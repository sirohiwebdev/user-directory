import React from "react";
import { UserItem } from "./UserItem";
import { Table } from "react-bootstrap";
import { getAllUser, deleteUser } from "../store/actions/user";
import { connect } from "react-redux";

export const InnerUserTable = props => {
  React.useEffect(() => {
    if (!props.all.length) props.getAllUser();
  }, []);

  return (
    <Table hover className={"mb-0"}>
      <thead>
        <tr>
          <th className="pl-4 text-muted">USER NAME</th>
          <th className="text-muted">ADDRESS</th>
          <th className="text-muted">CONTACT</th>
          <th className="text-muted">EMAIL</th>
          <th className="text-muted"></th>
        </tr>
      </thead>
      <tbody>
        {props.loading ? (
          <tr>
            <td colSpan="5" className="text-center">
              Please wait...
            </td>
          </tr>
        ) : props.all.length ? (
          props.all.map((u, i) => (
            <UserItem
              {...u}
              index={i}
              key={i}
              edit={props.onEdit}
              deleteUser={props.deleteUser}
            />
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No user found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => {
  return {
    all: state.users.all,
    loading: state.users.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllUser: () => getAllUser(dispatch),
    deleteUser: id => deleteUser(id, dispatch)
  };
};

export const UserTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerUserTable);
