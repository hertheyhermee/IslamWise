import { Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Sidebar from "./Sidebar";
// import useIndependentScroll from "/src/Hooks/useIndependentScroll"; // Custom hook for independent scroll

const Quran = () => {
  // const { sidebarRef, mainBodyRef } = useIndependentScroll();

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-3 quran-bg"
            style={{ paddingTop: "130px", overflowY: "auto", height: "100vh" }}
            // ref={sidebarRef}
          >
            <Sidebar />
          </div>
          <div
            className="col-md-9 px-0"
            style={{ overflowY: "auto", height: "100vh" }}
            // ref={mainBodyRef}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quran;
