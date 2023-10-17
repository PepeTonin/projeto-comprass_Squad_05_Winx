import { PropsWithChildren, createContext, useState } from "react";

interface cartContextType {
  items: storedItemType[];
  addNewItem: (receivedItem: receivedItemType) => void;
  addOneToExistingItem: (id: number) => void;
  removeOneFromExistingItem: (id: number) => void;
  deleteItem: (id: number) => void;
  getTotalPrice: () => number;
  getItemAmount: (id: number) => number;
}

interface storedItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
  productQuantity: number;
  productTotalPrice: number;
}

interface receivedItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  images: string[];
}

export const CartContext = createContext({} as cartContextType);

export default function CartContextProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<storedItemType[]>([]);

  function addNewItem(receivedItem: receivedItemType) {
    const item: storedItemType = {
      id: receivedItem.id,
      productName: receivedItem.productName,
      productUnitPrice: receivedItem.productUnitPrice,
      images: receivedItem.images,
      productQuantity: 1,
      productTotalPrice: receivedItem.productUnitPrice,
    };
    setCart([...cart, item]);
  }

  function addOneToExistingItem(id: number) {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.productQuantity += 1;
          item.productTotalPrice += item.productUnitPrice;
        }
        return item;
      })
    );
  }

  function removeOneFromExistingItem(id: number) {
    setCart(
      cart.map((item) => {
        if (item.id === id && item.productQuantity > 0) {
          item.productQuantity -= 1;
          item.productTotalPrice -= item.productUnitPrice;
        }
        return item;
      })
    );
  }

  function deleteItem(id: number) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function getTotalPrice() {
    let total = 0;
    cart.forEach((item) => {
      total += item.productTotalPrice;
    });
    return total;
  }

  function getItemAmount(id: number) {
    let amount = 0;
    cart.forEach((item) => {
      if (item.id === id) {
        amount = item.productQuantity;
      }
    });
    return amount;
  }

  const value = {
    items: cart,
    addNewItem: addNewItem,
    addOneToExistingItem: addOneToExistingItem,
    removeOneFromExistingItem: removeOneFromExistingItem,
    deleteItem: deleteItem,
    getTotalPrice: getTotalPrice,
    getItemAmount: getItemAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
