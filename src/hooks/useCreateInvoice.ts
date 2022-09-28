import { useCallback, useState } from "react";
import { postInvoice } from "../services/invoiceService";
import { ICreateInvoiceReq } from "../types/ICreateInvoiceReq";
import { IInvoice } from "../types/IInvoice";

export const useCreateInvoice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [invoice, setInvoice] = useState<ICreateInvoiceReq>();
  const createInvoice = useCallback(async (req: ICreateInvoiceReq) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const data = await postInvoice(req);
      // setInvoice(data);
      console.log(data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    isError,
    createInvoice,
    // invoice,
  };
};
