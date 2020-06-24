import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_ALL_USER,
  GET_ALL_USER_SUCCESS,
  ADD_USER,
  ADD_USER_SUCCESS,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  SUCCESS,
  ERROR
} from "./types";
import API from "../../api";

export const getUser = (id, dispatch) => {
  dispatch({ type: GET_USER });

  API.GetUser(id)
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({ type: ERROR, payload: "Error Getting User Data" })
    );
};

export const getAllUser = dispatch => {
  dispatch({ type: GET_ALL_USER });

  API.GetAllUser()
    .then(res => {
      dispatch({ type: GET_ALL_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: "Error Getting User Data" });
    });
};

export const addNewUser = (user, dispatch) => {
  dispatch({ type: ADD_USER });

  API.AddUser(user)
    .then(res => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
      dispatch({ type: SUCCESS, payload: "User added successfully" });
    })
    .catch(err => dispatch({ type: ERROR, payload: "Error adding new User" }));
};

export const updateUser = (id, userData, dispatch) => {
  dispatch({ type: EDIT_USER });

  API.UpdateUser(id, userData)
    .then(res => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data });
      dispatch({ type: SUCCESS, payload: "User details updated successfully" });
    })
    .catch(err => dispatch({ type: ERROR, payload: "Error editing user" }));
};

export const deleteUser = (id, dispatch) => {
  dispatch({ type: EDIT_USER });

  API.DeleteUser(id)
    .then(res => {
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
      dispatch({ type: SUCCESS, payload: "User  deleted successfully" });
    })
    .catch(err => dispatch({ type: ERROR, payload: "Error deleting user" }));
};
