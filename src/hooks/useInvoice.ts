import { IInvoice } from "../types/IInvoice";
import { useEffect, useState } from "react";
import { getInvoice } from "../services/invoiceService";
import defaultEmptyInvoice from "../utils/constants";

const useInvoice = (id: string) => {
  const [invoice, setInvoice] = useState<IInvoice>(defaultEmptyInvoice);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getInvoice(id);
        setInvoice(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [id]); // useEffect se executa doar daca se modif. acel prop id

  return {
    invoice,
    isLoading,
    isError,
  };
};

export default useInvoice;
