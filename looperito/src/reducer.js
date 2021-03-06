const initialState = {
  session: [],
  time: 0,
  duration: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "EDIT_SESSION":
      // Session is the state of the last recorded session, represented
      // by array of action (play/pause a sound)
      return { ...state, session: [...state.session, action.payload] };
    case "ADD_TIME":
      return { ...state, time: state.time + 1 };
    case "RESET_TIMER":
      return { ...state, time: 0 };
    case "RESET_RECORD":
      return { ...state, time: 0, session: [] };
    case "DURATION":
      return { ...state, duration: action.payload };
    default:
      return state;
  }
}

export default reducer;
