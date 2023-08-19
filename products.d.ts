export type CategoryType = {
  href: string;
  id: number;
  name: string;
  categories: Array<CategoryType>;
};

export type CategoryTypes = Array<CategoryType>;
