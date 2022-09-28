import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import DeleteInvoice from "./Invoice/components/DeleteInvoice";
import UpdateInvoice from "./Invoice/components/UpdateInvoice";
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
      <Route path="/invoices/edit/:id" element={<UpdateInvoice />} />
      <Route path="/invoices/delete/:id" element={<DeleteInvoice />} />
    </Routes>
  );
};

export default AppRoutes;
