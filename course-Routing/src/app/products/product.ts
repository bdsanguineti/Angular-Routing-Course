/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  productCode: string;
  category: string;
  tags?: string[];
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

// Second Interface with two properties
export interface ProductResolved {
  product: Product;
  error?: any; // Optional Error.
}
