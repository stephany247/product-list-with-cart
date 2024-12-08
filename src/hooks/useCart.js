export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { itemId } = action.payload;
      const isItemInCart = !!state.items[itemId];

      return {
        ...state,
        items: {
          ...state.items,
          [itemId]: (state.items[itemId] || 0) + 1,
        },
        order: isItemInCart ? state.order : [...state.order, itemId],
      };
    //  [action.itemId]: (state[action.itemId] || 0) + 1 };

    case "REMOVE_FROM_CART":
      const updatedItems = { ...state.items };
      delete updatedItems[action.payload.itemId];

      return {
        ...state,
        items: updatedItems,
        order: state.order.filter((id) => id !== action.payload.itemId),
      };

    case "INCREMENT_ITEM":
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.itemId]:
            (state.items[action.payload.itemId] || 0) + 1,
        },
      };
    // return { ...state, [action.itemId]: (state[action.itemId] || 0) + 1 };

    //   case "DECREMENT_ITEM":
    //     const newCount = (state[action.itemId] || 0) - 1;
    //     if (newCount <= 0) {
    //       const { [action.itemId]: x, ...rest } = state;
    //       return rest;
    //     }
    //     return { ...state, [action.itemId]: newCount };
    //   default:
    //     console.log(`Unknown action type: ${action.type}`);
    //     return state;
    // }
    case "DECREMENT_ITEM":
      const decrementedCount = (state.items[action.payload.itemId] || 0) - 1;
      if (decrementedCount <= 0) {
        const { [action.payload.itemId]: _, ...remainingItems } = state.items;
        return {
          ...state,
          items: remainingItems,
          order: state.order.filter((id) => id !== action.payload.itemId),
        };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.itemId]: decrementedCount,
        },
      };

    case "RESET_CART":
      return {
        ...state,
        items: {},
        order: [],
      };

    default:
      return state;
  }
};
