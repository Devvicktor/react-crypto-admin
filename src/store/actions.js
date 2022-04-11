export const addAssets = (data) => {
  return (dispatch) =>
    dispatch({
      type: "ADD_ASSETS",
      data,
    });
};
export const addAssetsIcons = (data) => {
  return (dispatch) =>
    dispatch({
      type: "ADD_ASSETS_ICONS",
      data,
    });
};
export const addExchangesIcons = (data) => {
  return (dispatch) =>
    dispatch({
      type: "ADD_EXCHANGES_ICONS",
      data,
    });
};

export const addExchanges = (data) => {
  return (dispatch) => dispatch({ type: "ADD_EXCHANGES", data });
};
