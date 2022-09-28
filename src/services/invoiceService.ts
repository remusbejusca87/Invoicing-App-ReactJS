import axios from "axios";
import { ICreateInvoiceReq } from "../types/ICreateInvoiceReq";
import { IInvoice } from "../types/IInvoice";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export const getInvoices = async () => {
  const { data } = await axiosInstance.get("/invoices");
  return data;
};

export const getInvoice = async (id: string) => {
  const { data } = await axiosInstance.get<IInvoice>(`/invoices/${id}`);
  return data;
};

export const postInvoice = async (req: ICreateInvoiceReq) => {
  const { data } = await axiosInstance.post<ICreateInvoiceReq>(
    "/invoices",
    req
  );
  return data;
};
