import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      label: "Death Per Country",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgb(192, 75, 75)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};

export const Count = ({ info }) => {
  if (data.labels.length > 10) {
    data.labels.push(info.country);
    data.datasets[0].data.push(info.cases);
  }
  return <>{console.log("from graph")}</>;
};

export const Graph = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

// export default { Count, Graph };
