import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { ProductContentType } from "../context/ProductsProvider";

const useProducts = (): ProductContentType => {
  return useContext(ProductsContext);
};

export default useProducts;
