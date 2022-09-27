import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Invoice from "./Invoice/Invoice";
import Invoices from "./Invoices/Invoices";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/invoices/:id" element={<Invoice />} />
    </Routes>
  );
};

export default AppRoutes;
