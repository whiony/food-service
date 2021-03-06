import s from "../../styles/Dashboard.module.css";
import Header from "./../Header";
import DashCards from "../DashCards";
import OrderReportTable from "../OrderReportTable";
import MostOrdered from "../MostOrdered";
import MostTypeOfOrder from "../MostTypeOfOrder";

const Dashboard = () => {
  return <div className={s.dashboard}>
    <div>
      <Header title="Dashboard" date="Tuesday, 2 Feb 2021" />
      <DashCards />
      <OrderReportTable />
    </div>
    <div>
      <MostOrdered />
      <MostTypeOfOrder />
    </div>
  </div>
}

export default Dashboard;