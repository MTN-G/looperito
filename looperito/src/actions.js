export const editSession = (session) => {
  return {
    type: "EDIT_SESSION",
    payload: session,
  };
};

export const addTime = (time) => {
  return {
    type: "ADD_TIME",
    payload: time,
  };
};

export const resetTimer = () => {
  return {
    type: "RESET_TIMER",
  };
};

export const resetRecord = () => {
  return {
    type: "RESET_RECORD",
  };
};
