import { useCallback, useState } from "react";
import { putInvoice } from "../services/invoiceService";
import { IUpdateInvoiceReq } from "../types/IUpdateInvoiceReq";

export const useUpdateInvoiceMutation = () => {
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

// export const useUpdateInvoiceMutation = () => {
//   const queryClient = useQueryClient();
//   return useMutation(putInvoice, {
//     onSuccess: (invoice) => {
//       queryClient.invalidateQueries(keyBuilder.invoice(invoice.id));
//     },
//   });
// };
