const initialState = {
  session: [],
  time: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "EDIT_SESSION":
      return { ...state, session: [...state.session, action.payload] };
    case "ADD_TIME":
      return { ...state, time: state.time + 1 };
    case "RESET_RECORD":
      return { time: 0, session: [] };
    default:
      return state;
  }
}

export default reducer;
