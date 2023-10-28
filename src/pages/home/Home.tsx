import TopDeliveryZones from "../../components/topDeliveryZones/TopDeliveryZones";
import UsersPresentation from "../../components/usersPresentation/UsersPresentation";
import "./home.scss";
import OrderStatusChart from "../../components/orderStatusChart/OrderStatusChart";
import HistogramGraph from "../../components/histogramGraph/HistogramGraph";
import GridTable from "../../components/GridTable/GridTable";


const Home = () => {
  return (
    <div className="home">
      <header>
        <h3>Salut, Super Delivery! 👋</h3>
        <p>Votre tableau de bord actuel pour aujourd'hui</p>
      </header>
      <div className="content">
        <UsersPresentation />
        <TopDeliveryZones />
        <OrderStatusChart />
      </div>
      <HistogramGraph />
      <p className="last-command">Dernières commandes</p>
      <GridTable />
    </div>
  );
};

export default Home;
