import { Cell, Pie, PieChart, Tooltip } from "recharts";
import "./pieChartBox.scss";
import {  dataByMonthYear } from "../../data";


const PieChartBox = ({ selectedMonthYear }: { selectedMonthYear: string }) => {
    const data = dataByMonthYear[selectedMonthYear];

    return (
        <div className="pieChartBox">
            <div className="chart">
                <PieChart width={200} height={150}>
                    <Tooltip
                        contentStyle={{ background: "white", borderRadius: "5px" }}
                    />
                    <Pie
                        data={data}
                        innerRadius={"75%"}
                        outerRadius={"92%"}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                        <tspan x="50%" dy="0" fontSize="20px">200</tspan>
                        <tspan x="50%" dy="15" fontSize="10px" fill="gray">Totale</tspan>
                    </text>

                </PieChart>

            </div>
            <div className="options">
                {data.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{ backgroundColor: item.color }} />
                            <span>{item.name} - {item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartBox;