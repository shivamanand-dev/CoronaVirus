import React from "react";
import CountWorldDeath from "./countWorldDeath";

const WorldDeath = ({ info }) => {
  return (
    <>
      {(console.log(info[1]), "from worldeath")}
      {info[1].map(info => (
        <CountWorldDeath info={info} />
      ))}
    </>
  );
};

export default WorldDeath;
