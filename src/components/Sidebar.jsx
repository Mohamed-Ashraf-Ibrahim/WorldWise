import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "../components/AppNav";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
