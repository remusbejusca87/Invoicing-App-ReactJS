import axios from "axios";
import { ICreateInvoiceReq } from "../types/ICreateInvoiceReq";
import { IInvoice } from "../types/IInvoice";
import { IUpdateInvoiceReq } from "../types/IUpdateInvoiceReq";

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
  const { data } = await axiosInstance.post<IInvoice>("/invoices", req);
  return data;
};

export const putInvoice = async (req: IUpdateInvoiceReq) => {
  const { id, ...rest } = req;
  const { data } = await axiosInstance.put<IInvoice>(`/invoices/${id}`, rest);
  return data;
};

export const deleteInvoice = async (id: string) => {
  const { data } = await axiosInstance.delete<IInvoice>(`/invoices/${id}`);
  return data;
};
