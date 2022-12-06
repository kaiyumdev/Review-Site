import React from "react";
import './Dashboard.css';
import {
  RadialBar,
  Legend,
  Tooltip,
  RadialBarChart,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };
  return (
    <div className="chart-container">
      <div className="radial-bar">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: "#f3f9d2", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="revenue"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </div>
      <div className="pie-chart">
        <PieChart width={730} height={250}>
          <Pie
            dataKey="revenue"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#f3f9d2" />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="simple-pie-chart">
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
      <div className="simple-radial">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="70%"
            cy="70%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#f3f9d2" }}
              background
              clockWise
              dataKey="revenue"
            />
            <Legend
            dataKey="revenue"
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
