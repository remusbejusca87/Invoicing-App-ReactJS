import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Invoice from "./Invoice/Invoice";
import CreateInvoice from "./Invoices/components/CreateInvoice/CreateInvoice";
import Invoices from "./Invoices/Invoices";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/invoices/:id" element={<Invoice />} />
      <Route path="/invoices/new" element={<CreateInvoice />} />
    </Routes>
  );
};

export default AppRoutes;
