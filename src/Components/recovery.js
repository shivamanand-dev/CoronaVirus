import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Active Cases+Deaths", "recovered"],
  datasets: [
    {
      data: [],
      backgroundColor: ["#FF6384", "#36A2EB"]
      //   hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

const doughnut = cases => {
  let active = cases.cases.cases - cases.cases.deaths - cases.cases.recovered;
  data.datasets[0].data.push(cases.cases.deaths + active);
  data.datasets[0].data.push(cases.cases.recovered);

  data.datasets[0].data = data.datasets[0].data.filter(Number);

  //   let mortality =

  return (
    <>
      <Doughnut data={data} />
      {console.log(cases)}
      {console.log(data.datasets[0].data)}
      {console.log(active)}
    </>
  );
};

export default doughnut;
