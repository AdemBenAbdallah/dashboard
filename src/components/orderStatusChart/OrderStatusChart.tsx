import { useState } from "react";
import PieChartBox from "./PieChartBox";

const OrderStatusChart = () => {
  const [selectedMonthYear, setSelectedMonthYear] = useState("03/2023");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonthYear = event.target.value;
    setSelectedMonthYear(newMonthYear);
  };


  

  // const dataForSelectedMonthYear = dataByMonthYear[selectedMonthYear] || [];

  return (
    <div className="box">
      <div className="top">
        <h4>Commandes états</h4>
        <select className="monthYear" value={selectedMonthYear} onChange={handleOptionChange}>
          <option value="03/2023">03/2023</option>
          <option value="04/2023">04/2023</option>
          <option value="05/2023">05/2023</option>
        </select>
      </div>
      <PieChartBox selectedMonthYear={selectedMonthYear} />
    </div>
  );
};

export default OrderStatusChart