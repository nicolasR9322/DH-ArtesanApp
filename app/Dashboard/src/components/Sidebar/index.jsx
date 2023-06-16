import { Link } from "react-router-dom";
import { SidebarLogo } from "./components/Logo";
import Logo from "../../assets/logo.png";
import { NavItem } from "./components/NavItem";
import styles from "./index.module.css";

const TITLE = "Artesan App";

export const Sidebar = () => {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav artesanApp-violeta sidebar sidebar-dark accordion "
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <SidebarLogo brand="Artesan App" logo={Logo} />        
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active ">
          <Link className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>{TITLE}</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Administrar</div>

        {/* <!-- Nav Items --> */}
       
        {/* <NavItem href="/" icon="fa-box" name="ABM - Productos"/> */}
        <NavItem href="" icon="fa-star" name={<Link className={styles.links} to="/products">Listado de productos</Link>}/>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/* <!-- End of Sidebar --> */}
    </>
  );
};
