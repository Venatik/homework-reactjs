import "./Products.css";
import { useProducts } from "../context/product.context";

export const Products = () => {
  const { products } = useProducts();

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
