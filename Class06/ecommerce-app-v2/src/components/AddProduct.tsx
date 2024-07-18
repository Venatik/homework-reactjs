import { Product, Category } from "../types/type";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/product.context";

export const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm<Product>();
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const onSubmit = (data: Product) => {
    addProduct(data);
    reset();
    navigate("/products");
  };

  return (
    <div>
      <form
        className="flex flex-col w-1/2 gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register("title")} placeholder="Title" />
        <input type="number" {...register("price")} placeholder="Price" />
        <textarea {...register("description")} placeholder="Description" />
        <select {...register("category")}>
          {Object.values(Category).map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <input {...register("image")} placeholder="Image URL" />
        <input type="text" {...register("rating.rate")} placeholder="Rating" />
        <input
          type="text"
          {...register("rating.count")}
          placeholder="Rating Count"
        />
        <button type="submit" className="bg-gray-200 border-solid border-2 ">
          Add Product
        </button>
      </form>
    </div>
  );
};
