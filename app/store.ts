import { create } from "zustand";
import { fakerDE as faker } from "@faker-js/faker";

export type Product = {
  id: number;
  name: string;
  src: string;
  price?: number;
  description?: string;
  available?: boolean;
  cart?: number;
  featured?: boolean;
  category?: string;
  productId?: number;
  count?: number;
};

export type StoreState = {
  cart: Product[];
  favorite: Product[];
  products: Product[];
};

export type StoreActions = {
  count?: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  addToFavorite: (product: Product) => void;
};

export type StoreSelectors = {
  cartItemCount?: number;
  cartTotalPrice?: number;
};

const useStore = create<StoreState & StoreActions & StoreSelectors>()((set) => ({
  cart: [],
  favorite: [],
  products: [
    {
      src: "/products/1.png",
      name: "Rossy Lipstick",
      price: +faker.commerce.price(),
      id: faker.number.int(),
      description: faker.lorem.sentences(2),
      available: true,
      featured: true,
    },
    {
      src: "/products/2.png",
      name: "Rossy Foundation",
      price: +faker.commerce.price(),
      id: faker.number.int(),
      description: faker.lorem.sentences(2),
      available: true,
    },
    {
      src: "/products/3.png",
      name: "Rossy Foundation",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 300 }),
      description: faker.lorem.sentences(2),
      available: true,
      featured: false,
    },

    {
      src: "/products/5.png",
      name: "Rossy powder",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 500 }),
      description: faker.lorem.sentences(2),
      available: true,
    },
    {
      src: "/products/6.png",
      name: "Rossy powder",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 150 }),
      description: faker.lorem.sentences(2),
      available: true,
    },
    {
      src: "/products/7.png",
      name: "Beauty Blender",
      price: +faker.commerce.price({ min: 100 }),
      id: +faker.commerce.price(),
      description: faker.lorem.sentences(2),
      available: true,
      featured: true,
    },
    {
      src: "/products/8.png",
      name: "Rossy Brush",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 100 }),
      description: faker.lorem.sentences(2),
      available: true,
    },
    {
      src: "/products/9.png",
      name: "Rossy powder",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 100 }),
      description: faker.lorem.sentences(2),
      available: true,
    },

    {
      src: "/products/11.jpg",
      name: "Rossy Lipstick",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 100 }),
      description: faker.lorem.sentences(2),
      available: true,
    },
    {
      src: "/products/14.jpg",
      name: "Rossy Lipstick",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 10 }),
      description: faker.lorem.sentences(2),
      available: true,
    },
    {
      src: "/products/12.jpg",
      name: "Rossy Lipstick",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 100 }),
      description: faker.lorem.sentences(2),
      available: true,
    },
    {
      src: "/products/10.jpg",
      name: "Rossy Lipstick",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 500 }),
      description: faker.lorem.sentences(2),
      available: true,
    },
    {
      src: "/products/13.jpg",
      name: "Rossy Lipstick",
      price: +faker.commerce.price(),
      id: +faker.commerce.price({ min: 100 }),
      description: faker.lorem.sentences(2),
      available: true,
    },
  ],

  addToCart: (product) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },

  addToFavorite: (product) => {
    set((state) => ({
      favorite: [...state.favorite, product],
    }));
  },
  // cartItemCount: (state) => state.cart.length,
  // cartTotalPrice: (state) => state.cart.reduce((total, product) => total + product.price, 0),
}));

export default useStore;
