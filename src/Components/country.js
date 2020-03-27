import React from "react";

const deaths = [];

const Country = ({ info }) => {
  deaths.push(info.deaths);
  return (
    <>
      <tbody>
        <tr>
          <th>{info.country}</th>
          <td>{info.cases}</td>
          <td>{info.todayCases}</td>
          <td className="red">{info.deaths}</td>
          <td className="red_200">{info.todayDeaths}</td>
          <td className="green">{info.recovered}</td>
          <td>{info.active}</td>
          <td>{info.critical}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Country;
