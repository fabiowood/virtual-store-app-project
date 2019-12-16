
// This type of file is useful to maintain clean codes, by separating the function from the code in which we actually want to call that function.

export const addItemToCart = (cartItems, itemToAdd) => {
  const checkExistingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if (checkExistingCartItem) {
    return (
      cartItems.map(cartItem => {
        return (
          cartItem.id === itemToAdd.id ?
          // Translating the next line of code: do not add the cartItem again, instead just add 1 to its quantity property, because the item already exists in the array.
          {
            ...cartItem,
            quantity: cartItem.quantity + 1
          } :
          {...cartItem}
        )
      })
    );
  } else {
    return (
      // Translating the next line of code: keep the cartItems array as it is, added with the new itemToAdd, because this item did not exist in the original array. Also, create a 'quantity' property, so we can add it by 1 whenever the user add the item again to its shop cart.
      cartItems = [...cartItems, {
        ...itemToAdd,
        quantity: 1
      }]
    )
  }
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return (
    cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  )
}

export const removeQuantityFromCart = (cartItems, itemToReduce) => {
  const checkExistingCartItem = cartItems.find(cartItem => cartItem.id === itemToReduce.id)
  if (checkExistingCartItem.quantity === 1) {
    return (
      removeItemFromCart(cartItems, itemToReduce)
    )
  } else {
    return (
      cartItems.map((cartItem) => {
        return (
          cartItem.id === itemToReduce.id ?
          // Translating the next line of code: remove 1 from the item's quantity property.
          {
            ...cartItem,
            quantity: cartItem.quantity - 1
          } :
          {...cartItem}
        )
      })
    )
  }
}