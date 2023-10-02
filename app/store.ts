import { create } from "zustand";
import { fakerDE as faker } from "@faker-js/faker";

export interface Product {
  id: number;
  name: string;
  src: string;
  price?: number;
  description?: string;
  available?: boolean;
  cart?: number;
  featured?: boolean;
}

export interface StoreState {
  cart: Product[];
  favorite: Product[];
  products: Product[];
}

interface StoreActions {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  addToFavorite: (product: Product) => void;
}

interface StoreSelectors {
  cartItemCount?: number;
  cartTotalPrice?: number;
}
const generateFakeProductDescription = (): string => {
  return faker.lorem.paragraph().substring(10, 100);
};
const useStore = create<StoreState & StoreActions & StoreSelectors>((set) => ({
  cart: [
    // {
    //   src: "/products/1.png",
    //   name: "Rossy Lipstick",
    //   price: 5000,
    //   id: 1,
    //   description: generateFakeProductDescription(),
    //   available: true,
    // },
    // {
    //   src: "/products/2.png",
    //   name: "Rossy Foundation",
    //   price: 5000,
    //   id: 2,
    //   description: generateFakeProductDescription(),
    //   available: true,
    // },
  ],
  favorite: [],
  products: [
    {
      src: "/products/1.png",
      name: "Rossy Lipstick",
      price: 5000,
      id: 1,
      description: generateFakeProductDescription(),
      available: true,
      featured: true,
    },
    {
      src: "/products/2.png",
      name: "Rossy Foundation",
      price: 5000,
      id: 2,
      description: generateFakeProductDescription(),
      available: true,
    },
    {
      src: "/products/3.png",
      name: "Rossy Foundation",
      price: 5000,
      id: 3,
      description: generateFakeProductDescription(),
      available: true,
      featured: false,
    },

    {
      src: "/products/5.png",
      name: "Rossy powder",
      price: 5000,
      id: 4,
      description: generateFakeProductDescription(),
      available: true,
    },
    {
      src: "/products/6.png",
      name: "Rossy powder",
      price: 5000,
      id: 5,
      description: generateFakeProductDescription(),
      available: true,
    },
    {
      src: "/products/7.png",
      name: "Beauty Blender",
      price: 5000,
      id: 6,
      description: generateFakeProductDescription(),
      available: true,
      featured: true,
    },
    {
      src: "/products/8.png",
      name: "Rossy Brush",
      price: 5000,
      id: 7,
      description: generateFakeProductDescription(),
      available: true,
    },
    {
      src: "/products/9.png",
      name: "Rossy powder",
      price: 5000,
      id: 8,
      description: generateFakeProductDescription(),
      available: true,
    },

    {
      src: "/products/11.jpg",
      name: "Rossy Lipstick",
      price: 5000,
      id: 9,
      description: generateFakeProductDescription(),
      available: true,
    },
    {
      src: "/products/14.jpg",
      name: "Rossy Lipstick",
      price: 5000,
      id: 10,
      description: generateFakeProductDescription(),
      available: true,
    },
    {
      src: "/products/12.jpg",
      name: "Rossy Lipstick",
      price: 5000,
      id: 11,
      description: generateFakeProductDescription(),
      available: true,
    },
    {
      src: "/products/10.jpg",
      name: "Rossy Lipstick",
      price: 5000,
      id: 12,
      description: generateFakeProductDescription(),
      available: true,
    },
    {
      src: "/products/13.jpg",
      name: "Rossy Lipstick",
      price: 5000,
      id: 13,
      description: generateFakeProductDescription(),
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
