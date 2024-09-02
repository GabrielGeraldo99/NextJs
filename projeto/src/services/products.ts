export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/products`
  );
  const products: ProductType[] = await response.json();
  return products;
};

export const fetchProduct = async (id: string | number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`
  );
  const product: ProductType = await response.json();
  return product;
};
