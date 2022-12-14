export interface IInvoice {
  id: number;
  company: string;
  client: string;
  serial: string;
  nr: number;
  date: string;
  price: number;
  vat: number;
  total: number;
  ctr: number;
  itemName: string;
  itemUnit: string;
  itemAmount: number;
  itemPrice: number;
  itemValue: number;
  itemVat: number;
}
