import React from "react";

const OrderErrors = ({ errors }) => {
  const orderErrors = Object.values(errors).map((error, i) => {
    return <div key={i}>{error}</div>;
  });

  return <div>{orderErrors}</div>;
};

export default OrderErrors;
