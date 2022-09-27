import React from "react";
import Header from "../Sections/Header/Header";
import Content from "../Sections/Content/Content";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
