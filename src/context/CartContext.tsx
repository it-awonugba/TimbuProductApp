import React, {useState, createContext, useContext, ReactNode} from 'react';
import {Product} from '../services/api';
import {useFormatPrice} from '../hooks/useFormatPrice';

export type CartItemType = {
  id: string;
  product: Product;
  quantity: number;
};

interface CartContextType {
  cart: CartItemType[];
  addProductToCart: (product: Product, quantity?: number) => void;
  removeProductFromCart: (id: string) => void;
  getTotalCartValue: () => string;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const {formatPrice} = useFormatPrice();

  const addProductToCart = (product: Product, newQuantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.product.id === product.id,
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += newQuantity;

        if (updatedCart[existingItemIndex].quantity <= 0) {
          return updatedCart.filter(item => item.product.id !== product.id);
        }

        return updatedCart;
      } else {
        return [
          ...prevCart,
          {id: product.id, product: product, quantity: newQuantity},
        ];
      }
    });
  };

  const removeProductFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== id));
  };

  const getTotalCartValue = (): string => {
    const total = cart.reduce((total, cartItem) => {
      return (
        total +
        parseInt(formatPrice(cartItem.product).split(' ')[1]) *
          cartItem.quantity
      );
    }, 0);
    const currency = formatPrice(cart[0].product).split(' ')[0];
    return `${currency} ${total}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        getTotalCartValue,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
