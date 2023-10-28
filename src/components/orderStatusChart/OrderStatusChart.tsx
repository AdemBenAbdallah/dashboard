import PieChartBox from "./PieChartBox";

const OrderStatusChart = () => {
  return (
    <div className="box">
      <div className="top">
        <h4>Commandes états</h4>
        <select className="monthYear">
          <option value="03/2023">03/2023</option>
          <option value="04/2023">04/2023</option>
          <option value="05/2023">05/2023</option>
        </select>
      </div>
      <PieChartBox />
    </div>
  );
};

export default OrderStatusChart;
