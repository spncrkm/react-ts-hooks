interface ShoppingCartItems {
  id: number;
  name: string;
  price: number;
}


type ShoppingCartAction =
  | { type: "ADD_ITEM"; payload: ShoppingCartItems }
  | { type: "REMOVE_ITEM"; payload: number }

const shoppingCartReducer = (
  state: ShoppingCartItems[],
  action: ShoppingCartAction
): ShoppingCartItems[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default shoppingCartReducer;
