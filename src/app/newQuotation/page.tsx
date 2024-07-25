"use client";
import Footer from "../components/Footer";
import NavBarAdm from "../components/NavBarAdm";
import Form from "../components/NewQuotation/Form";
import withAuth from "../withAuth";

const NewQuotation: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <NavBarAdm />
      <Form />
      <Footer />
    </div>
  );
};

export default withAuth(NewQuotation);
