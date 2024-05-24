import React from "react";
import Car from "./Car";

const PropsPrac = () => {
  //   const carInfo = "Ford";
  const carInfo = { name: "ford" };

  return (
    <>
      <h1>Who lives in my garage?</h1>
      {/* <Car brand="Ford" model="2017" /> */}
      {/* <Car brand={carInfo} model="2017" /> */}
      <Car brand={carInfo} />
    </>
  );
};

export default PropsPrac;
