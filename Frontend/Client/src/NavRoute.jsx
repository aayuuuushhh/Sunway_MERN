import { Route, Routes } from "react-router-dom";
import ProductForm from "./component/ProductForm";
import UpdateForm from "./component/UpdateForm";

const NavRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<h2>Welcome to Product Manager</h2>} />
      <Route path="/create" element={<ProductForm />} />
      <Route path="/read" element={<h2>This is read page</h2>} />
      <Route path="/update" element={<UpdateForm />} />
      <Route path="/delete" element={<h2>This is delete page</h2>} />
    </Routes>
  );
};

export default NavRoute;
