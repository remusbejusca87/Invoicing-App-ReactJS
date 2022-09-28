export interface IUpdateInvoiceReq {
  company: string;
  client: string;
  serial: string;
  nr: number;
  date: string;
  itemName: string;
  itemUnit: string;
  itemAmount: number;
  itemPrice: number;
  id: number;
}
