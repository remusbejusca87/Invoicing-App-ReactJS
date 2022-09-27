// .jsx or .tsx extensions are used when we have html elements too in our file.
// .js or .ts extensions are used only when we have in our file javascript or typescript code(variables, functions)
import { IInvoice } from "../types/IInvoice";
import axios from "axios";
import { useEffect, useState } from "react";
import { getInvoices } from "../services/invoiceService";

const useInvoices = () => {
  const [invoices, setInvoices] = useState<IInvoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await getInvoices();

        setInvoices(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, []); // this empty array makes useEffect to execute once. if not use [] -> infinit loop
  // console.log("render");

  return {
    invoices,
    isLoading,
    isError,
  };
};

export default useInvoices;
