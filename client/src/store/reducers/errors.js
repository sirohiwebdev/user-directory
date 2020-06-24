import { ERROR, SUCCESS, RESET } from "../actions/types";

const initialState = {
  error: undefined,
  success: undefined
};

const statusReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ERROR:
      return { ...state, success: undefined, error: payload };

    case SUCCESS:
      return { ...state, error: undefined, success: payload };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

export default statusReducer;
