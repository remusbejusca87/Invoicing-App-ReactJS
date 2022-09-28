import React from "react";

interface CompanyDetailsProps {
  reg: string;
  cui: string;
  office: string;
  account: string;
  bank: string;
  capital: number;
  vat: number;
}

const CompanyDetails = ({
  reg,
  cui,
  office,
  account,
  bank,
  capital,
  vat,
}: CompanyDetailsProps) => {
  return (
    <>
      Nr.Reg.Com.: <strong>J05/{reg}/2022</strong> <br />
      C.U.I: <strong> RO {cui} </strong> <br />
      Office: <strong> City of {office} </strong> <br />
      Account: <strong> RO Bank {account} </strong> <br />
      Bank: <strong> Bank of {bank} </strong> <br />
      Capital: <strong> {capital} RON </strong> <br />
      VAT Rate: <strong> {vat}% </strong> <br />
    </>
  );
};

export default CompanyDetails;
