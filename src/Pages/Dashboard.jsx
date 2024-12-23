import React,{useState} from "react";
import "./Dashboard.css";
import Aside from "../Component/Aside/Aside";
import DashboardContent from "./DashboardContent";
const Dashboard = () => {
  const [isShow, setIsShow] = useState("false")
    const handleShow = () => {
      setIsShow(!isShow);
    }
  return (
    <main className="dashboard__divs">
      <section className="dashboard__div">
        <div className="aside__divss">
          <Aside isShow={isShow} />
        </div>
        <div className="section__divs">
          <DashboardContent isShow={isShow} handleShow={handleShow} />
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
