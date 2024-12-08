export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, [action.itemId]: (state[action.itemId] || 0) + 1 };
    case "INCREMENT_ITEM":
      return { ...state, [action.itemId]: (state[action.itemId] || 0) + 1 };
    case "DECREMENT_ITEM":
      const newCount = (state[action.itemId] || 0) - 1;
      if (newCount <= 0) {
        const { [action.itemId]: x, ...rest } = state;
        return rest;
      }
      return { ...state, [action.itemId]: newCount };
    default:
      console.log(`Unknown action type: ${action.type}`);
      return state;
  }
};
