import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./layouts/Container";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { useState } from "react";
import { DraftProduct } from "./components/AddProduct/AddProduct";
import { Product } from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState<DraftProduct[]>([]);

  // const addProducts = (newProduct: Product) => {
  //   setProducts([...products, { ...newProduct, id: Math.random() }]);
  // };

  return (
    <BrowserRouter>
      <Container>
        <Header />

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/products" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
