import mergeById from "../util/mergeObjects";

const initialState = {
  data: [],
  assets: [],
  assetsIcons: [],
  exchangesIcons: [],
  exchanges: [],
};

const AssetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ASSETS_ICONS":
      return {
        ...state,
        assetsIcons: action.data,
      };
    case "ADD_EXCHANGES_ICONS":
      return {
        ...state,
        exchangesIcons: action.data,
      };

    case "ADD_EXCHANGES":
      return {
        ...state,
        exchanges: mergeById(action.data, state.exchangesIcons),
      };
    case "ADD_ASSETS":
      return {
        ...state,
        data: action.data,
        assets: mergeById(action.data, state.assetsIcons),
      };
    case "ADD_ASSET":
      return {
        ...state,

        assets: [...state.data, action.data],
      };

    default:
      return state;
  }
};
export default AssetsReducer;
