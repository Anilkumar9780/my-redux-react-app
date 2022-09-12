const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case "DELITEM":
      console.log(product.id);
      return state.filter((item) => item.id !== product.id);
      break;
    case "INCREASE_QUANTITY":
      const exist2 = state.find((x) => x.id === product.id);
      if (exist2) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case "DECREASE_QUANTITY":
      const exist3 = state.find((x) => x.id === product.id);
      if (exist3) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty -= 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 0,
          },
        ];
      }
    default:
      return state;
  }
};
export default handleCart;
