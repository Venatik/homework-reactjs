import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { AddProduct } from "./components/AddProduct";
import { ProductProvider } from "./context/product.context";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/products" element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
