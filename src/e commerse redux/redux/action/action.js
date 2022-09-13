/**
 *  add product to cart 
 * @param {*} product 
 * @returns array
 */
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

/**
 * delete product
 * @param {*} product 
 * @returns array
 */
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

/**
 *  increase qty
 * @param {*} product 
 * @returns increase Qty
 */
export const IncreaseQty = (product) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: product,
  };
};

/**
 *  decrease qty
 * @param {*} product 
 * @returns decrease qty
 */
export const DecreaseQty = (product) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: product,
  };
};

