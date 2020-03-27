import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [],
  datasets: [
    {
      label: "10 Countries with most cases",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "#7e2424b2",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.9,
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
  if (data.datasets[0].data.length <= 10) {
    data.labels.push(info.country);
    data.datasets[0].data.push(info.cases);
  }

  return <>{console.log("from graph", data.datasets[0].backgroundColor)}</>;
};

export const Graph = () => {
  return (
    <div>
      <Line
        data={data}
        width={50}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

// export default { Count, Graph };
