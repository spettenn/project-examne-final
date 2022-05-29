import "../styles/globals.css";
import HomePage from "./features/home/pages/HomePage";
import ContactPage from "./features/contact/pages/ContactPage";
import FaqPage from "./features/faq/pages/FaqPage";
import ProductPage from "./features/products/pages/ProductPage";
import ProductDetailsPage from "./features/products/pages/ProductDetailsPage";
import AdminPage from "./admin/pages/AdminPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="faq" element={<FaqPage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="products/:id" element={<ProductDetailsPage />} />
      <Route path="*" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
