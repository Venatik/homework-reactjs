import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import { Product } from "../types/type";

interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  setProducts: (products: Product[]) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, addProduct, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
