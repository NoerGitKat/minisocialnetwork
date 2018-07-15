import { GET_ERRORS } from "./../actions/types";

const initialState = {
  errors: {
    // catch all errors
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}

export default reducer;
