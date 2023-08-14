import { ReactElement, createContext, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: "cheap",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "ordinary",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "expensive",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type ProductContentType = { products: ProductType[] };

const initContextState: ProductContentType = { products: [] }; //missing

const ProductsContext = createContext<ProductContentType>(initContextState);

type ChildrenType = { children: ReactElement | ReactElement[] | undefined };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((res) => res.json())
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
      return data;
    };
    fetchProducts().then((products) => setProducts(products));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
