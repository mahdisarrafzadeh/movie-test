export type Category = "action" | "drama" | "sci-fi" | "comedy";
export type RatingSort = "lowest" | "highest";

export interface FilterType {
  category?: string;
  ratingSort?: string;
}

export interface FilterItemsInterface {
  label: string;
  value: Category | RatingSort;
}
