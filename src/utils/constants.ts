import { IInvoice } from "../types/IInvoice";

const defaultEmptyInvoice: IInvoice = {
  id: 0,
  company: "",
  client: "",
  serial: "",
  nr: 0,
  date: "",
  price: 0,
  vat: 0,
  total: 0,
  ctr: 0,
  itemName: "",
  itemUnit: "",
  itemAmount: 0,
  itemPrice: 0,
  itemValue: 0,
  itemVat: 0,
};

export default defaultEmptyInvoice;
// exports.defaultEmptyInvoice = defaultEmptyInvoice;
// when you want to export multiple elements/variables from the same file
