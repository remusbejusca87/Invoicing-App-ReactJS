import { useCallback, useState } from "react";
import { putInvoice } from "../services/invoiceService";
import { IUpdateInvoiceReq } from "../types/IUpdateInvoiceReq";

export const useUpdateInvoice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [invoice] = useState<IUpdateInvoiceReq>();

  const updateInvoice = useCallback(async (req: IUpdateInvoiceReq) => {
    try {
      setIsLoading(true);
      setIsError(false);
      // const data = await postInvoice(req);
      await putInvoice(req);
      // setInvoice(data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    isError,
    updateInvoice,
    invoice,
  };
};
