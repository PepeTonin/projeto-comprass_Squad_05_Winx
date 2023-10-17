import { create } from "zustand";

type Store = {
  items: storedItemType[];
  addNewItem: (receivedItem: receivedItemType) => void;
  addOneToExistingItem: (id: number) => void;
  removeOneFromExistingItem: (id: number) => void;
  deleteItem: (id: number) => void;
  totalPrice: number;
  listOfItensIdInCart: number[];
  updateTotalAmountOfAnItem: (id: number, amount: number) => void;
};

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

export const useCartStore = create<Store>()((set) => ({
  items: [],

  totalPrice: 0,

  listOfItensIdInCart: [],

  addNewItem: (receivedItem: receivedItemType) =>
    set((state) => {
      console.log("items", state.items);
      return {
        items: [
          ...state.items,
          {
            id: receivedItem.id,
            productName: receivedItem.productName,
            productUnitPrice: receivedItem.productUnitPrice,
            productQuantity: 1,
            productTotalPrice: receivedItem.productUnitPrice,
          },
        ],
      };
    }),

  addOneToExistingItem: (id: number) =>
    set((state) => {
      console.log("state.items", state.items);
      state.items.map((item) => {
        if (item.id === id) {
          item.productQuantity += 1;
          item.productTotalPrice += item.productUnitPrice;
        }
        return item;
      });
      return {
        items: state.items,
      };
    }),

  removeOneFromExistingItem: (id: number) => {
    set((state) => {
      console.log("state.items", state.items);
      state.items.map((item) => {
        if (item.id === id && item.productQuantity > 0) {
          item.productQuantity -= 1;
          item.productTotalPrice -= item.productUnitPrice;
        }
        return item;
      });
      return {
        items: state.items,
      };
    });
  },

  deleteItem: (id: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },

  calcultateTotalPrice: () => {
    set((state) => ({
      totalPrice: state.items.reduce((acc, item) => {
        return acc + item.productTotalPrice;
      }, 0),
    }));
  },

  populateItensIdInCart: () => {
    set((state) => ({
      listOfItensIdInCart: state.items.map((item) => item.id),
    }));
  },

  updateTotalAmountOfAnItem: (id: number, amount: number) => {
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === id) {
          item.productQuantity = amount;
          item.productTotalPrice = item.productUnitPrice * amount;
        }
        return item;
      }),
    }));
  },
}));
