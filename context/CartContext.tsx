"use client";

import {
  createContext,
  useContext,
  useState
} from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];

  addItem: (
    item: CartItem
  ) => void;

  removeItem: (
    id: string
  ) => void;

  clearCart: () => void;
};

const CartContext =
  createContext<CartContextType | null>(
    null
  );

export function CartProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] =
    useState<CartItem[]>([]);

  const addItem = (
    item: CartItem
  ) => {
    setItems((prev) => {
      const exists =
        prev.find(
          (p) => p.id === item.id
        );

      if (exists) {
        return prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity:
                  p.quantity + 1
              }
            : p
        );
      }

      return [...prev, item];
    });
  };

  const removeItem = (
    id: string
  ) => {
    setItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const clearCart = () =>
    setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context)
    throw new Error(
      "Cart Context Missing"
    );

  return context;
}
