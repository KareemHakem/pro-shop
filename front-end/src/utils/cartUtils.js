export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  // item Price
  state.itemPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  //shipping price
  state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);

  //tex price
  state.texPrice = addDecimals(Number((0.15 * state.itemPrice).toFixed(2)));

  //total price
  state.totalPrice = (
    Number(state.itemPrice) +
    Number(state.shippingPrice) +
    Number(state.texPrice)
  ).toFixed(2);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
