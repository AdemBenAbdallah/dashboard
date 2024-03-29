import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './histogramGraph.scss';
import { useState } from 'react';
import { options } from '../../data';

const HistogramGraph = () => {
    const [selectedOption, setSelectedOption] = useState('last7days');
    const [data, setData] = useState([
        {
            name: '23/03',
            uv: 100,
            pv: 200,
        },
        {
            name: '24/03',
            uv: 150,
            pv: 100,
        },
        {
            name: '25/03',
            uv: 200,
            pv: 0,
        },
        {
            name: '26/03',
            uv: 250,
            pv: 100,
        },
        {
            name: '27/03',
            uv: 100,
            pv: 200,
        },
        {
            name: '28/03',
            uv: 150,
            pv: 100,
        },
        {
            name: '29/03',
            uv: 200,
            pv: 200,
        },
    ]);


    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value;
        setSelectedOption(newOption);
        setData(options[newOption]);
    };


    const yTickValues = [0, 100, 200, 300, 400];


    return (
        <div className="histogram-graph">
            <div className="top-graph">
                <div className="titles">
                    <h4>Aperçu général</h4>
                    <div className="box">
                        <div className="bar-details">
                            <div className="dot" style={{ backgroundColor: "#F69069" }} />
                            <span>Revenue</span>
                        </div>
                        <div className="bar-details">
                            <div className="dot" style={{ backgroundColor: "#C24E21" }} />
                            <span>Activités d’utilisateurs</span>
                        </div>
                    </div>
                </div>
                <select className="Days" value={selectedOption} onChange={handleOptionChange}>
                    <option value="last7days">Les 7 derniers jours</option>
                    <option value="04/2023">Avril 2023</option>
                    <option value="05/2023">Mai 2023</option>
                </select>
            </div>
            <div className="graph">
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid
                            horizontal={true}
                            vertical={false}
                            strokeDasharray="20 10"
                            stroke="rgba(128, 128, 128, 0.2)"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                dy: 10,
                            }}
                        />
                        <YAxis axisLine={false} domain={[0, 400]} ticks={yTickValues} tickLine={false} tick={{
                            fontWeight: '600',
                        }} />
                        <Bar
                            dataKey="pv"
                            barSize={32}
                            stackId="a"
                            fill="#C24E21"
                        />
                        <Bar
                            dataKey="uv"
                            barSize={32}
                            stackId="a"
                            fill="#F69069"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default HistogramGraph;
