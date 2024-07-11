import { useState } from "react";
import "./AddProduct.css";

enum Category {
  ELECTRONICS = "electronics",
  JEWELERY = "jewelry",
  MENS_CLOTHING = "men's clothing",
  WOMENS_CLOTHING = "women's clothing",
}

export type DraftProduct = {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  category: Category;
};

// interface ProductCreationProps {
//   title: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   category: Category;
// }

export const AddProduct = () => {
  const [draftProduct, setDraftProduct] = useState<DraftProduct>({
    title: "",
    price: 0,
    description: "",
    imageUrl: "",
    category: Category.ELECTRONICS,
  });

  const [products, setProducts] = useState<DraftProduct[]>([]);

  const handleChangeInput = <K extends keyof DraftProduct>(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    key: K
  ) => {
    const value =
      key === "price" ? parseFloat(event.target.value) : event.target.value;
    setDraftProduct({
      ...draftProduct,
      [key]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !draftProduct.title ||
      draftProduct.price <= 0 ||
      !draftProduct.description ||
      !draftProduct.imageUrl
    ) {
      alert("Please fill all the fields correctly.");
      return;
    }
    setProducts([...products, draftProduct]);
    resetForm();
  };

  const resetForm = () => {
    setDraftProduct({
      title: "",
      price: 0,
      description: "",
      imageUrl: "",
      category: Category.ELECTRONICS,
    });
  };

  return (
    <div>
      {" "}
      <form className="productForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={draftProduct.title}
          onChange={e => handleChangeInput(e, "title")}
        />

        <input
          id="price"
          type="text"
          placeholder="Price"
          value={draftProduct.price}
          onChange={e => handleChangeInput(e, "price")}
        />

        <input
          type="text"
          placeholder="Description"
          value={draftProduct.description}
          onChange={e => handleChangeInput(e, "description")}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={draftProduct.imageUrl}
          onChange={e => handleChangeInput(e, "imageUrl")}
        />

        <select
          value={draftProduct.category}
          onChange={e => handleChangeInput(e, "category")}
        >
          <option value="electronics">Electronics</option>
          <option value="jewelry">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
};
