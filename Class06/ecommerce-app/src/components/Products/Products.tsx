import { useEffect, useState } from "react";
import "./Products.css";
import { AddProduct, DraftProduct } from "../AddProduct/AddProduct";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddProduct = (product: DraftProduct) => {
    const newProductId =
      products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct: Product = {
      ...product,
      id: newProductId,
      image: "",
    };
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <section>
      <h1>Products</h1>
      <div className="productsContainer">
        {products.map(product => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px" }}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
