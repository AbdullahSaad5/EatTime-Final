import React, {createContext, useState} from 'react';

export const CartContext = createContext();
export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    if (cart.find(i => i.id === item.id)) {
      cart.map((i, index) => {
        if (i.id === item.id) {
          const temp = [...cart];
          temp[index].quantity += item.quantity;
          setCart(temp);
        }
      });
    } else {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = item => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
