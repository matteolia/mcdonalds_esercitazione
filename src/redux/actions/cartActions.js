export function addProduct(payload) {
    return {
      type: "ADD_PRODUCT",
      payload: payload,
    };
}

export function incrementAmount(payload) {
  return {
    type: "INCREMENT_AMOUNT",
    payload: payload,
  };
}

export function decrementAmount(payload) {
  return {
    type: "DECREMENT_AMOUNT",
    payload: payload,
  };
}