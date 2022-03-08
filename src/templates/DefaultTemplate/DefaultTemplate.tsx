import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const DefaultTemplate: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
