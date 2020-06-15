import defaultState from "../defaultState";

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (state.cart.filter((e) => e.id === action.payload.id).length > 0) {
        let newCart = state.cart.map((e) => {
          if (e.id === action.payload.id) {
            return { ...e, quantity: e.quantity + 1 };
          }
          return { ...e };
        });

        return { ...state, cart: newCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "INCREMENT_AMOUNT":
      console.log("incrementa", action.payload);
      return {
        ...state,
        cart: state.cart.map((e) =>
          e.id === action.payload
            ? { ...e, quantity: e.quantity + 1 }
            : { ...e }
        ),
      };
    case "DECREMENT_AMOUNT":
      return {
        ...state,
        cart: state.cart.map((e) =>
          e.id === action.payload && e.quantity > 0
            ? { ...e, quantity: e.quantity - 1 }
            : { ...e }
        ),
      };

      return state;
    default:
      return state;
  }
};
