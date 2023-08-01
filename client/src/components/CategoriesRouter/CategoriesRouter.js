import { Navigate, Route, Routes } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import { data } from "../../data";

export default function CategoriesRouter() {
  const categories = [
    ...new Set(data.products.map((product) => product.category)),
  ];

  const firstCategory = categories[0];

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/category/${firstCategory}`} />}
      />
      {categories.map((currentCategory) => (
        <Route
          key={currentCategory}
          path={`/category/${currentCategory}`}
          element={
            <ProductList currentCategory={currentCategory} data={data} />
          }
        />
      ))}
    </Routes>
  );
}
