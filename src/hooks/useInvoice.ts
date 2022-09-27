import { IInvoice } from "../types/IInvoice";
import { useEffect, useState } from "react";
import { getInvoice } from "../services/invoiceService";

const useInvoice = (id: string) => {
  const [invoice, setInvoice] = useState<IInvoice>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await getInvoice(id);
        setInvoice(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [id]); // useEffect se executa doar daca se modif. acel prop uuid
  // this empty array makes useEffect to execute once. if not use [] -> infinit loop
  // console.log("render");

  return {
    invoice,
    isLoading,
    isError,
  };
};

export default useInvoice;
