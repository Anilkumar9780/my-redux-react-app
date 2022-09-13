export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};


export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};


export const IncreaseQty = (product) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: product,
  };
};

export const DecreaseQty = (product) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: product,
  };
};

