import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import Layout from "./components/ui/Layout";
import CategoryProducts from "./pages/CategoryProducts";
import BrandProducts from "./pages/BrandProducts";

function App() {
  const [open, setOpened] = useState(false);

  const [openBrandItem, setopenBrandItem] = useState(false);

  const handleClicked = () => {
    setOpened(!open);
  };

  const handleClickedForBrandItem = () => {
    setopenBrandItem(!openBrandItem);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="" element={<Home />} />

            <Route path="login" element={<Login />} />

            <Route path="register" element={<Register />} />

            <Route path="cart" element={<Cart />} />

            <Route path="product" element={<Product />} />


            <Route path="categories/:jbhsdhi" element={<CategoryProducts />} />


            <Route path="brands/:jbhsdhikln" element={<BrandProducts />} />

            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
