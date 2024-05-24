import React from "react";

const Car = ({ brand }) => {
  return (
    <>
      {/* <h1>Hi!, I am {props.brand}</h1> */}
      <h1>
        Hi!, I am {brand.name} and year model is {brand.model || "2020"}
      </h1>
    </>
  );
};

export default Car;
