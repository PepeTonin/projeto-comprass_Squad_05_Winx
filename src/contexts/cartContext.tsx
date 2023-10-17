import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface cartContextType {
  items: storedItemType[];
  addNewItem: (receivedItem: receivedItemType) => void;
  addOneToExistingItem: (id: number) => void;
  removeOneFromExistingItem: (id: number) => void;
  deleteItem: (id: number) => void;
  totalPrice: number;
  listOfItensIdInCart: number[];
  getItemAmount: (id: number) => number;
}

interface storedItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
  productQuantity: number;
  productTotalPrice: number;
}

interface receivedItemType {
  id: number;
  productName: string;
  productUnitPrice: number;
}

export const CartContext = createContext({} as cartContextType);

export default function CartContextProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<storedItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [itensIdInCart, setItensIdInCart] = useState<number[]>([]);

  const [itemAmount, setItemAmount] = useState<number>();

  function addNewItem(receivedItem: receivedItemType) {
    const item: storedItemType = {
      id: receivedItem.id,
      productName: receivedItem.productName,
      productUnitPrice: receivedItem.productUnitPrice,
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

  function calculateTotalPrice() {
    let totalPriceAux = 0;
    cart.map((item) => {
      setTotalPrice(totalPriceAux + item.productTotalPrice);
    });
  }

  function populateItensIdInCart() {
    cart.map((item) => {
      setItensIdInCart([...itensIdInCart, item.id]);
    });
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

  useEffect(() => {
    calculateTotalPrice();
    populateItensIdInCart();
  }, [cart]);

  const value = {
    items: cart,
    addNewItem: addNewItem,
    addOneToExistingItem: addOneToExistingItem,
    removeOneFromExistingItem: removeOneFromExistingItem,
    deleteItem: deleteItem,
    totalPrice: totalPrice,
    listOfItensIdInCart: itensIdInCart,
    getItemAmount: getItemAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
