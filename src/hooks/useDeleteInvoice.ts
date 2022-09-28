import { useCallback, useState } from "react";
import { deleteInvoice as deleteInvoiceService } from "../services/invoiceService";

const useDeleteInvoice = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const deleteInvoice = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      await deleteInvoiceService(id);
      //   const data = await deleteInvoice(id);
      //   setInvoice(data);
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    isError,
    deleteInvoice,
  };
};

export default useDeleteInvoice;
