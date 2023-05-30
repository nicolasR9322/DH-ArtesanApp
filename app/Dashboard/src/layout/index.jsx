import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import PropTypes from "prop-types";

export const Layout = ({children}) => {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column artesanApp-negro">
        <Header />
        <div id="content">{children}</div>

        <Footer autor={"Artesan App"}/>
      </div>
    </div>
  );
};

Layout.propTypes = { 
  children: PropTypes.object.isRequired,
}

