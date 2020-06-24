import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_ALL_USER,
  GET_ALL_USER_SUCCESS,
  EDIT_USER,
  ADD_USER,
  ADD_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  RESET_CURRENT_USER
} from "../actions/types";

const initialState = {
  loading: false,
  all: [],
  current: {}
};

const usersReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_USER:
      return { ...state, loading: true };

    case GET_USER_SUCCESS:
      return { ...state, loading: false, current: payload };

    case GET_ALL_USER:
      return { ...state, loading: true };

    case GET_ALL_USER_SUCCESS:
      return { ...state, loading: false, all: payload };

    case ADD_USER:
      return { ...state, loading: true };

    case ADD_USER_SUCCESS:
      return { ...state, loading: false, current: null };

    case EDIT_USER:
      return { ...state, loading: true };

    case EDIT_USER_SUCCESS:
      return { ...state, loading: false, current: null };

    case DELETE_USER:
      return { ...state, loading: true };

    case DELETE_USER_SUCCESS:
      return { ...state, loading: false, current: null };

    case RESET_CURRENT_USER:
      return { ...state, current: null };

    default:
      return state;
  }
};

export default usersReducer;
