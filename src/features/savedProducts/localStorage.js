export const getSavedProducts = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const saveProducts = state => {
  try {
    const serializedState = localStorage.getItem("state");
    localStorage.setItem("state", state);
  } catch (err) {
    console.log(err);
  }
};
