const chatReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "SELECT_GROUP":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case "SELECT_ROOM":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default chatReducer;
