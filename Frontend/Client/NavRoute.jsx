import { Route, Routes } from "react-router-dom";
import Form1 from "./src/component/UpdateForm";
import Form from "./src/component/CreateForm";

const NavRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/create" element={<Form />}></Route>
        <Route path="/read" element={<div>This is read page</div>}></Route>
        <Route path="/update" element={<Form1 />}></Route>
        <Route path="/delete" element={<div>This is delete page</div>}></Route>
      </Routes>
    </div>
  );
};

export default NavRoute;