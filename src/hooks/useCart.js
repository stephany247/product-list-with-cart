export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, [action.itemId]: (state[action.itemId] || 0) + 1 };
    case "INCREMENT_ITEM":
      return { ...state, [action.itemId]: state[action.itemId] + 1 };
    case "DECREMENT_ITEM":
      const newCount = state[action.itemId] - 1;
      if (newCount <= 0) {
        const { [action.itemId]: _, ...rest } = state; // Remove item from cart if count is 0
        return rest;
      }
      return { ...state, [action.itemId]: newCount };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
